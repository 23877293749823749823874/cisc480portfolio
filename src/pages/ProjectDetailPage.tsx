import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/site";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="prose-section">
        <p className="lede">Nothing at that path.</p>
        <p>
          <Link to="/projects">Back</Link>
        </p>
      </div>
    );
  }

  const narrativeSections = project.soar
    ? [
        { id: "situation", heading: "Situation", paragraphs: project.soar.situation },
        { id: "obstacle", heading: "Obstacle", paragraphs: project.soar.obstacle },
        { id: "action", heading: "Action", paragraphs: project.soar.action },
        { id: "result", heading: "Result", paragraphs: project.soar.result },
      ]
    : [
        { id: "context", heading: "Context", paragraphs: project.context },
        { id: "approach", heading: "Approach", paragraphs: project.approach },
        { id: "outcome", heading: "Outcome", paragraphs: project.outcome },
      ];

  return (
    <>
      <div className="back-row">
        <Link to="/projects" className="back-link">
          ← Projects and experiences
        </Link>
      </div>

      <article>
        <header className="page-intro">
          <p className="card__meta" style={{ marginBottom: "0.35rem" }}>
            {project.timeframe}, {project.role}
          </p>
          <h1>{project.title}</h1>
          <p className="lede">{project.excerpt}</p>
          <div className="tag-row" aria-label="Keywords">
            {project.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
          {project.links && project.links.length > 0 ? (
            <p className="project-links">
              {project.links.map((l, i) => (
                <span key={l.href}>
                  {i > 0 ? ", " : null}
                  <a href={l.href} rel="noreferrer" target="_blank">
                    {l.label}
                  </a>
                </span>
              ))}
            </p>
          ) : null}
        </header>

        {narrativeSections.map((section) => (
          <section
            key={section.id}
            className="prose-section"
            aria-labelledby={`${section.id}-heading`}
          >
            <h2 id={`${section.id}-heading`}>{section.heading}</h2>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </section>
        ))}

        <section className="prose-section" aria-labelledby="reflection-heading">
          <h2 id="reflection-heading">Reflection</h2>
          {project.reflection.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>

        {project.failureStory ? (
          <section className="prose-section" aria-labelledby="failure-story-heading">
            <h2 id="failure-story-heading">When it went sideways</h2>
            <h3 id="failure-intent-heading">1. What we were trying to do</h3>
            {project.failureStory.intent.map((paragraph, i) => (
              <p key={`intent-${i}`}>{paragraph}</p>
            ))}
            <h3 id="failure-gap-heading">2. What went worse than we wanted</h3>
            {project.failureStory.gap.map((paragraph, i) => (
              <p key={`gap-${i}`}>{paragraph}</p>
            ))}
            <h3 id="failure-learning-heading">3. What we learned and what we do differently</h3>
            {project.failureStory.learning.map((paragraph, i) => (
              <p key={`learning-${i}`}>{paragraph}</p>
            ))}
          </section>
        ) : null}
      </article>
    </>
  );
}
