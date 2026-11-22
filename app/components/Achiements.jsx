import Link from "next/link";
import NBQSAAward from "./NBQSAAward";
import { SiPostman } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import {
  TbAward,
  TbCertificate,
  TbSchool,
  TbTrophy,
  TbUsers,
  TbMusic,
  TbHeartHandshake,
  TbWorld,
  TbRosetteDiscountCheck,
} from "react-icons/tb";

const certifications = [
  {
    title: "API Fundamentals Student Expert",
    issuer: "Postman",
    year: "2024",
    icon: SiPostman,
    tone: "postman",
  },
  {
    title: "Java Object-Oriented Programming",
    issuer: "LinkedIn Learning",
    year: "2024",
    icon: FaLinkedinIn,
    tone: "linkedin",
  },
  {
    title: "OOPs in Java",
    issuer: "Great Learning Academy",
    year: "2024",
    icon: TbSchool,
    tone: "learning",
  },
];
const communities = [
  {
    title: "Rekha Music Circle",
    organization: "UCSC",
    roles: "Secretary · Junior Treasurer · Guitarist & Singer",
    year: "2023–2025",
    icon: TbMusic,
  },
  {
    title: "Students’ Union",
    organization: "UCSC",
    roles: "Junior Treasurer",
    year: "2023–2024",
    icon: TbHeartHandshake,
  },
  {
    title: "AIESEC",
    organization: "Colombo Central",
    roles: "OCVP — Gramfest · Team Leader — iGV",
    year: "2022",
    icon: TbWorld,
  },
];
export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-block achievements-section">
      <div className="section-shell">
        <header className="section-heading">
          <div>
            <p className="eyebrow">Recognition & milestones</p>
            <h2 className="section-title">
              The moments
              <br />
              that mean more.
            </h2>
          </div>
          <p className="section-heading-aside">
            A few milestones along the way. Each one a reminder to keep
            learning, keep showing up, and keep building.
          </p>
        </header>
        <NBQSAAward />
        <section
          className="milestone-showcase"
          id="milestones"
          aria-labelledby="milestone-heading"
        >
          <header className="milestone-heading">
            <div>
              <p className="eyebrow">The work behind the milestones</p>
              <h3 id="milestone-heading">
                Learning. Leading.
                <br />
                <span>Making it count.</span>
              </h3>
            </div>
            <p>
              A foundation in technology, a habit of learning, and a place in
              the communities I care about.
            </p>
          </header>
          <div className="milestone-grid">
            <article
              className="milestone-card milestone-academic"
              aria-labelledby="academic-heading"
            >
              <div className="milestone-card-top">
                <span className="milestone-category-icon">
                  <TbSchool aria-hidden="true" />
                </span>
                <span className="milestone-year">Class of 2026</span>
              </div>
              <h4 id="academic-heading">Academic Achievements</h4>
              <div className="milestone-gpa" aria-label="GPA 3.70 out of 4.00">
                <strong>3.70</strong>
                <span>/ 4.00 GPA</span>
              </div>
              <p className="milestone-honours">
                <TbRosetteDiscountCheck aria-hidden="true" />
                First Class Honours
              </p>
              <p className="milestone-degree">
                B.Sc. (Hons) in Information Systems
                <br />
                <span>University of Colombo School of Computing</span>
              </p>
              <ul className="milestone-academic-list">
                <li>
                  <span className="milestone-stat">4</span>
                  <div>
                    <strong>Director’s List</strong>
                    <span>Four semesters · UCSC</span>
                  </div>
                </li>
                <li>
                  <TbAward aria-hidden="true" />
                  <div>
                    <strong>NBQSA finalist</strong>
                    <span>National ICT Awards · GoviSaviya · 2024</span>
                  </div>
                </li>
                <li>
                  <TbTrophy aria-hidden="true" />
                  <div>
                    <strong>Top 100 in Sri Lanka</strong>
                    <span>IEEE Xtreme 18.0 · 2024</span>
                  </div>
                </li>
              </ul>
              <a className="milestone-card-link" href="#graduation">
                Explore graduation memories
              </a>
            </article>
            <article
              className="milestone-card milestone-certifications"
              aria-labelledby="certifications-heading"
            >
              <div className="milestone-card-top">
                <span className="milestone-category-icon">
                  <TbCertificate aria-hidden="true" />
                </span>
                <span className="milestone-year">Continuing to learn</span>
              </div>
              <h4 id="certifications-heading">Certifications</h4>
              <p className="milestone-card-intro">
                From API fundamentals to the building blocks of software.
              </p>
              <ul className="milestone-credential-list">
                {certifications.map(
                  ({ title, issuer, year, icon: Icon, tone }) => (
                    <li className={`milestone-credential ${tone}`} key={title}>
                      <div className="milestone-credential-meta">
                        <span className="milestone-brand">
                          <Icon aria-hidden="true" />
                        </span>
                        <time dateTime={year}>{year}</time>
                      </div>
                      <h5>{title}</h5>
                      <p>{issuer}</p>
                    </li>
                  ),
                )}
              </ul>
              <p className="milestone-card-note">
                <TbCertificate aria-hidden="true" />3 certifications · API &
                Java foundations
              </p>
            </article>
            <article
              className="milestone-card milestone-community"
              aria-labelledby="community-heading"
            >
              <div className="milestone-card-top">
                <span className="milestone-category-icon">
                  <TbUsers aria-hidden="true" />
                </span>
                <span className="milestone-year">People & purpose</span>
              </div>
              <h4 id="community-heading">Extra-Curricular</h4>
              <p className="milestone-card-intro">
                Leading teams, making music, and showing up for my community.
              </p>
              <ul className="milestone-community-list">
                {communities.map(
                  ({ title, organization, roles, year, icon: Icon }) => (
                    <li key={title}>
                      <div className="milestone-community-meta">
                        <span className="milestone-community-icon">
                          <Icon aria-hidden="true" />
                        </span>
                        <span className="milestone-year">{year}</span>
                      </div>
                      <h5>{title}</h5>
                      <span className="milestone-organization">
                        {organization}
                      </span>
                      <p>{roles}</p>
                    </li>
                  ),
                )}
              </ul>
              <Link className="milestone-card-link" href="/fun">
                Explore Beyond Code
              </Link>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}
