"use client";
import { useState } from "react";
import Image from "next/image";
import { TechnologyBadges } from "./TechnologyBadge";
const projectData = [
  {
    id: 6,
    title: "PitchIQ",
    description:
      "NBQSA 2026 Merit Award-winning cricket biomechanics analysis from a single side-on phone video. Research completed April 2026; now building a coach-focused web platform with annotated playback, session history, AI-generated PDF reports, and a chatbot.",
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
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    gitUrl:
      "https://github.com/ParkEase-UrbanParkingManagementSystem/parkeasewebapp",
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

    gitUrl:
      "https://github.com/ParkEase-UrbanParkingManagementSystem/parkeaseMobile",
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

    gitUrl:
      "https://github.com/ParkEase-UrbanParkingManagementSystem/parkeaseWardenMobile",
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

export default function ProjectsSection() {
  const [tag, setTag] = useState("all");
  const filtered = projectData.filter((p) => p.tag.includes(tag));
  return (
    <section id="projects" className="section-block work-section">
      <div className="section-shell">
        <header className="section-heading">
          <div>
            <p className="eyebrow">Selected portfolio</p>
            <h2 className="section-title">Ideas, made real.</h2>
          </div>
          <div className="section-heading-aside">
            <p>
              Web, mobile, and a little machine intelligence. A selection of
              things I’ve built.
            </p>
            <div className="project-filters" aria-label="Filter projects">
              {[
                ["all", "All work"],
                ["web", "Web"],
                ["mobile", "Mobile"],
              ].map(([value, label]) => (
                <button
                  type="button"
                  key={value}
                  onClick={() => setTag(value)}
                  aria-pressed={tag === value}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="project-filter-status" role="status">
              {filtered.length} projects to explore
            </p>
          </div>
        </header>
        <div className="project-grid" key={tag}>
          {filtered.map((project) => (
            <article
              className={`work-item work-${project.id}`}
              key={project.id}
            >
              <a
                className="work-image"
                href={project.previewUrl || project.gitUrl}
                target={
                  project.gitUrl && !project.previewUrl ? "_blank" : undefined
                }
                rel={
                  project.gitUrl && !project.previewUrl
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={
                  project.previewUrl
                    ? `Explore ${project.title}`
                    : `View code for ${project.title}`
                }
              >
                <Image
                  src={project.imgUrl}
                  alt={`${project.title} project`}
                  fill
                  sizes="(max-width: 760px) 90vw, 45vw"
                />
                <span className="work-image-action">
                  {project.previewUrl ? "Explore project" : "View source"}
                </span>
                {project.id === 6 && (
                  <span className="work-award">NBQSA Merit Award · 2026</span>
                )}
              </a>
              <div className="work-meta">
                <h3>{project.title}</h3>
                <span>{project.dates || "Personal project"}</span>
              </div>
              <p className="work-description">{project.description}</p>
              <TechnologyBadges
                items={project.technologies}
                label={`${project.title} technologies`}
              />
            </article>
          ))}
        </div>
        <div className="section-endnote">
          <p>More experiments. More things in the making.</p>
          <a
            className="text-link"
            href="https://github.com/nipulyansith"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore my GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
