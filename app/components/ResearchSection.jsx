"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TbBolt, TbDeviceCctv, TbChartDots3, TbShieldCheck, TbBone } from "react-icons/tb";
import { SiOpencv, SiPython, SiTensorflow } from "react-icons/si";

const ResearchSection = () => {
  const HIGHLIGHTS = [
    {
      Icon: TbBolt,
      title: "Goal",
      desc: "Build a low-cost, field-ready system that analyzes cricket fast bowling biomechanics in real time and gives actionable coaching feedback.",
    },
    {
      Icon: TbDeviceCctv,
      title: "Data & Setup",
      desc: "Outdoor data collection with multi-angle video capture to reduce occlusion and handle fast motion reliably.",
    },
    {
      Icon: TbChartDots3,
      title: "Key Metrics",
      desc: "Stride timing/length, joint angles, wrist velocity, release speed estimation, and alignment cues for coaching.",
    },
    {
      Icon: TbShieldCheck,
      title: "Impact",
      desc: "Supports technique improvement and injury prevention, especially in resource-limited coaching environments.",
    },
  ];

  const STACK = [
    { Icon: SiPython, label: "Python", color: "text-yellow-300" },
    { Icon: SiOpencv, label: "OpenCV", color: "text-green-400" },
    { Icon: TbBone, label: "Pose Estimation", color: "text-purple-300" },
    { Icon: SiTensorflow, label: "ML Models", color: "text-orange-300" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative text-white py-16 px-4 xl:px-16"
      id="research"
    >
      {/* Background glow + subtle grid */}
      <div className="pointer-events-none absolute inset-0">
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

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center md:text-left">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 mx-auto md:mx-0">
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            Research Experience
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-6">
            Biomechanical Evaluation for Cricket Fast Bowling (Ongoing)
          </h2>

          <p className="mt-4 text-white/75 leading-relaxed text-center md:text-left max-w-3xl">
            I’m developing a real-time, camera-based biomechanics system using pose estimation and computer vision to
            extract key bowling parameters and provide coach-friendly performance insights.
          </p>
        </div>

        {/* Main card */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left */}
            <div className="lg:col-span-7">
              <h3 className="text-xl font-semibold">What I’m building</h3>
              <p className="mt-2 text-white/70 leading-relaxed">
                A practical system that captures a bowler’s motion from video, detects skeletal keypoints, computes
                biomechanics metrics, and produces feedback that’s useful during training.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {HIGHLIGHTS.map(({ Icon, title, desc }) => (
                  <div
                    key={title}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                        <Icon className="text-2xl text-purple-300" />
                      </div>
                      <div>
                        <p className="font-semibold">{title}</p>
                        <p className="mt-1 text-sm text-white/65 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-purple-600/80 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-600"
                >
                  Discuss this research
                </a>
                <p className="mt-3 text-xs text-white/50">
                  Want to collaborate or ask about the methodology? Feel free to reach out.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-5">
              {/* Small image card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-fuchsia-500/10" />
                <Image
                  src="/images/kavisha2.png"
                  alt="Research preview"
                  width={900}
                  height={520}
                  className="h-[180px] w-full object-cover sm:h-[210px]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm px-4 py-3">
                    <p className="text-sm font-semibold text-white">Real-time analysis from video</p>
                    <p className="mt-1 text-xs text-white/70 font-bold">
                      Pose keypoints → Metrics → Coaching Insights
                    </p>
                  </div>
                </div>
              </div>

              {/* Tools card */}
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="font-semibold">Tools & Tech</p>
                <p className="mt-2 text-sm text-white/65">
                  Focused on robustness in outdoor sessions and a feedback style that coaches can use quickly.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {STACK.map(({ Icon, label, color }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2"
                    >
                      <Icon className={`text-lg ${color}`} />
                      <span className="text-sm text-white/70">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-white/10 bg-gradient-to-r from-purple-500/10 via-white/5 to-transparent p-4">
                  <p className="text-sm font-semibold">Focus Areas</p>
                  <ul className="mt-2 space-y-2 text-sm text-white/65">
                    <li>• Reliable keypoint tracking in real conditions</li>
                    <li>• Biomechanics metric extraction & validation</li>
                    <li>• Coach-friendly feedback and progress tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-center md:text-left text-sm text-white/50">
          Designed as a practical alternative to expensive lab-based biomechanics setups.
        </p>
      </div>
    </motion.section>
  );
};

export default ResearchSection;
