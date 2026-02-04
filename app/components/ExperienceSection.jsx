"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TbSettings,
  TbLayoutDashboard,
  TbLink,
  TbSparkles,
} from "react-icons/tb";

const ExperienceSection = () => {
  const HIGHLIGHTS = [
    {
      Icon: TbSettings,
      title: "Full-Stack Feature Development",
      desc: "Built configurable workflow modules with dynamic forms, field mappings, and subtask management features.",
    },
    {
      Icon: TbLayoutDashboard,
      title: "Frontend System Improvements",
      desc: "Redesigned workflow and incident management interfaces, improving usability and responsiveness.",
    },
    {
      Icon: TbLink,
      title: "Automation & Integrations",
      desc: "Implemented backend integrations to automatically generate workflow incidents from issue submissions.",
    },
    {
      Icon: TbSparkles,
      title: "AI-Powered Proof of Concept",
      desc: "Developed a Node.js-based POC integrating Agentic AI to generate personalized alerts from multi-source data.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative text-white py-16 px-4 xl:px-16"
      id="experience"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center md:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 mx-auto md:mx-0">
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            Industry Experience
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-6">
            Software Engineer – Intern
          </h2>

          <p className="text-purple-300 mt-2">
            Emojot (Pvt) Ltd • Dec 2024 – Aug 2025
          </p>

          <p className="mt-4 text-white/75 max-w-3xl leading-relaxed">
            Contributed to enterprise workflow and incident management systems,
            building scalable frontend features and backend integrations within
            an AI-driven SaaS platform.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {HIGHLIGHTS.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40"
            >
              {/* subtle glow on hover */}
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                    <Icon className="text-xl text-purple-300" />
                  </div>
                  <h4 className="font-semibold text-white text-lg">
                    {title}
                  </h4>
                </div>

                <p className="mt-4 text-sm text-white/65 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Used */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-sm text-white/60 uppercase tracking-wider">
            Technologies Used
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "Angular",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "REST APIs",
              "Agentic AI",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:border-purple-400/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
