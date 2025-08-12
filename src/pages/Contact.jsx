// src/pages/Contact.jsx
import { useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    services: [],
    consent: false,
    website: "", // honeypot
  });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    { id: "repair", label: "Réparation fuite" },
    { id: "installation", label: "Installation sanitaire" },
    { id: "maintenance", label: "Maintenance chaudière" },
    { id: "emergency", label: "Urgence 24/7" },
  ];

  const errors = useMemo(() => {
    const e = {};
    const phoneRe = /^(?:\+33|0)[1-9]\d{8}$/; // FR
    if (!form.name.trim()) e.name = "Nom requis.";
    if (!phoneRe.test(form.phone.replace(/\s+/g, ""))) e.phone = "Téléphone français valide requis.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email invalide.";
    if (!form.services.length) e.services = "Sélectionnez au moins un service.";
    if (!form.consent) e.consent = "Consentement requis.";
    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  const onChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" && name !== "services" ? checked : value }));
  };

  const toggleService = (id) => {
    setForm((p) => ({
      ...p,
      services: p.services.includes(id) ? p.services.filter((s) => s !== id) : [...p.services, id],
    }));
  };

  const onBlur = (e) => setTouched((p) => ({ ...p, [e.target.name || e.target.id]: true }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.website) return; // bot
    if (!isValid) {
      setTouched({ name: true, phone: true, email: !!form.email, services: true, consent: true });
      return;
    }
    // TODO: remplacer par votre logique d’envoi (API / email)
    // console.log("payload", form);
    setSubmitted(true);
    setForm({ name: "", phone: "", email: "", message: "", services: [], consent: false, website: "" });
    setTouched({});
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title">Demande de devis</h2>

        {submitted ? (
          <div className="success" role="status" aria-live="polite">
            <FontAwesomeIcon icon={faCheck} className="success__icon" />
            <p>Merci. Nous vous recontactons rapidement.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={onChange}
              tabIndex={-1}
              autoComplete="off"
              className="hp"
              aria-hidden="true"
            />

            {/* Nom */}
            <div className={`form-group ${touched.name && errors.name ? "is-error" : ""}`}>
              <label htmlFor="name">
                <FontAwesomeIcon icon={faUser} aria-hidden="true" /> Nom complet *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete="name"
                placeholder="Jean Dupont"
                aria-invalid={!!(touched.name && errors.name)}
                aria-describedby={touched.name && errors.name ? "err-name" : undefined}
                required
              />
              {touched.name && errors.name && <p id="err-name" className="error">{errors.name}</p>}
            </div>

            {/* Téléphone */}
            <div className={`form-group ${touched.phone && errors.phone ? "is-error" : ""}`}>
              <label htmlFor="phone">
                <FontAwesomeIcon icon={faPhone} aria-hidden="true" /> Téléphone *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                pattern="^(?:\+33|0)[1-9]\d{8}$"
                value={form.phone}
                onChange={(e) =>
                  onChange({
                    ...e,
                    target: { ...e.target, value: e.target.value.replace(/[^\d+ ]/g, "") },
                  })
                }
                onBlur={onBlur}
                autoComplete="tel"
                placeholder="06 12 34 56 78"
                aria-invalid={!!(touched.phone && errors.phone)}
                aria-describedby={touched.phone && errors.phone ? "err-phone" : undefined}
                required
              />
              {touched.phone && errors.phone && <p id="err-phone" className="error">{errors.phone}</p>}
            </div>

            {/* Email (optionnel) */}
            <div className={`form-group ${touched.email && errors.email ? "is-error" : ""}`}>
              <label htmlFor="email">
                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /> Email (optionnel)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete="email"
                placeholder="exemple@mail.com"
                aria-invalid={!!(touched.email && errors.email)}
                aria-describedby={touched.email && errors.email ? "err-email" : undefined}
              />
              {touched.email && errors.email && <p id="err-email" className="error">{errors.email}</p>}
            </div>

            {/* Services */}
            <fieldset className={`form-group ${touched.services && errors.services ? "is-error" : ""}`}>
              <legend>Services nécessaires *</legend>
              <div className="services-checkbox-group">
                {serviceOptions.map((s) => (
                  <div key={s.id} className="checkbox-item">
                    <input
                      type="checkbox"
                      id={s.id}
                      checked={form.services.includes(s.id)}
                      onChange={() => toggleService(s.id)}
                      onBlur={() => setTouched((p) => ({ ...p, services: true }))}
                    />
                    <label htmlFor={s.id}>{s.label}</label>
                  </div>
                ))}
              </div>
              {touched.services && errors.services && <p className="error">{errors.services}</p>}
            </fieldset>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">
                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /> Message (optionnel)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={onChange}
                placeholder="Décrivez brièvement votre besoin…"
              />
            </div>

            {/* Consentement */}
            <div className={`form-group form-consent ${touched.consent && errors.consent ? "is-error" : ""}`}>
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={form.consent}
                onChange={onChange}
                onBlur={onBlur}
                required
              />
              <label htmlFor="consent">
                J’accepte que mes données soient utilisées pour me recontacter. <Link to="/">En savoir plus</Link>.
              </label>
              {touched.consent && errors.consent && <p className="error">{errors.consent}</p>}
            </div>

            <button type="submit" className="submit-btn" disabled={!isValid}>
              Envoyer la demande
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
