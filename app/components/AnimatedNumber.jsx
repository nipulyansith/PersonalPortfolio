"use client";
import { useEffect, useRef, useState } from "react";
export default function AnimatedNumber({ value, decimals = 0 }) {
  const ref = useRef(null),
    [display, setDisplay] = useState(value);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const animate = (now) => {
          const progress = Math.min(1, (now - start) / 1100);
          setDisplay(value * (1 - Math.pow(1 - progress, 3)));
          if (progress < 1) frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
      },
      { threshold: 0.4 },
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);
  return (
    <span
      ref={ref}
      className="animated-number"
      aria-label={value.toFixed(decimals)}
    >
      <span aria-hidden="true">{display.toFixed(decimals)}</span>
    </span>
  );
}
