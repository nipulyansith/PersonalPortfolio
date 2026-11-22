import Image from "next/image";
import portrait from "../../public/images/nipul.png";
import HeroFocus from "./HeroFocus";
import { TechnologyBadges } from "./TechnologyBadge";

export default function HeroSection() {
  return (
    <section
      className="portfolio-intro"
      aria-labelledby="intro-heading"
      id="top"
    >
      <a className="intro-skip-link" href="#about">
        Skip to content
      </a>
      <aside
        className="intro-rail"
        aria-label="Software engineer, portfolio 2026"
      >
        <span className="intro-rail-role">Software Engineer</span>
        <span className="intro-rail-line" aria-hidden="true" />
        <span className="intro-rail-year">2026</span>
      </aside>
      <dl className="intro-credentials">
        <div>
          <dt>Honours graduate</dt>
          <dd>First Class</dd>
        </div>
        <div>
          <dt>NBQSA · PitchIQ</dt>
          <dd className="recognition-text">Merit Award</dd>
        </div>
      </dl>
      <div className="intro-greeting">
        <h1 id="intro-heading">
          Hello
          <span className="sr-only">
            , I’m Nipul Yansith, a software engineer.
          </span>
        </h1>
        <p>
          <span aria-hidden="true">— </span>I’m Nipul. I build things that
          matter.
        </p>
        <p className="intro-description">
          I’m a Software Engineer at Emojot, turning complex workflows,
          analytics, and AI into products people can use. I build across the
          stack, from the first interface to the services behind it.
        </p>
        <HeroFocus />
        <TechnologyBadges
          items={["Angular", "TypeScript", "Node.js", "AWS"]}
          label="My core stack"
          className="hero-technologies"
        />
        <a className="intro-primary-action" href="#projects">
          Explore my work
        </a>
      </div>
      <div className="intro-portrait">
        <Image
          src={portrait}
          alt="Nipul Yansith"
          fill
          priority
          sizes="(max-width: 600px) 100vw, 65vw"
        />
      </div>
      <footer className="intro-footer">
        <a className="intro-scroll-link" href="#about">
          Scroll to explore
          <span className="intro-scroll-line" aria-hidden="true" />
        </a>
        <a className="intro-cv-link" href="/Nipul_Yansith_CV.pdf" download>
          Download CV
        </a>
      </footer>
    </section>
  );
}
