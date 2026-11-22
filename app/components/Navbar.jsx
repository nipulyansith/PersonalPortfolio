"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  ["About Me", "/#about"],
  ["Portfolio", "/#projects"],
  ["Experience", "/#experience"],
  ["Blog", "/blog"],
  ["Beyond Code", "/fun"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [progress, setProgress] = useState(0);
  const trigger = useRef(null);
  const pathname = usePathname();
  useEffect(() => {
    let frame;
    const update = () => {
      setScrolled(window.scrollY > 24);
      const range = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(
        range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0,
      );
      if (pathname === "/") {
        let current = "top";
        for (const id of [
          "about",
          "projects",
          "experience",
          "research",
          "achievements",
          "graduation",
          "contact",
        ]) {
          const section = document.getElementById(id);
          if (section && section.getBoundingClientRect().top <= 170)
            current = id;
        }
        setActiveSection(current);
      }
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header-inner">
        <Link
          href="/"
          className="intro-monogram"
          aria-label="Nipul Yansith home"
          onClick={() => setOpen(false)}
        >
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path
              d="M9 35V13L28 35V13M20 13L30 25L40 13M30 25V36"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="square"
            />
          </svg>
        </Link>
        <nav className="site-desktop-nav" aria-label="Primary">
          {links.map(([label, href]) => (
            <Link
              href={href}
              key={href}
              aria-current={
                pathname === "/" && href === `/#${activeSection}`
                  ? "location"
                  : pathname === href ||
                      (!href.includes("#") && pathname.startsWith(`${href}/`))
                    ? "page"
                    : undefined
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <a className="site-talk" href="mailto:nipulyansith26@gmail.com">
          Let’s talk
        </a>
        <button
          ref={trigger}
          type="button"
          className="site-menu"
          aria-expanded={open}
          aria-controls="site-mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span
            className={open ? "menu-lines is-open" : "menu-lines"}
            aria-hidden="true"
          >
            <i />
            <i />
          </span>
        </button>
      </div>
      {open && (
        <nav
          id="site-mobile-navigation"
          className="site-mobile-nav"
          aria-label="Mobile navigation"
        >
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <a
            href="/Nipul_Yansith_CV.pdf"
            download
            onClick={() => setOpen(false)}
          >
            Download CV
          </a>
        </nav>
      )}
      <div className="site-scroll-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
    </header>
  );
}
