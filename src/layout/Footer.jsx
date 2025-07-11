import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        {/* Colonne 1 : Logo + Description */}
        <div className="footer__col">
          <h3 className="footer__logo">AquaFix</h3>
          <p className="footer__description">
            Votre plombier professionnel pour des solutions rapides et durables. 
            Intervention 24h/24 pour les urgences.
          </p>
          <div className="footer__social">
            <a href="https://facebook.com" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://wa.me/33612345678" aria-label="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>

        {/* Colonne 2 : Liens rapides */}
        <div className="footer__col">
          <h4 className="footer__title">Liens rapides</h4>
          <ul className="footer__links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/services">Nos services</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/emergency">Urgences</Link></li>
          </ul>
        </div>

        {/* Colonne 3 : Coordonnées */}
        <div className="footer__col">
          <h4 className="footer__title">Nous contacter</h4>
          <ul className="footer__contact">
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+33123456789">06 12 34 56 78</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:contact@plombierpro.fr">contact@aquafix.fr</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>123 Rue des lys, 69000 Lyon</span>
            </li>
          </ul>
        </div>

        {/* Colonne 4 : Horaires */}
        <div className="footer__col">
          <h4 className="footer__title">Horaires</h4>
          <ul className="footer__hours">
            <li>Lun-Ven : 8h-19h</li>
            <li>Samedi : 9h-17h</li>
            <li>Dimanche : Urgences uniquement</li>
          </ul>
          <Link to="/contact" className="footer__cta">
            Demander un devis
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__copyright">
        <p>© {currentYear} Aquafix - Powered by SupaCo Tous droits réservés</p>
        <p>Mentions légales | Politique de confidentialité</p>
      </div>
    </footer>
  );
};

export default Footer;