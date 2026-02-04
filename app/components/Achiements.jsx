"use client";

import React from "react";
import { FaCertificate, FaGraduationCap, FaUsers } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi2";

const AchievementsSection = () => {
  const items = [
    {
      title: "Certifications",
      icon: FaCertificate,
      accent: "from-purple-500/20 to-fuchsia-500/10",
      bulletColor: "text-purple-400",
      list: [
        "Postman API Fundamentals Student Expert, Postman (2024)",
        "Java Object-Oriented Programming, LinkedIn Learning (2024)",
        "OOPs in Java, Great Learning Academy (2024)",
      ],
    },
    {
      title: "Academic Achievements",
      icon: FaGraduationCap,
      accent: "from-indigo-500/20 to-purple-500/10",
      bulletColor: "text-indigo-300",
      list: [
        "Dean's List — BSc. (Hons) in Information Systems (2024)",
        "National ICT Awards NBQSA — Finalists (2024)",
      ],
    },
    {
      title: "Extra-Curricular",
      icon: FaUsers,
      accent: "from-fuchsia-500/20 to-purple-500/10",
      bulletColor: "text-fuchsia-300",
      list: [
        "Secretary, Rekha — Music Circle UCSC (2024 – Present)",
        "Junior Treasurer, Students' Union UCSC (2023 – 2024)",
        "Incoming Global Volunteer Team Leader, AIESEC in Colombo Central (2022)",
      ],
    },
  ];

  return (
    <section className="relative py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-14 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-3xl" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 xl:px-16">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            Highlights & Milestones
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white tracking-tight sm:text-5xl">
            Achievements
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#ADB7BE] text-lg leading-relaxed">
            Certifications, academic achievements, and extra-curricular accomplishments that reflect my growth and leadership.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, icon: Icon, accent, bulletColor, list }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 shadow-xl backdrop-blur-md transition hover:-translate-y-1 hover:border-white/20"
            >
              {/* Gradient overlay */}
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition group-hover:opacity-100`} />

              {/* Shine */}
              <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-white/10 blur-2xl opacity-0 transition group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon className="text-purple-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                </div>

                <div className="mt-5 h-px w-full bg-white/10" />

                <ul className="mt-6 space-y-4">
                  {list.map((text) => (
                    <li key={text} className="flex items-start gap-3 text-[#E1E8F0]">
                      <HiCheckCircle className={`mt-0.5 text-xl ${bulletColor}`} />
                      <span className="leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover glow border */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
