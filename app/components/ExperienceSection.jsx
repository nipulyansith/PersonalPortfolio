import {
  TbSchool, TbMapPin, TbCalendar, TbUserPlus,
  TbBrain, TbLayoutDashboard, TbPresentation, TbForms, TbChartBar,
  TbBell, TbGitBranch, TbSettings, TbChevronDown, TbBuildingSkyscraper,
  TbFilter, TbHistory, TbList, TbMessage, TbRefresh, TbFileExport, TbLayoutGrid, TbTextSize, TbCheck, TbLink, TbUpload,
} from "react-icons/tb";
import { TechnologyBadges } from "./TechnologyBadge";

const projects = [
  {
    title: "Incident management workspace",
    features: [["Queues", TbList], ["Filters", TbFilter], ["History", TbHistory]],
    category: "Enterprise workflows",
    Icon: TbLayoutDashboard,
    accent: "#c4b5fd",
    summary: "Rebuilt the legacy workflow frontend in Angular and TypeScript within the Unified Experience Console.",
    details: "Added saved queues, advanced filters, workflow-driven fields, configurable incident tables and exports, status and assignee updates, comments, activity history, and subtasks. Supported migration from the legacy interface.",
  },
  {
    title: "AI review-processing engine",
    features: [["Reviews", TbMessage], ["Scoring", TbBrain], ["Retries", TbRefresh]],
    category: "AI & automation",
    Icon: TbBrain,
    accent: "#6ee7b7",
    summary: "Built an hourly OpenAI sentiment-scoring scheduler with automatic retries and duplicate-safe processing.",
    details: "Redis locks prevent overlapping runs per company. Failed runs retry on the next cycle, while review-history backfilling during onboarding uses concurrent workers with MongoDB persistence.",
  },
  {
    title: "PowerPoint report builder",
    features: [["Pages", TbPresentation], ["Widgets", TbLayoutGrid], ["Export", TbFileExport]],
    category: "Self-service reporting",
    Icon: TbPresentation,
    accent: "#f9a8d4",
    summary: "Designed a PptxGenJS report builder that turns analytics into branded PowerPoint presentations.",
    details: "Replaced manual screenshots with an interactive builder for adding, deleting, and reordering pages, resizing widgets, and adding text.",
  },
  {
    title: "Customer onboarding app",
    features: [["Verify", TbCheck], ["Connect", TbLink], ["Set up", TbSettings]],
    category: "Customer onboarding",
    Icon: TbUserPlus,
    accent: "#7dd3fc",
    summary: "Replaced manual database-based setup with a customer onboarding application.",
    details: "Implemented email OTP verification, survey and workflow creation, Google and Facebook connection flows for Online Review Management, and automated support email alerts for onboarding failures.",
  },
  {
    title: "Dynamic incident forms",
    features: [["Fields", TbTextSize], ["Rules", TbGitBranch], ["Uploads", TbUpload]],
    category: "Configuration-driven UX",
    Icon: TbForms,
    accent: "#fcd34d",
    summary: "Replaced lengthy legacy surveys with streamlined, configuration-driven incident forms.",
    details: "Implemented custom fields, status validation, and file uploads to support the client’s incident workflows.",
  },
  {
    title: "Configurable analytics dashboards",
    features: [["Widgets", TbLayoutGrid], ["Filters", TbFilter], ["Explore", TbChartBar]],
    category: "Data & insights",
    Icon: TbChartBar,
    accent: "#a5b4fc",
    summary: "Delivered social listening and review analytics with reusable filters and interactive drilldowns.",
    details: "Clients can add widgets to their own dashboards and export data for reporting and further analysis.",
  },
];

const internshipHighlights = [
  {
    title: "Agentic AI alerting",
    Icon: TbBell,
    summary: "A Node.js and LangChain proof of concept turning feedback and CRM data into personalized email and SMS alerts.",
    details: "Combined feedback and CRM data to generate personalized alerts for negative feedback.",
  },
  {
    title: "Tools for customer success",
    Icon: TbSettings,
    summary: "A full-stack portal for creating and editing Social Listening and Online Review Management configurations.",
    details: "Replaced a manual handoff where developers inserted configurations directly into the database.",
  },
  {
    title: "Geofenced field sales",
    Icon: TbMapPin,
    summary: "React and Node.js/Express.js features for location-based check-ins, complaint workflows, and approvals.",
    details: "Implemented bar registration, check-in/check-out, approval management, and REST API endpoints for searching bars and salespersons.",
  },
  {
    title: "Adaptable workflow systems",
    Icon: TbGitBranch,
    summary: "JSON Logic workflows and subtask forms that adapt to parent fields, defaults, and dependent dropdowns.",
    details: "Added visibility and read-only controls, parent-field mapping, and API endpoints for custom case-report filters.",
  },
  {
    title: "Faster case management",
    Icon: TbLayoutDashboard,
    summary: "Inline updates, document previews, and quick comments that keep case management in the main view.",
    details: "Revamped incident interfaces with status and assignee updates, image/PDF previews, and paginated subtask tables.",
  },
];

const currentStack = ["Angular", "TypeScript", "Node.js", "MongoDB", "Redis", "OpenAI API", "PptxGenJS"];
const internshipStack = ["Angular", "React", "Node.js", "Express.js", "REST APIs", "JSON Logic", "LangChain"];

function FeaturePreview({ features }) {
  return (
    <div aria-hidden="true" className="mb-5 grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-3">
      {features.map(([label, Icon]) => (
        <div key={label} className="flex min-w-0 flex-col items-center gap-2 py-2 text-center">
          <Icon className="h-6 w-6 text-[var(--experience-accent)]" />
          <span className="text-sm text-white/55">{label}</span>
        </div>
      ))}
    </div>
  );
}

function TechnicalDetails({ children }) {
  return (
    <details className="group/details mt-5 border-t border-white/10 pt-3">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded text-sm font-medium text-white/55 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300 [&::-webkit-details-marker]:hidden">
        Technical details
        <TbChevronDown aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform group-open/details:rotate-180" />
      </summary>
      <p className="mt-3 text-base leading-relaxed text-white/65">{children}</p>
    </details>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="relative px-4 py-12 text-white sm:py-20 xl:px-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-purple-300">Where I’ve made an impact</p>
            <h2 id="experience-heading" className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Professional Experience</h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-white/55">Enterprise workflows, self-service analytics, and AI-powered products built for everyday use.</p>
        </div>

        <div className="relative mt-10">
          <div aria-hidden="true" className="absolute bottom-12 left-[1.375rem] top-12 hidden w-px bg-gradient-to-b from-purple-400/60 via-purple-400/20 to-cyan-300/30 sm:block" />
          <ol className="space-y-8">
            <li className="relative sm:pl-14">
              <span aria-hidden="true" className="absolute left-3 top-10 hidden h-5 w-5 items-center justify-center rounded-full border border-purple-300/60 bg-[#17131f] ring-4 ring-[#121212] sm:flex"><span className="h-2 w-2 rounded-full bg-purple-300" /></span>
              <article className="overflow-hidden rounded-3xl border border-purple-400/20 bg-gradient-to-br from-[#201a2d] via-[#17151d] to-[#151419]">
                <header className="relative border-b border-white/10 p-5 sm:p-7">
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/60 to-transparent" />
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-300/20 bg-purple-400/10"><TbBuildingSkyscraper aria-hidden="true" className="h-6 w-6 text-purple-200" /></span>
                      <div>
                        <p className="text-lg font-semibold tracking-tight">Emojot <span className="text-sm font-normal text-white/45">(Pvt) Ltd.</span></p>
                        <p className="mt-1 flex items-center gap-1.5 text-sm text-white/50"><TbMapPin aria-hidden="true" className="h-4 w-4" />Colombo, Sri Lanka</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-purple-400/10 px-3 py-1.5 text-sm text-purple-200"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-purple-300" />Current role</span>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Software Engineer</h3>
                    <p className="flex items-center gap-2 text-sm text-white/55"><TbCalendar aria-hidden="true" className="h-4 w-4" />May 2026 – Present</p>
                  </div>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/65">Building across the stack, from the first workflow to client adoption. Here are some of the products I’ve helped bring to life.</p>
                </header>

                <div className="p-3 sm:p-6">
                  <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3 sm:gap-4">
                    {projects.map(({ title, category, Icon, accent, features, summary, details }) => (
                      <div key={title} style={{ "--experience-accent": accent }} className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-colors duration-300 hover:border-[var(--experience-accent)] hover:bg-white/[0.045]">
                        <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[var(--experience-accent)] opacity-[0.04] blur-2xl transition-opacity group-hover:opacity-[0.1]" />
                        <div className="relative flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5"><Icon aria-hidden="true" className="h-5 w-5 text-[var(--experience-accent)]" /></span>
                          <p className="text-sm font-medium text-[var(--experience-accent)]">{category}</p>
                        </div>
                        <div className="mt-4"><FeaturePreview features={features} /></div>
                        <h4 className="text-lg font-semibold leading-snug text-white/90">{title}</h4>
                        <p className="mb-1 mt-3 text-base leading-relaxed text-white/60">{summary}</p>
                        <div className="mt-auto"><TechnicalDetails>{details}</TechnicalDetails></div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-white/10 pt-5"><TechnologyBadges items={currentStack} /></div>
                </div>
              </article>
            </li>

            <li className="relative sm:pl-14">
              <span aria-hidden="true" className="absolute left-3 top-10 hidden h-5 w-5 items-center justify-center rounded-full border border-cyan-200/30 bg-[#121212] ring-4 ring-[#121212] sm:flex"><span className="h-1.5 w-1.5 rounded-full bg-cyan-200/60" /></span>
              <article className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#171d22] to-[#151419]">
                <header className="border-b border-white/10 p-5 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="flex items-center gap-2 text-sm font-medium text-cyan-200/80"><TbSchool aria-hidden="true" className="h-5 w-5" />Where it started · Emojot (Pvt) Ltd.</p>
                    <p className="flex items-center gap-2 text-sm text-white/50"><TbCalendar aria-hidden="true" className="h-4 w-4" />Dec 2024 – Dec 2025</p>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Software Engineer Intern</h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/60">Hands-on full-stack development across workflow tools, customer success portals, and an agentic AI proof of concept.</p>
                </header>
                <div className="p-5 sm:p-7">
                  <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
                    {internshipHighlights.map(({ title, Icon, summary, details }) => (
                      <div key={title} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-200/10 bg-cyan-200/5"><Icon aria-hidden="true" className="h-5 w-5 text-cyan-200/70" /></span>
                        <div className="min-w-0">
                          <h4 className="text-base font-semibold text-white/85">{title}</h4>
                          <p className="mt-2 text-base leading-relaxed text-white/55">{summary}</p>
                          <TechnicalDetails>{details}</TechnicalDetails>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 border-t border-white/10 pt-5"><TechnologyBadges items={internshipStack} /></div>
                </div>
              </article>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
