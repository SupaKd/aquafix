// src/layout/Footer.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" itemScope itemType="https://schema.org/Plumber">
      <div className="footer__container">
        {/* Col 1 : Logo + pitch */}
        <div className="footer__col">
          <Link to="/" className="footer__brand" aria-label="Retour à l’accueil">
            <img
              src="/aquafix.webp"
              alt="Aquafix Plombier"
              width="140"
              height="40"
              loading="lazy"
              decoding="async"
              itemProp="image"
            />
          </Link>
          <p className="footer__desc" itemProp="description">
            Plombier à Lyon. Dépannage rapide, réparation fuite, chauffe-eau, débouchage. Urgences 24/7.
          </p>
          <nav className="footer__social" aria-label="Réseaux sociaux">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              aria-label="Facebook Aquafix"
            >
              <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              aria-label="Instagram Aquafix"
            >
              <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/33612345678"
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp Aquafix"
            >
              <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
            </a>
          </nav>
        </div>

        {/* Col 2 : Liens */}
        <div className="footer__col">
          <h2 className="footer__title">Liens rapides</h2>
          <ul className="footer__links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/services">Nos services</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/emergency">Urgences</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Col 3 : Coordonnées */}
        <div className="footer__col" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <h2 className="footer__title">Nous contacter</h2>
          <ul className="footer__contact">
            <li>
              <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
              <a href="tel:+33612345678" itemProp="telephone">06 12 34 56 78</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
              <a href="mailto:contact@aquafix.fr" itemProp="email">contact@aquafix.fr</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
              <address>
                <span itemProp="streetAddress">123 Rue des Lys</span>,{" "}
                <span itemProp="postalCode">69000</span>{" "}
                <span itemProp="addressLocality">Lyon</span>
              </address>
            </li>
          </ul>
          <meta itemProp="name" content="Aquafix" />
          <meta itemProp="priceRange" content="€€" />
          <link itemProp="url" href="https://aquafix.fr" />
        </div>

        {/* Col 4 : Horaires + CTA */}
        <div className="footer__col">
          <h2 className="footer__title">Horaires</h2>
          <ul className="footer__hours">
            <li><time itemProp="openingHours" dateTime="Mo-Fr 08:00-19:00">Lun–Ven : 8h–19h</time></li>
            <li><time itemProp="openingHours" dateTime="Sa 09:00-17:00">Samedi : 9h–17h</time></li>
            <li><time itemProp="openingHours" dateTime="Su 00:00-23:59">Dimanche : urgences</time></li>
          </ul>
          <Link to="/contact" className="footer__cta" aria-label="Demander un devis gratuit">
            Demander un devis
          </Link>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {currentYear} Aquafix. Tous droits réservés.</p>
        <p>
          <Link to="/mentions-legales">Mentions légales</Link>
          <span aria-hidden="true"> · </span>
          <Link to="/confidentialite">Politique de confidentialité</Link>
        </p>
      </div>
    </footer>
  );
}
