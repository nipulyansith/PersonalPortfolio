"use client";
import { useEffect, useRef, useState } from "react";
import { TbPlayerPause, TbPlayerPlay } from "react-icons/tb";
import TechnologyBadge from "./TechnologyBadge";
const skillGroups = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "PHP", "Java", "C"],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      "Angular",
      "React",
      "Next.js",
      "React Native",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Flask", "REST APIs", "JSON Logic"],
  },
  {
    title: "Databases & Caching",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis"],
  },
  {
    title: "AI & Computer Vision",
    skills: [
      "OpenAI API",
      "LangChain",
      "OpenCV",
      "YOLO",
      "MediaPipe",
      "NumPy",
      "Pandas",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS API Gateway",
      "Lambda",
      "S3",
      "CloudFront",
      "CloudWatch",
      "SQS",
      "SES",
      "SNS",
      "CodeBuild",
      "ECR",
      "Docker",
      "CI/CD",
      "Bitbucket Pipelines",
    ],
  },
  {
    title: "Tools & Practices",
    skills: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Jira",
      "Postman",
      "Jest",
      "Studio 3T",
      "MongoDB Compass",
      "Agile/Scrum",
    ],
  },
];

function SkillRow({ title, skills, reverse, paused }) {
  const viewport = useRef(null),
    group = useRef(null);
  const [overflowing, setOverflowing] = useState(false);
  useEffect(() => {
    const measure = () =>
      setOverflowing(
        group.current.scrollWidth > viewport.current.clientWidth + 1,
      );
    const observer = new ResizeObserver(measure);
    observer.observe(viewport.current);
    observer.observe(group.current);
    measure();
    return () => observer.disconnect();
  }, []);
  return (
    <div className="skill-row">
      <h4>{title}</h4>
      <div
        ref={viewport}
        className={`skills-marquee ${overflowing ? "is-scrolling" : ""} ${paused ? "is-paused" : ""}`}
        tabIndex={overflowing ? 0 : undefined}
        role="region"
        aria-label={`${title} technologies`}
        style={{ "--skills-duration": `${Math.max(26, skills.length * 4)}s` }}
      >
        <div className={`skills-marquee-track ${reverse ? "is-reversed" : ""}`}>
          <ul ref={group} className="skills-marquee-group">
            {skills.map((name) => (
              <li key={name}>
                <TechnologyBadge name={name} compact />
              </li>
            ))}
          </ul>
          {overflowing && (
            <ul
              className="skills-marquee-group skills-marquee-copy"
              aria-hidden="true"
            >
              {skills.map((name) => (
                <li key={name}>
                  <TechnologyBadge name={name} compact />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
export default function TechnicalSkills() {
  const [paused, setPaused] = useState(false),
    [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReduced(media.matches);
      if (media.matches) setPaused(true);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return (
    <section
      id="technical-skills"
      className="skills-section"
      aria-labelledby="skills-heading"
    >
      <div className="skills-heading">
        <p className="eyebrow">My toolkit</p>
        <h3 id="skills-heading">
          The tools
          <br />
          behind the work.
        </h3>
        <p className="muted">
          From the first component to the final deployment.
        </p>
        <button
          type="button"
          className="motion-control"
          onClick={() => setPaused(!paused)}
          aria-pressed={paused}
          disabled={reduced}
        >
          {paused ? (
            <TbPlayerPlay aria-hidden="true" />
          ) : (
            <TbPlayerPause aria-hidden="true" />
          )}
          {reduced
            ? "Motion reduced"
            : paused
              ? "Resume motion"
              : "Pause motion"}
        </button>
        <span className="skills-hint">
          Hover or focus a row to take a closer look.
        </span>
      </div>
      <div className="skill-rows">
        {skillGroups.map(({ title, skills }, index) => (
          <SkillRow
            key={title}
            title={title}
            skills={skills}
            reverse={index % 2 === 1}
            paused={paused}
          />
        ))}
      </div>
    </section>
  );
}
