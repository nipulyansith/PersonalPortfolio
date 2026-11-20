"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-16 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-24 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-9 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
        <motion.div initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="order-1 mx-auto w-full max-w-[16rem] sm:max-w-xs lg:order-2 lg:max-w-sm">
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-purple-500/20 to-fuchsia-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <Image src="/images/final.jpg" alt="Nipul Yansith, Software Engineer" width={380} height={380} sizes="(min-width: 1024px) 380px, (min-width: 640px) 320px, 256px" className="h-auto w-full object-cover" priority />
            </div>
          </div>
        </motion.div>
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="order-2 min-w-0 text-center lg:order-1 lg:text-left">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/60">Software Engineer</p>
          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Hello, I’m</span>
            <span className="mt-2 block">Nipul Yansith</span>
          </h1>
          <div className="mt-4 min-h-14 text-lg font-medium text-purple-200 sm:min-h-8 sm:text-xl">
            {reducedMotion ? "Full Stack Developer" : <TypeAnimation sequence={["Full Stack Developer", 1800, "Software Engineer", 1800, "Building AI-powered products", 1800]} wrapper="span" speed={48} repeat={Infinity} />}
          </div>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#ADB7BE] sm:text-lg lg:mx-0">
            I’m a Software Engineer at Emojot, building enterprise workflow, analytics, and AI-powered products with Angular, TypeScript, Node.js, and AWS. First Class Honours graduate and NBQSA Merit Award winner.
          </p>
          <div className="mt-7 grid gap-3 min-[360px]:grid-cols-2 sm:mx-auto sm:flex sm:w-fit lg:mx-0">
            <a href="#projects" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 px-5 py-3 text-base font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300">View Projects</a>
            <a href="/Nipul_Yansith_CV.pdf" download="Nipul_Yansith_CV.pdf" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300">Download CV</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
