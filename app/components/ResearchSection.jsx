"use client";

import Image from "next/image";
import { TechnologyBadges } from "./TechnologyBadge";

const ResearchSection = () => (
  <section id="research" className="relative px-4 py-12 text-white sm:py-20 xl:px-16">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-600/15 blur-3xl" />
    </div>
    <div className="relative z-10 mx-auto max-w-6xl">
      <p className="text-sm uppercase tracking-[0.2em] text-purple-300">Research & Product Development</p>
      <h2 className="mt-4 text-3xl font-bold sm:text-5xl">PitchIQ</h2>
      <p className="mt-3 text-xl text-white/85">Cricket Bowling Biomechanics Analysis Platform</p>
      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-purple-200">NBQSA 2026 Merit Award</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/70">Jan 2025 – Present</span>
      </div>
      <div className="mt-8 grid gap-8 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-8 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">Biomechanics from a single phone video</h3>
          <p className="mt-4 leading-relaxed text-white/75">
            I built a pose-estimation pipeline that extracts knee and elbow angles, stride length, step timing, wrist velocity, and head alignment from a single side-on phone video. Automatic event detection and stump-based calibration make the analysis practical for cricket coaching.
          </p>
          <p className="mt-4 leading-relaxed text-white/75">
            The research was completed in April 2026. I’m now building a coach-focused web platform with video upload, annotated playback, session history, AI-generated PDF reports, and a chatbot.
          </p>
          <h3 className="mt-8 text-xl font-semibold">Validated with bowlers and expert coaches</h3>
          <p className="mt-4 leading-relaxed text-white/75">
            Validated on 213 deliveries from 23 bowlers, with intraclass correlation coefficients (ICCs) of 1.00 for event frames, 0.97 for delivery stride, and 0.96 for knee kinematics.
          </p>
          <p className="mt-4 leading-relaxed text-white/75">
            Against two expert coaches’ manual estimates, PitchIQ achieved the lowest mean absolute error across all 11 metrics. Elbow angle at arm-back measured 3.0° error versus 6.9–9.5° for the coaches; front-knee angle at foot contact measured 0.5° versus 5.1–9.2°.
          </p>
          <a href="#contact" className="mt-8 inline-flex rounded-xl bg-purple-600 px-5 py-3 font-semibold transition hover:bg-purple-500">Discuss PitchIQ</a>
        </div>
        <div>
          <div className="overflow-hidden rounded-xl border border-white/10">
            <Image src="/images/kavisha2.png" alt="Cricket fast bowling motion used in biomechanics analysis" width={900} height={520} className="h-auto w-full object-cover" />
          </div>
          <dl className="mt-5 grid grid-cols-2 gap-4">
            {[ ["213", "Deliveries analyzed"], ["23", "Bowlers"], ["11", "Metrics benchmarked"], ["Apr 2026", "Research completed"] ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <dt className="text-sm text-white/60">{label}</dt>
                <dd className="mt-2 text-xl font-semibold sm:text-2xl text-purple-300">{value}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mt-6 text-lg font-semibold">Tools & Technologies</h3>
          <TechnologyBadges items={["Python", "OpenCV", "YOLOv8", "MediaPipe", "Flask", "Full-Stack Development"]} className="mt-4" />
        </div>
      </div>
    </div>
  </section>
);

export default ResearchSection;
