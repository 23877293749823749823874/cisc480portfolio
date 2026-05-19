import { Link } from "react-router-dom";
import { projects } from "../data/site";

export function ProjectsPage() {
  return (
    <>
      <header className="page-intro">
        <h1>Projects and experiences</h1>
        <p className="lede">
          A mix of CS projects, class work, and outside-the-major writing: the Sustainability
          Initiative capstone, an Interstellar film analysis, feminist biblical criticism,
          SpecterSight, and Doggr.
        </p>
      </header>

      <div className="card-grid">
        {projects.map((p) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="card">
            <div className="card__body">
              <div className="card__meta">
                {p.timeframe}, {p.role}
              </div>
              <h2 className="card__title">{p.title}</h2>
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
    </>
  );
}
