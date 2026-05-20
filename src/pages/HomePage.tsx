import { useState } from "react";
import { Link } from "react-router-dom";
import { ResumeModal } from "../components/ResumeModal";
import { person, projects, professionalSkills, technicalSkills } from "../data/site";

export function HomePage() {
  const base = import.meta.env.BASE_URL;
  const [resumeOpen, setResumeOpen] = useState(false);
  return (
    <>
      <header className="page-intro">
        <h1>{person.name}</h1>
        <p className="lede">
          {person.program}, {person.college}. CISC 480 individual portfolio, Spring 2026.
        </p>
      </header>

      <section className="prose-section" aria-labelledby="about-heading">
        <h2 id="about-heading">About me</h2>
        <p>
          Interests: {person.interests.join(", ")}.
        </p>
        <p>{person.hireMe}</p>
      </section>

      <section className="prose-section" aria-labelledby="skills-heading">
        <h2 id="skills-heading">Skills</h2>
        <h3>Technical</h3>
        <ul>
          {technicalSkills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <h3>Professional</h3>
        <ul>
          {professionalSkills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <section className="prose-section" aria-labelledby="resume-heading">
        <h2 id="resume-heading">Resume</h2>
        <p>
          <button
            type="button"
            className="text-button"
            onClick={() => setResumeOpen(true)}
          >
            View resume
          </button>
        </p>
      </section>

      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        imageSrc={`${base}resume.png`}
        imageAlt={`${person.name}'s resume`}
      />

      <hr className="divider" />

      <h2>Featured</h2>
      <div className="card-grid">
        {projects.slice(0, 2).map((p) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="card">
            <div className="card__body">
              <div className="card__meta">
                {p.timeframe}, {p.role}
              </div>
              <h3 className="card__title">{p.title}</h3>
              <p className="card__excerpt">{p.excerpt}</p>
              <div className="tag-row" aria-label="Keywords">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <p style={{ marginTop: "1.75rem" }}>
        <Link to="/projects">See all projects</Link>
      </p>
    </>
  );
}
