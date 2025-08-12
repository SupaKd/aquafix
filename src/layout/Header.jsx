// src/layout/Header.jsx
import { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const onResize = () => window.matchMedia("(min-width: 992px)").matches && setOpen(false);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__inner">
        <button
          type="button"
          className={`header__burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={toggle}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <Link to="/" onClick={close} className="header__logo" aria-label="Accueil Aquafix">
          <img src="/aquafix.webp" alt="Aquafix Plombier" width="140" height="40" />
        </Link>

        <nav
          id="main-nav"
          ref={navRef}
          className={`header__nav ${open ? "is-visible" : ""}`}
          aria-label="Navigation principale"
        >
          <NavLink
            to="/"
            onClick={close}
            className={({ isActive }) => `header__link ${isActive ? "is-active" : ""}`}
          >
            Accueil
          </NavLink>

          <NavLink to="/contact" onClick={close} className="header__cta">
            Devis gratuit
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
