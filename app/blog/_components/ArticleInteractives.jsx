"use client";

import { useState } from "react";
import {
  TbBrowser,
  TbApi,
  TbShieldCheck,
  TbCode,
  TbDatabase,
  TbCircleCheck,
  TbBug,
  TbSearch,
  TbRoute,
  TbListCheck,
  TbRefresh,
} from "react-icons/tb";

const requestLayers = [
  {
    label: "Frontend",
    Icon: TbBrowser,
    title: "A click is the beginning of a workflow.",
    description:
      "The interface gathers input, sends a request, and gives the user useful loading, success, or failure feedback.",
    question: "What does the user see if this request fails?",
  },
  {
    label: "API",
    Icon: TbApi,
    title: "The request crosses a contract.",
    description:
      "The frontend and backend need to agree on the request format, response shape, and how errors are represented.",
    question: "Are both sides expecting the same data?",
  },
  {
    label: "Middleware",
    Icon: TbShieldCheck,
    title: "Shared checks run before the feature logic.",
    description:
      "Depending on the application, middleware may check authentication, validate input, or attach context the next layer needs.",
    question: "Can this request reach the correct handler?",
  },
  {
    label: "Logic",
    Icon: TbCode,
    title: "Business rules turn input into an outcome.",
    description:
      "Application logic decides what work to do and how to coordinate it. Asynchronous execution, retries, and shared resources matter here.",
    question: "What happens if the same work arrives twice?",
  },
  {
    label: "Database",
    Icon: TbDatabase,
    title: "The system meets its stored state.",
    description:
      "Queries and updates depend on the actual data, not just the data we expected to find. Unexpected or incomplete records can change the result.",
    question: "Does the stored state match the assumptions in the code?",
  },
  {
    label: "Response",
    Icon: TbCircleCheck,
    title: "The outcome has to make sense to the user.",
    description:
      "The result travels back through the API to the interface. A successful backend operation still needs clear, correct frontend behaviour.",
    question: "Does the entire journey work, including the failure path?",
  },
];

const debugSteps = [
  {
    label: "Reproduce",
    Icon: TbBug,
    title: "Make the issue repeatable.",
    body: "Use the same inputs, filters, and sequence of actions. Note when the empty result appears and when it does not.",
  },
  {
    label: "Compare",
    Icon: TbListCheck,
    title: "Separate the expected result from the actual result.",
    body: "Expected: the screen shows matching records. Actual: the screen finishes loading but displays no results. That difference gives the investigation a clear target.",
  },
  {
    label: "Trace",
    Icon: TbRoute,
    title: "Follow the execution path.",
    body: "Trace the user action into the request, the server-side handling, and the response transformation. Avoid assuming the visible screen is where the problem begins.",
  },
  {
    label: "Inspect",
    Icon: TbSearch,
    title: "Look at the data at each boundary.",
    body: "Inspect the request parameters, API response, and relevant database state. Compare what each layer receives with what its code expects.",
  },
  {
    label: "Explain",
    Icon: TbCode,
    title: "Find a cause that explains the evidence.",
    body: "A field mismatch, an unexpected database state, or a timing issue might explain the result. Verify the explanation before changing the implementation.",
  },
  {
    label: "Verify",
    Icon: TbCircleCheck,
    title: "Fix the cause, then check the surrounding behaviour.",
    body: "Test the original case again, then check populated results, genuinely empty results, and failures. A fix should solve the issue and protect existing behaviour.",
  },
];

function StepExplorer({ steps, active, setActive, label }) {
  return (
    <ol className="grid grid-cols-3 gap-2 sm:grid-cols-6" aria-label={label}>
      {steps.map(({ label: stepLabel, Icon }, index) => (
        <li key={stepLabel}>
          <button
            type="button"
            onClick={() => setActive(index)}
            aria-pressed={active === index}
            className={`flex min-h-20 w-full flex-col items-center justify-center gap-2 rounded-xl border px-1 py-3 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#167765] ${active === index ? "border-[#167765] bg-[#e5f0e8] text-[#167765]" : "border-neutral-200 bg-white text-neutral-500 hover:border-neutral-300 hover:text-neutral-900"}`}
          >
            <Icon aria-hidden="true" className="h-5 w-5" />
            {stepLabel}
          </button>
        </li>
      ))}
    </ol>
  );
}

export function RequestFlow() {
  const [active, setActive] = useState(0);
  const current = requestLayers[active];
  return (
    <aside
      aria-label="Interactive full-stack request walkthrough"
      className="blog-interactive not-prose"
    >
      <p className="blog-interactive-eyebrow">Explore the idea</p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
        One action. A connected system.
      </h3>
      <p className="mb-5 mt-3 text-base leading-relaxed text-neutral-600">
        Select a layer to follow an illustrative request through an application.
      </p>
      <StepExplorer
        steps={requestLayers}
        active={active}
        setActive={setActive}
        label="Application request layers"
      />
      <div
        aria-live="polite"
        aria-atomic="true"
        className="mt-5 min-h-48 rounded-xl border border-neutral-200 bg-white p-4 sm:min-h-44 sm:p-5"
      >
        <h4 className="text-lg font-medium text-neutral-900">
          {current.title}
        </h4>
        <p className="mt-3 text-base leading-relaxed text-neutral-600">
          {current.description}
        </p>
        <p className="mt-4 border-l-2 border-[#167765] pl-3 text-base leading-relaxed text-[#167765]">
          {current.question}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap justify-between gap-3">
        <button
          type="button"
          className="blog-action"
          onClick={() =>
            setActive(
              (active + requestLayers.length - 1) % requestLayers.length,
            )
          }
        >
          Previous layer
        </button>
        <button
          type="button"
          className="blog-action"
          onClick={() => setActive((active + 1) % requestLayers.length)}
        >
          Next layer
        </button>
      </div>
    </aside>
  );
}

export function DebugWalkthrough() {
  const [active, setActive] = useState(0);
  const current = debugSteps[active];
  return (
    <aside
      aria-label="Interactive debugging walkthrough"
      className="blog-interactive not-prose"
    >
      <p className="blog-interactive-eyebrow">Try the mindset</p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
        Investigate before you change code.
      </h3>
      <p className="mb-5 mt-3 text-base leading-relaxed text-neutral-600">
        Illustrative exercise: a screen loads, but shows no results. Walk
        through the investigation.
      </p>
      <StepExplorer
        steps={debugSteps}
        active={active}
        setActive={setActive}
        label="Debugging investigation steps"
      />
      <div
        aria-live="polite"
        aria-atomic="true"
        className="mt-5 min-h-44 rounded-xl border border-neutral-200 bg-white p-4 sm:p-5"
      >
        <h4 className="text-lg font-medium text-neutral-900">
          {current.title}
        </h4>
        <p className="mt-3 text-base leading-relaxed text-neutral-600">
          {current.body}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap justify-between gap-3">
        <button
          type="button"
          onClick={() => setActive(0)}
          className="blog-action"
        >
          <TbRefresh aria-hidden="true" className="h-4 w-4" />
          Start over
        </button>
        <button
          type="button"
          onClick={() => setActive((active + 1) % debugSteps.length)}
          className="blog-action"
        >
          {active === debugSteps.length - 1
            ? "Back to the beginning"
            : "Next step"}
        </button>
      </div>
    </aside>
  );
}
