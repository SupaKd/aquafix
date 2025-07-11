// src/layout/Header.jsx
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faXmark,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <Link
        className={`burger ${isOpen ? "rotate" : ""}`}
        onClick={toggleMenu}
        aria-label="Menu mobile"
        aria-expanded={isOpen}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBarsStaggered} />
      </Link>

      <Link to="/" onClick={closeMenu} className="logo_mobile">
        <img src="/aquafix.webp" alt="Logo" />
      </Link>
      <Link to="/" onClick={closeMenu} className="logo_desktop">
        <img src="/aquafix.webp" alt="Logo" />
      </Link>

      <NavLink to="/contact" className="devis" onClick={closeMenu}>
          Devis
        </NavLink>

      <nav
        className={`header__nav ${isOpen ? "show" : ""}`}
        aria-label="Navigation principale"
      >
        <NavLink to="/" className="acceuil" onClick={closeMenu}>
          Accueil
        </NavLink>

        <a
          href="tel:+33123456789"
          className="header__nav-link"
          onClick={closeMenu}
        >
  <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px' }} />
  <span>06 12 34 56 78</span>
        </a>
      </nav>
    </header>
  );
}

export default Header;
