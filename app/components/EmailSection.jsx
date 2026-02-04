"use client";

import React, { useState } from "react";
import GithubIcon from "./../../public/images/github.png";
import LinkedInIcon from "./../../public/images/linkedin.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailSent(false);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      setIsSending(true);
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setEmailSent(true);
        e.target.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      {/* Background glow + subtle pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-3xl" />
        <div className="absolute right-12 top-48 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 xl:px-16">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            Contact
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white tracking-tight sm:text-5xl">
            Get in Touch
          </h2>

          <p className="mt-4 text-[#ADB7BE] text-lg leading-relaxed">
            I&apos;m currently looking for new opportunities. My inbox is always
            open — whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>

          {/* Socials */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              href="https://github.com/nipulyansith"
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <Image src={GithubIcon} alt="Github Icon" className="h-6 w-6" />
              <span className="text-sm font-medium">GitHub</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/nipul-yansith-183b8a156/"
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <Image src={LinkedInIcon} alt="LinkedIn Icon" className="h-6 w-6" />
              <span className="text-sm font-medium">LinkedIn</span>
            </Link>
          </div>
        </div>

        {/* Form (single centered card — not the same grid look as About) */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md sm:p-8">
            {/* top accent */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="text-white block text-sm mb-2">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="jacob@gmail.com"
                  className="w-full rounded-xl border border-white/10 bg-[#18191E]/70 px-4 py-3 text-sm text-gray-100 placeholder-[#9CA2A9] outline-none transition focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-white block text-sm mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Just saying Hi :)"
                  className="w-full rounded-xl border border-white/10 bg-[#18191E]/70 px-4 py-3 text-sm text-gray-100 placeholder-[#9CA2A9] outline-none transition focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-white block text-sm mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={7}
                  required
                  placeholder="Hey Nipul, I have a question about your work..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#18191E]/70 px-4 py-3 text-sm text-gray-100 placeholder-[#9CA2A9] outline-none transition focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="group relative mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 px-5 py-3 font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Send Message"}
                <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition group-hover:opacity-100 shadow-[0_0_25px_rgba(168,85,247,0.35)]" />
              </button>

              {emailSent && (
                <div className="mt-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                  ✅ Email sent successfully — I’ll get back to you soon!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
