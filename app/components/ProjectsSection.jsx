"use client";

import React, { useMemo, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView, useReducedMotion } from "framer-motion";

const projectData = [
  {
    id: 6,
    title: "PitchIQ",
    description: "NBQSA 2026 Merit Award-winning cricket biomechanics analysis from a single side-on phone video. Research completed April 2026; now building a coach-focused web platform with annotated playback, session history, AI-generated PDF reports, and a chatbot.",
    imgUrl: "/images/kavisha2.png",
    tag: ["all", "web"],
    previewUrl: "#research",
    dates: "Jan 2025 – Present",
    technologies: ["Python", "OpenCV", "YOLOv8", "MediaPipe", "Flask"],
  },
  {
    id: 1,
    title: "ParkEase WebApp",
    description:
      "An urban parking management platform for Colombo Municipal Council (CMC). Built a role-based admin portal for users, wardens, parking operations, and finances, alongside driver and warden mobile apps with live availability and QR-based vehicle tracking.",
    imgUrl: "/images/pew.png",
    tag: ["all", "web"],
    dates: "Jun 2024 – Nov 2024",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
    gitUrl: "https://github.com/ParkEase-UrbanParkingManagementSystem/parkeasewebapp",
  },
  {
    id: 2,
    title: "GoviSaviya",
    dates: "Jun 2023 – Apr 2024",
    technologies: ["PHP", "MySQL", "JavaScript", "CSS"],
    description:
      "An e-commerce and logistics platform connecting farmers directly with buyers, with inventory management, dynamic pricing, bulk-order bidding, and delivery coordination. National ICT Awards NBQSA 2024 finalist.",
    imgUrl: "/images/govi.jpeg",
    tag: ["all", "web"],

    gitUrl: "https://github.com/Sonal000/goviSaviya1.0",
  },
  {
    id: 3,
    title: "ParkEase Driver App",
    dates: "Jun 2024 – Nov 2024",
    technologies: ["React Native", "Node.js", "PostgreSQL"],
    description:
      "The ParkEase driver app helps users find available parking spots in real-time. It uses QR codes for entry and exit, automatically calculates tolls, and offers payment options while maintaining a history of parking sessions and receipts.",
    imgUrl: "/images/pem.png",
    tag: ["all", "mobile"],

    gitUrl: "https://github.com/ParkEase-UrbanParkingManagementSystem/parkeaseMobile",
  },
  {
    id: 4,
    title: "ParkEase Warden App",
    dates: "Jun 2024 – Nov 2024",
    technologies: ["React Native", "Node.js", "PostgreSQL"],
    description:
      "The ParkEase warden app lets wardens assign parking spots, monitor parking activity, and validate payments. It streamlines vehicle tracking and ensures efficient parking enforcement using a QR code system.",
    imgUrl: "/images/pem.png",
    tag: ["all", "mobile"],

    gitUrl: "https://github.com/ParkEase-UrbanParkingManagementSystem/parkeaseWardenMobile",
  },
  {
    id: 5,
    title: "SmartStock",
    technologies: ["Laravel", "PHP"],
    description:
      "A Laravel-based inventory management system that tracks items, categories, suppliers, and stock levels, offering features like real-time updates, low-stock alerts, reporting, and role-based access for efficient inventory control.",
    imgUrl: "/images/inv.png",
    tag: ["all", "web"],

    gitUrl: "https://github.com/nipulyansith/InventoryManagementSystem-Laravel",
  },
];

const ProjectsSection = () => {
  const reducedMotion = useReducedMotion();
  const [tag, setTag] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const handleTagChange = (newTag) => setTag(newTag);

  const filteredProjects = useMemo(
    () => projectData.filter((project) => project.tag.includes(tag)),
    [tag]
  );

  // smoother + slightly premium animation
  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="projects" className="relative overflow-hidden py-12 sm:py-20">
      {/* Background glow + subtle dots (not grid like About) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-14 top-28 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-3xl" />
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
        <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              Work
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white tracking-tight sm:text-5xl">
              My Projects
            </h2>
            <p className="mt-2 max-w-2xl text-[#ADB7BE]">
              A selection of web and mobile projects I’ve built across university and real-world work.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-3 shrink-0 lg:mt-0">
            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
              <ProjectTag onClick={handleTagChange} name="all" isSelected={tag === "all"} />
              <ProjectTag onClick={handleTagChange} name="web" isSelected={tag === "web"} />
              <ProjectTag onClick={handleTagChange} name="mobile" isSelected={tag === "mobile"} />
            </div>
          </div>
        </div>

        {/* Cards */}
        <ul
          ref={ref}
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial={reducedMotion ? false : "hidden"}
              animate={isInView || reducedMotion ? "show" : "hidden"}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.imgUrl}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                technologies={project.technologies}
                dates={project.dates}
              />
            </motion.li>
          ))}
        </ul>

        {/* Optional footer hint */}
        <div className="mt-10 text-center text-sm text-white/50">
          Want to see more? Check my <a href="https://github.com/nipulyansith" className="inline-flex min-h-11 items-center text-purple-300 hover:underline">GitHub</a> for additional repositories and experiments.
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
