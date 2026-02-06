"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import MenuOverlay from "./MenuOverlay";

const navlinks = [
  { title: "About", href: "/#about" },
  { title: "Projects", href: "/#projects" },
  { title: "Experience", href: "/#experience" },
  { title: "Contact", href: "/#contact" },
  { title: "Beyond Code", href: "/fun" },
];


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Add subtle "glass" + shadow when scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-300",
        scrolled
          ? "bg-[#121212]/75 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-[#121212] border-b border-[#33353F]",
      ].join(" ")}
    >
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 -top-24 h-48 w-48 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute right-10 -top-16 h-40 w-40 rounded-full bg-fuchsia-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
  
  {/* Signature Mark */}
  <div className="relative flex items-center justify-center h-9 w-9">
    <span className="absolute text-3xl font-extrabold text-purple-500 leading-none -translate-y-[2px]">
      N
    </span>
    <span className="absolute text-3xl font-extrabold text-fuchsia-500 leading-none translate-x-[6px] translate-y-[6px] opacity-70">
      Y
    </span>
  </div>

  {/* Name */}
  

</Link>








        {/* Mobile button */}
        <button
          onClick={() => setNavbarOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-200 transition hover:bg-white/10 hover:text-white mr-6"
          aria-label="Toggle menu"
        >
          {navbarOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Desktop links */}
        <div className="max-md:hidden md:block">
          <ul className="flex items-center gap-2">
            {navlinks.map((link, index) => (
  <NavLink key={index} href={link.href} title={link.title} />
))}



            {/* CTA button */}
            
          </ul>
          
        </div>
      </div>

      {/* Mobile overlay links */}
      {navbarOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#121212]/90 backdrop-blur-xl">
          <MenuOverlay links={navlinks} setNavbarOpen={setNavbarOpen} />
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
