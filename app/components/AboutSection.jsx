"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TechnicalSkills from "./TechnicalSkills";

const AboutSection = () => (
  <section id="about" className="relative text-white py-12 px-4 sm:py-20 xl:px-16">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-600/15 blur-3xl" />
    </div>
    <div className="relative z-10 mx-auto max-w-6xl">
      <div className="grid items-center gap-10 md:grid-cols-2 xl:gap-20">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <Image src="/images/nipulai3.jpg" alt="Nipul Yansith" width={700} height={600} className="h-auto w-full object-cover" />
        </motion.div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-purple-300">About</p>
          <h2 className="mb-5 mt-4 text-3xl font-bold sm:text-5xl">About Me</h2>
          <p className="text-base leading-relaxed text-white/85">
            I’m a Software Engineer at Emojot, building enterprise workflow, analytics, and AI-powered products used by multiple client companies. My core stack is Angular, TypeScript, Node.js, and AWS.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            I deliver features end to end, from configurable workflow modules and self-service reporting to AI-driven review processing. I work in agile teams with CI/CD pipelines and collaborate closely with client-facing teams.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            I’m also the developer behind PitchIQ, an NBQSA Merit Award-winning cricket biomechanics platform, and a First Class Honours graduate from the University of Colombo School of Computing.
          </p>
          <div className="mt-8 space-y-6 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
            <h3 className="text-xl font-semibold">Education</h3>
            <div className="border-l-2 border-purple-500/50 pl-4">
              <h4 className="font-semibold">University of Colombo School of Computing</h4>
              <p className="mt-1 text-purple-300">B.Sc. (Hons) in Information Systems</p>
              <p className="mt-1 text-sm text-white/60">May 2022 – 2026</p>
              <p className="mt-3 text-white/85">First Class Honours · GPA: 3.70/4.00</p>
              <p className="mt-1 text-sm text-white/70">Director’s List: Four semesters</p>
            </div>
            <div className="border-l-2 border-purple-500/50 pl-4">
              <h4 className="font-semibold">Ananda College, Colombo</h4>
              <p className="mt-1 text-sm text-white/60">2018 – 2020</p>
              <p className="mt-2 text-white/75">G.C.E. Advanced Level (2020) · Z-score: 1.41</p>
            </div>
          </div>
        </div>
      </div>
      <TechnicalSkills />
    </div>
  </section>
);

export default AboutSection;
