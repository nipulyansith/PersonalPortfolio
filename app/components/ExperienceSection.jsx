"use client";
import { useRef, useState } from "react";
import { TechnologyBadges } from "./TechnologyBadge";
import {
  TbSchool,
  TbMapPin,
  TbCalendar,
  TbUserPlus,
  TbBrain,
  TbLayoutDashboard,
  TbPresentation,
  TbForms,
  TbChartBar,
  TbBell,
  TbGitBranch,
  TbSettings,
  TbChevronDown,
  TbBuildingSkyscraper,
  TbFilter,
  TbHistory,
  TbList,
  TbMessage,
  TbRefresh,
  TbFileExport,
  TbLayoutGrid,
  TbTextSize,
  TbCheck,
  TbLink,
  TbUpload,
} from "react-icons/tb";

const projects = [
  {
    title: "Incident management workspace",
    features: [
      ["Queues", TbList],
      ["Filters", TbFilter],
      ["History", TbHistory],
    ],
    category: "Enterprise workflows",
    Icon: TbLayoutDashboard,
    accent: "#c4b5fd",
    summary:
      "Rebuilt the legacy workflow frontend in Angular and TypeScript within the Unified Experience Console.",
    details:
      "Added saved queues, advanced filters, workflow-driven fields, configurable incident tables and exports, status and assignee updates, comments, activity history, and subtasks. Supported migration from the legacy interface.",
  },
  {
    title: "AI review-processing engine",
    features: [
      ["Reviews", TbMessage],
      ["Scoring", TbBrain],
      ["Retries", TbRefresh],
    ],
    category: "AI & automation",
    Icon: TbBrain,
    accent: "#6ee7b7",
    summary:
      "Built an hourly OpenAI sentiment-scoring scheduler with automatic retries and duplicate-safe processing.",
    details:
      "Redis locks prevent overlapping runs per company. Failed runs retry on the next cycle, while review-history backfilling during onboarding uses concurrent workers with MongoDB persistence.",
  },
  {
    title: "PowerPoint report builder",
    features: [
      ["Pages", TbPresentation],
      ["Widgets", TbLayoutGrid],
      ["Export", TbFileExport],
    ],
    category: "Self-service reporting",
    Icon: TbPresentation,
    accent: "#f9a8d4",
    summary:
      "Designed a PptxGenJS report builder that turns analytics into branded PowerPoint presentations.",
    details:
      "Replaced manual screenshots with an interactive builder for adding, deleting, and reordering pages, resizing widgets, and adding text.",
  },
  {
    title: "Customer onboarding app",
    features: [
      ["Verify", TbCheck],
      ["Connect", TbLink],
      ["Set up", TbSettings],
    ],
    category: "Customer onboarding",
    Icon: TbUserPlus,
    accent: "#7dd3fc",
    summary:
      "Replaced manual database-based setup with a customer onboarding application.",
    details:
      "Implemented email OTP verification, survey and workflow creation, Google and Facebook connection flows for Online Review Management, and automated support email alerts for onboarding failures.",
  },
  {
    title: "Dynamic incident forms",
    features: [
      ["Fields", TbTextSize],
      ["Rules", TbGitBranch],
      ["Uploads", TbUpload],
    ],
    category: "Configuration-driven UX",
    Icon: TbForms,
    accent: "#fcd34d",
    summary:
      "Replaced lengthy legacy surveys with streamlined, configuration-driven incident forms.",
    details:
      "Implemented custom fields, status validation, and file uploads to support the client’s incident workflows.",
  },
  {
    title: "Configurable analytics dashboards",
    features: [
      ["Widgets", TbLayoutGrid],
      ["Filters", TbFilter],
      ["Explore", TbChartBar],
    ],
    category: "Data & insights",
    Icon: TbChartBar,
    accent: "#a5b4fc",
    summary:
      "Delivered social listening and review analytics with reusable filters and interactive drilldowns.",
    details:
      "Clients can add widgets to their own dashboards and export data for reporting and further analysis.",
  },
];

const internshipHighlights = [
  {
    title: "Agentic AI alerting",
    Icon: TbBell,
    summary:
      "A Node.js and LangChain proof of concept turning feedback and CRM data into personalized email and SMS alerts.",
    details:
      "Combined feedback and CRM data to generate personalized alerts for negative feedback.",
  },
  {
    title: "Tools for customer success",
    Icon: TbSettings,
    summary:
      "A full-stack portal for creating and editing Social Listening and Online Review Management configurations.",
    details:
      "Replaced a manual handoff where developers inserted configurations directly into the database.",
  },
  {
    title: "Geofenced field sales",
    Icon: TbMapPin,
    summary:
      "React and Node.js/Express.js features for location-based check-ins, complaint workflows, and approvals.",
    details:
      "Implemented bar registration, check-in/check-out, approval management, and REST API endpoints for searching bars and salespersons.",
  },
  {
    title: "Adaptable workflow systems",
    Icon: TbGitBranch,
    summary:
      "JSON Logic workflows and subtask forms that adapt to parent fields, defaults, and dependent dropdowns.",
    details:
      "Added visibility and read-only controls, parent-field mapping, and API endpoints for custom case-report filters.",
  },
  {
    title: "Faster case management",
    Icon: TbLayoutDashboard,
    summary:
      "Inline updates, document previews, and quick comments that keep case management in the main view.",
    details:
      "Revamped incident interfaces with status and assignee updates, image/PDF previews, and paginated subtask tables.",
  },
];

const currentStack = [
  "Angular",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Redis",
  "OpenAI API",
  "PptxGenJS",
];
const internshipStack = [
  "Angular",
  "React",
  "Node.js",
  "Express.js",
  "REST APIs",
  "JSON Logic",
  "LangChain",
];

const roles = [
  {
    title: "Software Engineer",
    dates: "May 2026 – Present",
    intro: "Enterprise workflows, reporting, and AI-powered products.",
    items: projects,
    stack: currentStack,
  },
  {
    title: "Software Engineer Intern",
    dates: "Dec 2024 – Dec 2025",
    intro: "Full-stack development, customer success tools, and agentic AI.",
    items: internshipHighlights,
    stack: internshipStack,
  },
];
export default function ExperienceSection() {
  const [roleIndex, setRoleIndex] = useState(0),
    [featureIndex, setFeatureIndex] = useState(0),
    [view, setView] = useState("overview");
  const roleButtons = useRef([]),
    featureButtons = useRef([]);
  const role = roles[roleIndex],
    feature = role.items[featureIndex],
    FeatureIcon = feature.Icon;
  const selectRole = (index) => {
    setRoleIndex(index);
    setFeatureIndex(0);
    setView("overview");
  };
  function moveTab(event, index, count, select, refs, vertical = false) {
    const previous = vertical ? "ArrowUp" : "ArrowLeft",
      next = vertical ? "ArrowDown" : "ArrowRight";
    let target;
    if (event.key === next) target = (index + 1) % count;
    else if (event.key === previous) target = (index + count - 1) % count;
    else if (event.key === "Home") target = 0;
    else if (event.key === "End") target = count - 1;
    else return;
    event.preventDefault();
    select(target);
    refs.current[target]?.focus();
  }
  return (
    <section id="experience" className="section-block experience-section">
      <div className="section-shell">
        <header className="section-heading">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="section-title">
              Learning by
              <br />
              building.
            </h2>
          </div>
          <div className="section-heading-aside">
            <p>
              From my first internship to production software at Emojot. Select
              a role, explore a project, and look under the hood.
            </p>
            <a className="text-link" href="#contact">
              Let’s work together
            </a>
          </div>
        </header>
        <div className="experience-console">
          <div
            className="experience-role-tabs"
            role="tablist"
            aria-label="Professional roles"
          >
            {roles.map((item, index) => (
              <button
                type="button"
                key={item.title}
                id={`experience-role-${index}`}
                role="tab"
                aria-selected={roleIndex === index}
                aria-controls="experience-role-panel"
                tabIndex={roleIndex === index ? 0 : -1}
                ref={(el) => (roleButtons.current[index] = el)}
                onClick={() => selectRole(index)}
                onKeyDown={(event) =>
                  moveTab(event, index, roles.length, selectRole, roleButtons)
                }
              >
                <span>{item.title}</span>
                <small>{item.dates}</small>
                {index === 0 && (
                  <span className="current-role">Current role</span>
                )}
              </button>
            ))}
          </div>
          <div
            id="experience-role-panel"
            role="tabpanel"
            aria-labelledby={`experience-role-${roleIndex}`}
            className="experience-role-panel"
          >
            <header className="experience-company">
              <div>
                <TbBuildingSkyscraper aria-hidden="true" />
                <div>
                  <strong>Emojot (Pvt) Ltd.</strong>
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
              <p>{role.intro}</p>
            </header>
            <div className="experience-workspace">
              <div
                className="experience-feature-tabs"
                role="tablist"
                aria-label={`${role.title} projects`}
                aria-orientation="vertical"
              >
                {role.items.map((item, index) => (
                  <button
                    type="button"
                    role="tab"
                    id={`experience-feature-${index}`}
                    aria-selected={featureIndex === index}
                    aria-controls="experience-detail-panel"
                    tabIndex={featureIndex === index ? 0 : -1}
                    key={item.title}
                    ref={(el) => (featureButtons.current[index] = el)}
                    onClick={() => {
                      setFeatureIndex(index);
                      setView("overview");
                    }}
                    onKeyDown={(event) =>
                      moveTab(
                        event,
                        index,
                        role.items.length,
                        (target) => {
                          setFeatureIndex(target);
                          setView("overview");
                        },
                        featureButtons,
                        true,
                      )
                    }
                  >
                    <item.Icon aria-hidden="true" />
                    <span>{item.title}</span>
                  </button>
                ))}
              </div>
              <div
                className="experience-detail-panel"
                role="tabpanel"
                id="experience-detail-panel"
                aria-labelledby={`experience-feature-${featureIndex}`}
              >
                <div className="experience-detail-heading">
                  <span className="experience-detail-icon">
                    <FeatureIcon aria-hidden="true" />
                  </span>
                  <p className="eyebrow">
                    {feature.category || "Full-stack engineering"}
                  </p>
                  <h3>{feature.title}</h3>
                </div>
                <div
                  className="experience-view-controls"
                  role="group"
                  aria-label="Project detail view"
                >
                  <button
                    type="button"
                    aria-pressed={view === "overview"}
                    onClick={() => setView("overview")}
                  >
                    Overview
                  </button>
                  <button
                    type="button"
                    aria-pressed={view === "technical"}
                    onClick={() => setView("technical")}
                  >
                    Technical details
                  </button>
                </div>
                <div
                  className="experience-detail-copy"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <div key={`${roleIndex}-${featureIndex}-${view}`}>
                    <span className="tiny-label">
                      {view === "overview" ? "What I built" : "How it works"}
                    </span>
                    <p>
                      {view === "overview" ? feature.summary : feature.details}
                    </p>
                  </div>
                </div>
                {feature.features && (
                  <ul
                    className="experience-feature-chips"
                    aria-label="Feature highlights"
                  >
                    {feature.features.map(([label, Icon]) => (
                      <li key={label}>
                        <Icon aria-hidden="true" />
                        {label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <footer className="experience-stack">
              <span className="tiny-label">Tools behind this role</span>
              <TechnologyBadges items={role.stack} />
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
