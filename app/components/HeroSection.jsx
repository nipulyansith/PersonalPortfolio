"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative lg:py-20 py-14">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-10 top-24 h-72 w-72 rounded-full bg-purple-600/15 blur-3xl" />
        <div className="absolute right-10 top-10 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-3xl" />
      </div>

      {/* Keep the wide feel like your original */}
      <div className="px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-10">
          {/* LEFT */}
          <motion.div
            className="col-span-7 place-self-center text-center sm:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm tracking-[0.2em] text-white/60 uppercase mb-4">
              Software Engineer
            </p>

            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Hello, I’m{" "}
              </span>
              <span className="block mt-2">
                <TypeAnimation
                  sequence={[
                    "Nipul Yansith",
                    1200,
                    "A Full Stack Developer",
                    1200,
                    "A Mobile Developer",
                    1200,
                    "A Software Engineer",
                    1200,
                  ]}
                  wrapper="span"
                  speed={48}
                  repeat={Infinity}
                />
              </span>
            </h1>

            <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
              I’m a fourth-year Information Systems (Hons) undergraduate at the
              University of Colombo School of Computing. I build clean,
              reliable full-stack applications using React, Next.js, Angular,
              and Node.js, focused on solving real-world problems.
            </p>

            {/* Buttons (remove CV safely) */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-start justify-center">
              <a
                href="#projects"
                className="w-full sm:w-fit rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 px-6 py-3 text-white font-semibold transition hover:opacity-95"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="w-full sm:w-fit rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white font-semibold transition hover:bg-white/10"
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="col-span-5 place-self-center mt-6 sm:mt-0"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-tr from-purple-500/20 to-fuchsia-500/10 blur-2xl" />

              {/* Frame */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
                <Image
                  src="/images/final.jpg"
                  alt="hero image"
                  width={380}
                  height={380}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
