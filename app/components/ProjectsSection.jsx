"use client";

import React, { useMemo, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "ParkEase WebApp",
    description:
      "The ParkEase web app allows administrators to manage parking lots, track parking space usage, and oversee transactions. It features real-time monitoring, reporting tools, and secure data management to optimize operations.",
    imgUrl: "/images/pew.png",
    tag: ["all", "web"],
    previewUrl: "/", // you can keep "/" or remove later
    gitUrl: "https://github.com/ParkEase-UrbanParkingManagementSystem/parkeasewebapp",
  },
  {
    id: 2,
    title: "GoviSaviya",
    description:
      "The Govi Saviya web app is a comprehensive platform connecting farmers directly with buyers. It allows farmers to list products, manage bids, and respond to buyer requests. Buyers can place orders, track shipments, and use a shopping cart for a seamless purchasing experience.",
    imgUrl: "/images/govi.jpeg",
    tag: ["all", "web"],
    previewUrl: "/",
    gitUrl: "https://github.com/Sonal000/goviSaviya1.0",
  },
  {
    id: 3,
    title: "ParkEase Driver MobileApp",
    description:
      "The ParkEase driver app helps users find available parking spots in real-time. It uses QR codes for entry and exit, automatically calculates tolls, and offers payment options while maintaining a history of parking sessions and receipts.",
    imgUrl: "/images/pem.png",
    tag: ["all", "mobile"],
    previewUrl: "/",
    gitUrl: "https://github.com/ParkEase-UrbanParkingManagementSystem/parkeaseMobile",
  },
  {
    id: 4,
    title: "ParkEase Warden MobileApp",
    description:
      "The ParkEase warden app lets wardens assign parking spots, monitor parking activity, and validate payments. It streamlines vehicle tracking and ensures efficient parking enforcement using a QR code system.",
    imgUrl: "/images/pem.png",
    tag: ["all", "mobile"],
    previewUrl: "/",
    gitUrl: "https://github.com/ParkEase-UrbanParkingManagementSystem/parkeaseWardenMobile",
  },
  {
    id: 5,
    title: "SmartStock",
    description:
      "A Laravel-based inventory management system that tracks items, categories, suppliers, and stock levels, offering features like real-time updates, low-stock alerts, reporting, and role-based access for efficient inventory control.",
    imgUrl: "/images/inv.png",
    tag: ["all", "web"],
    previewUrl: "/",
    gitUrl: "https://github.com/nipulyansith/InventoryManagementSystem-Laravel",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    <section id="projects" className="relative py-24">
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
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              Work
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white tracking-tight sm:text-5xl">
              My Projects
            </h2>
            <p className="mt-2 max-w-2xl text-[#ADB7BE]">
              A selection of web and mobile projects I’ve built across university and real-world work.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-6 sm:mt-0">
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
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.imgUrl}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>

        {/* Optional footer hint */}
        <div className="mt-10 text-center text-sm text-white/50">
          Want to see more? Check my GitHub for additional repositories and experiments.
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
