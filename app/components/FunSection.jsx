"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const FunSection = () => {
  const postmanImages = [
    "/images/fun/postman1.jpeg",
    "/images/fun/postman2.jpeg",
    "/images/fun/postman3.jpeg",
    "/images/fun/postman4.jpeg",
  ];

  const galleryImages = [
  { src: "/images/fun/g1.jpeg", w: 1200, h: 1600 },
  { src: "/images/fun/g2.jpeg", w: 1600, h: 1200 },
  { src: "/images/fun/g3.jpg",  w: 1920, h: 1080 },
  { src: "/images/fun/g4.jpeg", w: 1200, h: 1600 },
  { src: "/images/fun/g5.jpg",  w: 1600, h: 1200 },
  { src: "/images/fun/g6.jpeg", w: 1920, h: 1280 },
  { src: "/images/fun/g7.jpg",  w: 1080, h: 1350 },
];


  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative text-white py-16 px-4 xl:px-16 mt-14"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            Beyond Engineering
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mt-6">
            Music & Performances
          </h1>

          <p className="mt-4 text-white/75 max-w-2xl mx-auto">
            Music is a major part of my life. I perform, collaborate with my band,
            and explore creativity beyond software engineering.
          </p>
        </div>

        {/* 🔥 POSTMAN HIGHLIGHT SECTION */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Postman API Day 2023 – Live Performance
          </h2>

          <p className="text-white/70 text-center max-w-2xl mx-auto mb-10">
            I had the opportunity to perform at Postman API Day 2023 with two of my band members —
            an unforgettable experience combining technology and music.
          </p>

          {/* Portrait Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {postmanImages.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <div className="relative w-full h-[320px]">
                  <Image
                    src={img}
                    alt={`Postman performance ${i + 1}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70" />
              </div>
            ))}
          </div>
        </div>

        {/* 📸 GENERAL GALLERY */}
        {/* 📸 GENERAL GALLERY */}
<div className="mt-20">
  <h2 className="text-2xl font-semibold text-center mb-8">
    More Moments
  </h2>

  {/* Masonry-style columns */}
  <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
    {galleryImages.map((img, i) => (
      <div
        key={i}
        className="group mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
      >
        <Image
          src={img.src}
          alt={`Gallery ${i + 1}`}
          width={img.w}
          height={img.h}
          className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
      </div>
    ))}
  </div>
</div>

      </div>
    </motion.section>
  );
};

export default FunSection;
