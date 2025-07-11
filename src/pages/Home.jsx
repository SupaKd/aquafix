import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faTint,
  faFire,
  faClock,
  faCheckCircle,
  faQuoteLeft,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Home = () => {
  const services = [
    {
      icon: faTint,
      title: "Dépannage fuites",
      description: "Intervention rapide pour réparer toutes fuites d'eau.",
    },
    {
      icon: faWrench,
      title: "Installation sanitaire",
      description: "Installation et remplacement de sanitaires.",
    },
    {
      icon: faFire,
      title: "Chauffage",
      description: "Installation et entretien de chaudières.",
    },
    {
      icon: faClock,
      title: "Urgences 24/7",
      description: "Disponible en permanence pour les situations critiques.",
    },
  ];

  // Témoignages clients
  const testimonials = [
    {
      quote:
        "Intervention en moins d'1h pour une fuite importante. Professionnalisme impeccable !",
      author: "Martine D., Paris",
    },
    {
      quote:
        "Le plombier a expliqué clairement le problème et le devis était très raisonnable.",
      author: "Pierre L., Montreuil",
    },
  ];

  return (
    <main className="home">
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/herofix.webp)",
        }}
      >
        <div className="hero__content">
          <h1>Votre plombier professionnel à Lyon</h1>
          <p className="hero__subtitle">Services rapides et garantis 24h/24</p>
          <div className="hero__buttons">
            <a href="tel:+33123456789" className="btn btn--primary">
              {" "}
              <FontAwesomeIcon icon={faPhone} /> Urgence
            </a>

            <Link to="#services" className="btn btn--secondary">
              Nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Nos services</h2>
          <p className="section-subtitle">
            Des solutions adaptées à tous vos besoins en plomberie
          </p>

          <div className="services-grid" id="services">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/contact" className="service-link">
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Besoin d'un plombier rapidement ?</h2>
          <p>Nous intervenons dans l'heure pour les urgences</p>
          <Link to="/contact" className="btn btn--large">
            <FontAwesomeIcon icon={faPhone} /> 06 12 34 56 78
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Nos clients témoignent</h2>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                <p className="testimonial-text">{testimonial.quote}</p>
                <p className="testimonial-author">- {testimonial.author}</p>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon icon={faCheckCircle} key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
};

export default Home;
