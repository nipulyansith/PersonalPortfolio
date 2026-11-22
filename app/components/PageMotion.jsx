"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageMotion() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = document.querySelectorAll(
      ".section-heading, .work-item, .about-grid, .award-feature, .graduation-layout, .journal-feature, .beyond-teaser",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) {
            target.classList.add("is-revealed");
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.05 },
    );
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("will-reveal");
        observer.observe(element);
      }
    });
    return () => {
      observer.disconnect();
      elements.forEach((element) =>
        element.classList.remove("will-reveal", "is-revealed"),
      );
    };
  }, [pathname]);
  return null;
}
