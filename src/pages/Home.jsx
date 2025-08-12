// src/pages/Home.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faTint,
  faFire,
  faClock,
  faQuoteLeft,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Contact from "./Contact";

export default function Home() {
  const navigate = useNavigate();

  const services = [
    { icon: faTint,  title: "Dépannage fuites",     description: "Réparation rapide de fuites d’eau." },
    { icon: faWrench,title: "Installation sanitaire",description: "Pose et remplacement de sanitaires." },
    { icon: faFire,  title: "Chauffage",             description: "Installation et entretien de chaudières." },
    { icon: faClock, title: "Urgences 24/7",         description: "Disponible pour les situations critiques." },
  ];

  const testimonials = [
    {
      quote:
        "Intervention en moins d’une heure pour une fuite importante. Travail propre.",
      author: "Martine D., Lyon",
    },
    {
      quote:
        "Diagnostic clair et prix correct. Je recommande.",
      author: "Pierre L., Villeurbanne",
    },
  ];

  const goToServices = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else navigate("/#services");
  };

  return (
    <main className="home">
      {/* HERO */}
      <section className="hero" aria-label="Plombier à Lyon">
        <div className="hero__overlay" />
        <div className="hero__content container">
          <h1>Votre plombier professionnel à Lyon</h1>
          <p className="hero__subtitle">Dépannage rapide. Qualité garantie.</p>
          <div className="hero__actions">
            <a href="tel:+33612345678" className="btn btn--primary">
              <FontAwesomeIcon icon={faPhone} />
              <span className="sr-only">Appeler</span>
              <span aria-hidden="true"> Urgence 06&nbsp;12&nbsp;34&nbsp;56&nbsp;78</span>
            </a>
            <button type="button" className="btn btn--secondary" onClick={goToServices}>
              Nos services
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services" aria-labelledby="services-title">
        <div className="container">
          <h2 id="services-title" className="section-title">Nos services</h2>
          <p className="section-subtitle">
            Solutions adaptées à vos besoins en plomberie et chauffage.
          </p>

          <ul className="services__grid" role="list">
            {services.map((s, i) => (
              <li className="service" key={i}>
                <div className="service__icon" aria-hidden="true">
                  <FontAwesomeIcon icon={s.icon} />
                </div>
                <h3 className="service__title">{s.title}</h3>
                <p className="service__desc">{s.description}</p>
                <Link to="/contact" className="service__link" aria-label={`Devis pour ${s.title}`}>
                  Demander un devis
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" aria-label="Intervention rapide">
        <div className="container cta__inner">
          <h2>Besoin d’un plombier rapidement&nbsp;?</h2>
          <p>Intervention possible dans l’heure sur Lyon et alentours.</p>
          <a href="tel:+33612345678" className="btn btn--large">
            <FontAwesomeIcon icon={faPhone} /> 06&nbsp;12&nbsp;34&nbsp;56&nbsp;78
          </a>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="testimonials" aria-labelledby="testimonials-title">
        <div className="container">
          <h2 id="testimonials-title" className="section-title">Avis clients</h2>

          <ul className="testimonials__grid" role="list">
            {testimonials.map((t, i) => (
              <li className="testimonial" key={i}>
                <FontAwesomeIcon icon={faQuoteLeft} className="testimonial__quoteIcon" aria-hidden="true" />
                <blockquote className="testimonial__text">
                  <p>{t.quote}</p>
                  <footer className="testimonial__author">— {t.author}</footer>
                </blockquote>
                <div className="testimonial__rating" aria-label="Note 5 sur 5">
                  {"★★★★★"}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
    </main>
  );
}
