import React from 'react';

function ContactForm() {
  const mobile = process.env.REACT_APP_CONTACT_MOBILE;
  const address = process.env.REACT_APP_CONTACT_ADDRESS;
  const email = process.env.REACT_APP_CONTACT_EMAIL;
  const phoneLink = mobile.replace(/[^\d+]/g, '');
  const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER || phoneLink.replace(/\D/g, '');

  return (
    <div className="info-panel reveal glass-card visible">
      <span className="eyebrow">Contacto directo</span>
      <h2>Datos de contacto</h2>
      <ul className="contact-points">
        <li><strong>Teléfono</strong><a href={`tel:${phoneLink}`}>{mobile}</a></li>
        <li><strong>Email</strong><a href={`mailto:${email}`}>{email}</a></li>
        <li><strong>Ubicación</strong><span>{address}</span></li>
      </ul>
      <div className="inline-actions">
        <a  
          className="btn btn-primary"
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <a className="btn btn-ghost" href={`tel:${phoneLink}`}>Llamar ahora</a>
      </div>
    </div>
  );
}

export default ContactForm;
