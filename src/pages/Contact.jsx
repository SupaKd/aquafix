import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faCheck } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    services: []
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Liste des services proposés
  const serviceOptions = [
    { id: 'repair', label: 'Réparation fuite' },
    { id: 'installation', label: 'Installation sanitaire' },
    { id: 'maintenance', label: 'Maintenance chaudière' },
    { id: 'emergency', label: 'Urgence 24/7' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis :', formData); // Remplacez par votre logique d'envoi (API, email, etc.)
    setIsSubmitted(true);
    // Réinitialisation après 3 secondes
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2>Demande de devis</h2>
        
        {isSubmitted ? (
          <div className="success-message">
            <FontAwesomeIcon icon={faCheck} className="success-icon" />
            <p>Merci ! Nous vous contacterons rapidement.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            {/* Champ Nom */}
            <div className="form-group">
              <label htmlFor="name">
                <FontAwesomeIcon icon={faUser} /> Nom complet *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Jean Dupont"
              />
            </div>

            {/* Champ Téléphone */}
            <div className="form-group">
              <label htmlFor="phone">
                <FontAwesomeIcon icon={faPhone} /> Téléphone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="06 12 34 56 78"
                pattern="[0-9]{10}"
                title="10 chiffres sans espaces"
              />
            </div>

            {/* Cases à cocher - Services */}
            <div className="form-group">
              <label>Services nécessaires *</label>
              <div className="services-checkbox-group">
                {serviceOptions.map(service => (
                  <div key={service.id} className="checkbox-item">
                    <input
                      type="checkbox"
                      id={service.id}
                      checked={formData.services.includes(service.id)}
                      onChange={() => handleServiceToggle(service.id)}
                    />
                    <label htmlFor={service.id}>{service.label}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Champ Message */}
            <div className="form-group">
              <label htmlFor="message">
                <FontAwesomeIcon icon={faEnvelope} /> Message (optionnel)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez brièvement votre problème..."
                rows="4"
              />
            </div>

            <button type="submit" className="submit-btn">
              Envoyer la demande
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;