"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

// ✅ Icons (react-icons)
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiAngular, SiPostgresql, SiMongodb } from "react-icons/si";

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  const TAB_DATA = [
    {
      title: "education",
      id: "education",
      content: (
        <div className="space-y-6 border-l border-purple-500/40 pl-6">
          <div className="relative">
            <div className="absolute -left-[13px] top-2 h-3 w-3 rounded-full bg-purple-500 shadow-[0_0_18px_rgba(168,85,247,0.6)]" />
            <h4 className="text-lg font-semibold text-white">
              University of Colombo School of Computing
            </h4>
            <p className="text-sm text-purple-300">BSc (Hons) Information Systems</p>
            <p className="text-sm text-white/60">2022 – Present</p>
          </div>

          <div className="relative">
            <div className="absolute -left-[13px] top-2 h-3 w-3 rounded-full bg-purple-500 shadow-[0_0_18px_rgba(168,85,247,0.6)]" />
            <h4 className="text-lg font-semibold text-white">Ananda College</h4>
            <p className="text-sm text-white/60">Colombo 10 • 2018 – 2020</p>
          </div>

          <div className="relative">
            <div className="absolute -left-[13px] top-2 h-3 w-3 rounded-full bg-purple-500 shadow-[0_0_18px_rgba(168,85,247,0.6)]" />
            <h4 className="text-lg font-semibold text-white">Mahanama College</h4>
            <p className="text-sm text-white/60">Colombo 03 • 2007 – 2018</p>
          </div>
        </div>
      ),
    },
    {
      title: "certification",
      id: "certification",
      content: (
        <div className="grid gap-4">
          {[
            { name: "Postman API Fundamentals Student Expert", org: "Postman", year: "2024" },
            { name: "Java Object-Oriented Programming", org: "LinkedIn Learning", year: "2024" },
            { name: "OOPs in Java", org: "Great Learning Academy", year: "2024" },
          ].map((c) => (
            <div
              key={c.name}
              className="group rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/20"
            >
              <h4 className="font-semibold text-white">{c.name}</h4>
              <p className="text-sm text-purple-300">
                {c.org} • {c.year}
              </p>
              <div className="mt-3 h-px w-full bg-gradient-to-r from-purple-500/40 via-white/5 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      ),
    },
  ];

  const TECH = [
    { Icon: FaHtml5, label: "HTML5", color: "text-orange-500" },
    { Icon: FaCss3Alt, label: "CSS3", color: "text-blue-500" },
    { Icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
    { Icon: SiTypescript, label: "TypeScript", color: "text-sky-400" },
    { Icon: FaReact, label: "React", color: "text-cyan-400" },
    { Icon: SiNextdotjs, label: "Next.js", color: "text-white" },
    { Icon: SiAngular, label: "Angular", color: "text-red-500" },
    { Icon: FaNodeJs, label: "Node.js", color: "text-green-500" },
    { Icon: SiPostgresql, label: "PostgreSQL", color: "text-blue-300" },
    { Icon: SiMongodb, label: "MongoDB", color: "text-green-400" },
    { Icon: FaDocker, label: "Docker", color: "text-sky-300" },
    { Icon: FaGitAlt, label: "Git", color: "text-orange-400" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative text-white mt-2"
      id="about"
    >
      {/* ✅ Background glow + subtle grid */}
      <div className="pointer-events-none absolute inset-0 py-11">
        <div className="absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-3xl" />
        <div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* 🔹 Top Grid */}
      <div className="relative z-10 md:grid md:grid-cols-2 gap-10 items-center py-10 px-4 xl:gap-24 sm:py-16 xl:px-16">
        {/* Image card */}
        <div className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-purple-500/25 via-fuchsia-500/10 to-transparent blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src="/images/nipulai3.jpg"
              alt="about"
              width={700}
              height={600}
              className="h-auto w-full object-cover transition duration-500 hover:scale-[1.02]"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div className="mt-6 md:mt-0 text-left flex flex-col">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            About
          </p>

          <h2 className="text-4xl font-bold text-white mb-4 mt-6 tracking-tight sm:text-5xl">
            About Me
          </h2>

          <p className="text-base md:text-md text-white/85 leading-relaxed">
            Nipul Yansith is a fourth-year Information Systems (Hons) undergraduate at the University of Colombo School
            of Computing. He builds clean, reliable full-stack applications using React, Next.js, Angular, and Node.js,
            with experience across academic and real-world projects such as ParkEase and GoviSaviya.
          </p>

          <p className="text-base md:text-md text-white/75 leading-relaxed mt-4">
            He enjoys solving practical problems through software and approaches development with a strong focus on
            clarity, collaboration, and maintainable solutions.
          </p>

          {/* Tabs */}
          <div className="flex flex-row flex-wrap justify-start mt-8 gap-2">
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>
              Certifications
            </TabButton>
          </div>

          {/* Content */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>

      {/* 🔹 Technologies */}
      <div className="relative z-10 px-4 xl:px-16 pb-16">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-center mb-2">Technologies I’ve Worked With</h3>
          <p className="text-center text-white/60 mb-8">
            Tools and frameworks I use to build scalable, maintainable products.
          </p>

          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-6">
            {TECH.map(({ Icon, label, color }) => (
              <div
                key={label}
                title={label}
                className="group flex w-[120px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                <Icon className={`text-4xl ${color} transition group-hover:scale-110`} />
                <span className="mt-2 text-sm text-white/70 text-center">{label}</span>
                <div className="mt-3 h-px w-full bg-gradient-to-r from-purple-500/40 via-white/5 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
``
