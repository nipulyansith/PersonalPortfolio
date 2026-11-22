"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { TbScan, TbAward } from "react-icons/tb";
import { TechnologyBadges } from "./TechnologyBadge";
import AnimatedNumber from "./AnimatedNumber";
const views = [
  {
    label: "The idea",
    heading: "Biomechanics. From a single phone video.",
    caption: "Single-video motion analysis",
    paragraphs: [
      "I built a pose-estimation pipeline that extracts knee and elbow angles, stride length, step timing, wrist velocity, and head alignment. Automatic event detection and stump-based calibration bring the analysis closer to everyday cricket coaching.",
      "A side-on phone video is the starting point. The goal is to make meaningful biomechanical feedback more practical for coaches and bowlers.",
    ],
  },
  {
    label: "The validation",
    heading: "Measured against the real game.",
    caption: "213 deliveries · 23 bowlers",
    paragraphs: [
      "Validated on 213 deliveries from 23 bowlers, with intraclass correlation coefficients (ICCs) of 1.00 for event frames, 0.97 for delivery stride, and 0.96 for knee kinematics.",
      "Against two expert coaches’ manual estimates, PitchIQ achieved the lowest mean absolute error across all 11 metrics. Elbow angle at arm-back measured 3.0° error versus 6.9–9.5° for the coaches; front-knee angle at foot contact measured 0.5° versus 5.1–9.2°.",
    ],
  },
  {
    label: "What’s next",
    heading: "From research to a coach’s toolkit.",
    caption: "Research completed · April 2026",
    paragraphs: [
      "The research was completed in April 2026. I’m now building a coach-focused web platform around the analysis pipeline.",
      "The work in progress includes video upload, annotated playback, session history, AI-generated PDF reports, and a chatbot. The aim is to make each session easier to review and learn from.",
    ],
  },
];
export default function ResearchSection() {
  const [active, setActive] = useState(0),
    buttons = useRef([]);
  const view = views[active];
  return (
    <section id="research" className="research-section section-block">
      <div className="section-shell">
        <header className="section-heading">
          <div>
            <p className="eyebrow">Research meets real life</p>
            <h2 className="section-title">
              A different angle
              <br />
              <span className="research-title-accent">on the game.</span>
            </h2>
          </div>
          <span className="recognition-badge">
            <TbAward aria-hidden="true" />
            NBQSA 2026 · Merit Award
          </span>
        </header>
        <div className="research-feature">
          <div className="research-visual">
            <Image
              src="/images/research-bowling.png"
              alt="A cricket bowler in motion, the subject of PitchIQ’s biomechanics research"
              fill
              sizes="(max-width:760px) 90vw, 55vw"
            />
            <div className="research-visual-label">
              <TbScan aria-hidden="true" />
              <span key={active}>{view.caption}</span>
            </div>
          </div>
          <div className="research-intro">
            <span className="tiny-label">Jan 2025 – Present</span>
            <h3>PitchIQ</h3>
            <div
              className="research-tabs"
              role="tablist"
              aria-label="Explore PitchIQ"
            >
              {views.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  role="tab"
                  id={`research-tab-${index}`}
                  aria-selected={active === index}
                  aria-controls="research-story"
                  tabIndex={active === index ? 0 : -1}
                  ref={(el) => {
                    buttons.current[index] = el;
                  }}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => {
                    let target;
                    if (event.key === "ArrowRight")
                      target = (index + 1) % views.length;
                    else if (event.key === "ArrowLeft")
                      target = (index + views.length - 1) % views.length;
                    else if (event.key === "Home") target = 0;
                    else if (event.key === "End") target = views.length - 1;
                    else return;
                    event.preventDefault();
                    setActive(target);
                    buttons.current[target]?.focus();
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div
              id="research-story"
              role="tabpanel"
              aria-labelledby={`research-tab-${active}`}
              className="research-story"
            >
              <div key={active}>
                <h4>{view.heading}</h4>
                {view.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <TechnologyBadges
              items={["Python", "OpenCV", "YOLOv8", "MediaPipe", "Flask"]}
              label="PitchIQ technologies"
            />
            <a href="#contact" className="text-link">
              Talk cricket. Talk PitchIQ.
            </a>
          </div>
        </div>
        <dl className="research-stats">
          {[
            [213, 0, "Deliveries analysed"],
            [23, 0, "Bowlers"],
            [11, 0, "Metrics benchmarked"],
            [0.96, 2, "Knee kinematics ICC"],
          ].map(([value, decimals, label]) => (
            <div key={label}>
              <dd>
                <AnimatedNumber value={value} decimals={decimals} />
              </dd>
              <dt>{label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
