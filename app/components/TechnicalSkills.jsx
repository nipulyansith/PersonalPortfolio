"use client";

import { useEffect, useRef, useState } from "react";
import TechnologyBadge from "./TechnologyBadge";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
      "PHP",
      "Java",
      "C",
    ],
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
    skills: [
      "Node.js",
      "Express.js",
      "Flask",
      "REST APIs",
      "JSON Logic",
    ],
  },
  {
    title: "Databases & Caching",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Redis",
    ],
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

function SkillRow({ title, skills, reverse }) {
  const viewportRef = useRef(null);
  const groupRef = useRef(null);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    const group = groupRef.current;
    const measure = () => setOverflowing(group.scrollWidth > viewport.clientWidth + 1);
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(group);
    measure();
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid min-w-0 gap-2 py-3 md:grid-cols-[11rem_minmax(0,1fr)] md:items-center md:gap-5">
      <h4 className="text-sm font-semibold text-purple-200">{title}</h4>
      <div
        ref={viewportRef}
        className={`skills-marquee min-w-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300 ${overflowing ? "is-scrolling" : ""}`}
        style={{ "--skills-duration": `${skills.length * 6}s` }}
        tabIndex={overflowing ? 0 : undefined}
        role="region"
        aria-label={`${title} technologies`}
      >
        <div className={`skills-marquee-track ${reverse ? "skills-marquee-track-reverse" : ""}`}>
          <ul ref={groupRef} className="skills-marquee-group" aria-label={title}>
            {skills.map((name) => <li key={name} className="shrink-0 whitespace-nowrap"><TechnologyBadge name={name} compact /></li>)}
          </ul>
          {overflowing && (
            <ul className="skills-marquee-group skills-marquee-copy" aria-hidden="true">
              {skills.map((name) => <li key={name} className="shrink-0 whitespace-nowrap"><TechnologyBadge name={name} compact /></li>)}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TechnicalSkills() {
  return (
    <section id="technical-skills" aria-labelledby="technical-skills-heading" className="relative mt-12 min-w-0 sm:mt-16">
      <div aria-hidden="true" className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-500/10 via-transparent to-fuchsia-500/5 blur-2xl" />
      <div className="relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-5 sm:rounded-3xl sm:p-6 lg:p-8">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
        <h3 id="technical-skills-heading" className="text-2xl font-semibold sm:text-3xl">Technical Skills</h3>
        <p className="mt-2 max-w-xl text-base leading-relaxed text-white/60">The tools behind my web, mobile, and AI-powered products.</p>
        <div className="mt-4 divide-y divide-white/[0.06]">
          {skillGroups.map(({ title, skills }, index) => <SkillRow key={title} title={title} skills={skills} reverse={index % 2 === 1} />)}
        </div>
      </div>
    </section>
  );
}
