import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { person } from "../data/site";
import "./layout.css";

export function Layout({ children }: { children?: ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="site-logo">
            <span className="site-logo__mark" aria-hidden />
            <span className="site-logo__text">{person.name}</span>
          </Link>
          <nav className="site-nav" aria-label="Primary">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "site-nav__link site-nav__link--active" : "site-nav__link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "site-nav__link site-nav__link--active" : "site-nav__link"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/reflection"
              className={({ isActive }) =>
                isActive ? "site-nav__link site-nav__link--active" : "site-nav__link"
              }
            >
              Reflection
            </NavLink>
          </nav>
        </div>
      </header>
      <main id="main" className="site-main" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <p>
            {person.name}, CISC 480, Spring 2026, University of St. Thomas
          </p>
        </div>
      </footer>
    </>
  );
}
