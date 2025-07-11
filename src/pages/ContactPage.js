import { useRef, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ScrollAnimation from "../hooks/ScrollAnimation";
import "../styles/contactpage.css";

const ContactPage = () => {
    const rightRef = useRef(null);
    ScrollAnimation(rightRef, { customClass: 'right', immediate: true });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactDetails = [
    { icon: Mail, label: 'Email', value: 'patrik.biblak@gmail.com' },
    { icon: Phone, label: 'Telefon', value: '+421 918 755 276' },
    { icon: MapPin, label: 'Poloha', value: 'Slovensko' },
  ];

  return (
      <div className="contact-page container">
        <div className="contactpage-heading">
          <h1 ref={rightRef}>Poďme na to!</h1>
        </div>

        <div className="contactpage-content">
          <div className="contactpage-box">
            <h3>Pošli správu</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Meno</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Správa</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit">Odoslať</button>
            </form>
          </div>

          <div className="contactpage-box">
            <h3>Kontaktné údaje</h3>
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.label} className="contactpage-info-item">
                  <Icon />
                  <div>
                    <p>{detail.label}</p>
                    <p>{detail.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

            <div className="map-container">
                <iframe
                title="Mapa"
                src="https://maps.google.com/maps?q=Slovensko&output=embed"
                allowFullScreen
                loading="lazy"
                style={{ border: 0, width: '100%', height: '100%' }}
                />
            </div>
        </div>
  );
};

export default ContactPage;