"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import MenuOverlay from "./MenuOverlay";

const navlinks = [
  { title: "About", href: "/#about" },
  { title: "Graduation", href: "/#graduation" },
  { title: "Projects", href: "/#projects" },
  { title: "Experience", href: "/#experience" },
  { title: "Research", href: "/#research" },
  { title: "Contact", href: "/#contact" },
  { title: "Beyond Code", href: "/fun" },
  { title: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!navbarOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setNavbarOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navbarOpen]);

  return (
    <nav aria-label="Primary" className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled || navbarOpen ? "border-white/10 bg-[#121212]/95 shadow-lg backdrop-blur-xl" : "border-white/10 bg-[#121212]"}`}>
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-4 xl:px-6">
        <Link href="/" onClick={() => setNavbarOpen(false)} aria-label="Nipul Yansith home" className="flex min-h-11 shrink-0 items-center gap-3 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-300">
          <span aria-hidden="true" className="relative flex h-9 w-9 items-center justify-center">
            <span className="absolute -translate-y-0.5 text-3xl font-extrabold leading-none text-purple-500">N</span>
            <span className="absolute translate-x-1.5 translate-y-1.5 text-3xl font-extrabold leading-none text-fuchsia-500/70">Y</span>
          </span>
          <span className="text-sm font-semibold tracking-tight text-white/90 sm:text-base lg:hidden">Nipul Yansith</span>
        </Link>
        <button ref={menuButtonRef} type="button" onClick={() => setNavbarOpen((value) => !value)} aria-label={navbarOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={navbarOpen} aria-controls="mobile-navigation" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/85 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-300 lg:hidden">
          {navbarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
        <ul className="hidden items-center gap-1 lg:flex">
          {navlinks.map((link) => <NavLink key={link.href} {...link} active={pathname === link.href || (!link.href.includes("#") && pathname.startsWith(`${link.href}/`))} />)}
        </ul>
      </div>
      {navbarOpen && (
        <div className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-[#121212] lg:hidden">
          <MenuOverlay links={navlinks} setNavbarOpen={setNavbarOpen} pathname={pathname} />
        </div>
      )}
    </nav>
  );
}
