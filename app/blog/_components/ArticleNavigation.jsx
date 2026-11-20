"use client";

import { useEffect, useState } from "react";
import { TbChevronDown } from "react-icons/tb";

export default function ArticleNavigation({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const article = document.getElementById("article-body");
      if (!article) return;
      const top = article.getBoundingClientRect().top + window.scrollY;
      const range = Math.max(1, article.offsetHeight - window.innerHeight * 0.65);
      setProgress(Math.round(Math.min(1, Math.max(0, (window.scrollY - top + window.innerHeight * 0.2) / range)) * 100));
      let current = sections[0]?.id;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= window.innerHeight * 0.35) current = section.id;
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", update);
    document.addEventListener("visibilitychange", update);
    const observer = new ResizeObserver(update);
    const article = document.getElementById("article-body");
    if (article) observer.observe(article);
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("hashchange", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, [sections]);

  const links = (mobile = false) => sections.map(({ id, label }) => (
    <li key={id}>
      <a href={`#${id}`} aria-current={activeId === id ? "location" : undefined} onClick={(event) => {
        setActiveId(id);
        if (mobile) event.currentTarget.closest("details")?.removeAttribute("open");
      }} className={`block rounded-sm border-l px-3 py-2 text-sm leading-relaxed transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60 ${activeId === id ? "border-white/60 text-white/90" : "border-transparent text-white/45 hover:text-white/80"}`}>
        {label}
      </a>
    </li>
  ));

  return (
    <div className="mx-auto w-full min-w-0 max-w-[42rem] xl:mx-0 xl:max-w-none xl:sticky xl:top-24 xl:self-start">
      <div role="progressbar" aria-label="Article reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress} className="fixed inset-x-0 top-16 z-40 h-px bg-white/5">
        <div className="h-full origin-left bg-white/55 transition-transform duration-150 motion-reduce:transition-none" style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
      <nav aria-label="Article sections" className="hidden max-h-[calc(100dvh-8rem)] overflow-y-auto xl:block [scrollbar-width:thin]">
        <p className="mb-4 pl-3 text-sm font-semibold text-white/80">Contents</p>
        <ol className="space-y-1">{links()}</ol>
        <p className="mt-5 border-t border-white/10 px-3 pt-4 text-sm text-white/35">{progress}% read</p>
      </nav>
      <details className="group border-y border-white/15 xl:hidden">
        <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-1 py-3 text-sm font-medium text-white/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60 [&::-webkit-details-marker]:hidden">Contents<TbChevronDown aria-hidden="true" className="h-4 w-4 transition-transform group-open:rotate-180" /></summary>
        <nav aria-label="Article sections" className="max-h-[60dvh] overflow-y-auto px-2 pb-3"><ol className="space-y-1">{links(true)}</ol></nav>
      </details>
    </div>
  );
}
