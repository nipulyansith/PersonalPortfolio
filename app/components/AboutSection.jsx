import Image from "next/image";
import AnimatedNumber from "./AnimatedNumber";
import { TbSparkles, TbWorld } from "react-icons/tb";
import TechnicalSkills from "./TechnicalSkills";
export default function AboutSection() {
  return (
    <section id="about" className="section-block about-section">
      <div className="section-shell">
        <div className="about-grid">
          <div className="about-introduction">
            <p className="eyebrow">A little about me</p>
            <h2 className="section-title">
              Curiosity.
              <br />
              Craft.
              <br />
              <span className="muted">A bit of code.</span>
            </h2>
            <p>
              I’m Nipul Yansith, a Software Engineer at Emojot. I turn complex
              problems into thoughtful, useful software — from enterprise
              workflows to AI-powered products.
            </p>
            <a href="/Nipul_Yansith_CV.pdf" download className="text-link">
              Get to know me · Download CV
            </a>
            <span className="about-spark" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="about-portrait-card">
            <span className="round-icon">
              <TbWorld size={28} aria-hidden="true" />
            </span>
            <p className="about-card-value">
              <AnimatedNumber value={3.7} decimals={2} />
              <span>/ 4.00</span>
            </p>
            <p>
              First Class Honours
              <br />
              Information Systems · UCSC
            </p>
            <div className="about-photo">
              <Image
                src="/images/final.jpg"
                alt="Nipul Yansith"
                fill
                sizes="(max-width: 760px) 85vw, 30vw"
              />
            </div>
            <span className="photo-caption">
              Always learning. Always building.
            </span>
          </div>
          <div className="about-practice">
            <div className="location-note">
              <span className="tiny-label">Based in</span>
              <p>
                Sri Lanka
                <br />
                <span className="muted">Building for everywhere.</span>
              </p>
            </div>
            <div className="practice-item">
              <span className="round-icon dark">
                <TbSparkles aria-hidden="true" />
              </span>
              <p>
                I build across the stack with Angular, TypeScript, Node.js, and
                AWS. I enjoy taking an idea through to a product people can use.
              </p>
            </div>
            <div className="practice-item">
              <span className="round-icon dark">
                <TbSparkles aria-hidden="true" />
              </span>
              <p>
                Research keeps me curious. I’m the developer behind PitchIQ, an
                NBQSA Merit Award-winning cricket biomechanics platform.
              </p>
            </div>
            <div className="education-note">
              <span className="tiny-label">Before the code</span>
              <p>Ananda College, Colombo · 2018–2020</p>
              <p className="muted">G.C.E. Advanced Level · Z-score 1.41</p>
            </div>
          </div>
        </div>
        <TechnicalSkills />
      </div>
    </section>
  );
}
