"use client";
import { useEffect, useState } from "react";
import { TbPlayerPause, TbPlayerPlay } from "react-icons/tb";
const focusAreas = [
  "Enterprise workflows",
  "AI-powered experiences",
  "Thoughtful full-stack products",
];
export default function HeroFocus() {
  const [active, setActive] = useState(0),
    [paused, setPaused] = useState(false),
    [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (paused || reduced) return;
    const timer = setInterval(() => {
      if (!document.hidden)
        setActive((value) => (value + 1) % focusAreas.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [paused, reduced]);
  return (
    <div className="hero-focus">
      <span className="hero-focus-label">What I build</span>
      <span key={active} className="hero-focus-value">
        {focusAreas[active]}
      </span>
      <div className="hero-focus-controls" aria-label="Explore what I build">
        {focusAreas.map((area, index) => (
          <button
            key={area}
            type="button"
            onClick={() => {
              setActive(index);
              setPaused(true);
            }}
            aria-label={`Show ${area.toLowerCase()}`}
            aria-pressed={active === index}
          >
            <span />
          </button>
        ))}
        <button
          className="hero-focus-pause"
          type="button"
          onClick={() => setPaused(!paused)}
          disabled={reduced}
          aria-label={
            paused
              ? "Resume rotating focus areas"
              : "Pause rotating focus areas"
          }
          aria-pressed={paused}
        >
          {paused ? (
            <TbPlayerPlay aria-hidden="true" />
          ) : (
            <TbPlayerPause aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
