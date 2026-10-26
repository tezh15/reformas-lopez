import React, { useState } from 'react';
import './index.scss';
import Toast from '../toast';
import { getWhatsAppLink } from '../../pages/contact/services'; 

function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: ''
  });

  const [configToast, setConfigToast] = useState({
    typeToast: '',
    textToast: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const componentToast = () => {
    if (configToast.typeToast !== '') {
      return <Toast typeToast={configToast.typeToast} changeError={changeError} textToast={configToast.textToast} />;
    }
    return null;
  };

  const changeError = () => {
    setConfigToast({ typeToast: '', textToast: '' });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const whatsappLink = getWhatsAppLink(formData);
    window.open(whatsappLink, '_blank');

    setConfigToast({ typeToast: 'done', textToast: 'Se abrió WhatsApp con tu mensaje' });
    setFormData({ name: '', email: '', phone: '', comments: '' });
    setIsLoading(false);
  }

  return (
    <>
      {componentToast()}
      <form onSubmit={handleSubmit} className="contactForm info-panel reveal glass-card visible">
        <span className="eyebrow">Formulario de contacto</span>
        <h2>Cuéntanos tu proyecto</h2>
        <div className="contactFormField">
          <label htmlFor="FormControlInput1" className="form-label">¿Cómo te llamas?</label>
          <input type="text" name="name" className="form-control" id="FormControlInput1"
            placeholder="Nombre" onChange={handleChange} value={formData.name} required />
        </div>
        <div className="contactFormField">
          <label htmlFor="FormControlInput3" className="form-label">Tu teléfono de contacto</label>
          <input type="tel" name="phone" className="form-control" id="FormControlInput3"
            placeholder="+34 600 000 000" onChange={handleChange} value={formData.phone} required />
        </div>
        <div className="contactFormField contactFormFullWidth">
          <label htmlFor="FormControlInput2" className="form-label">Tu email de contacto</label>
          <input type="email" name="email" className="form-control" id="FormControlInput2"
            placeholder="name@example.com" onChange={handleChange} value={formData.email} required />
        </div>
        <div className="contactFormField contactFormComments">
          <label htmlFor="ControlTextarea1" className="form-label">¿Qué te gustaría reformar?</label>
          <textarea className="form-control" id="ControlTextarea1" value={formData.comments} name="comments" rows="3"
            onChange={handleChange} required />
        </div>

        <div className="contactActions contactFormActions">
          {isLoading ? (
            <button className="btn btn-primary" disabled>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </button>
          ) : (
            <button className="btn btn-primary" type="submit">Enviar solicitud</button>
          )}
        </div>
      </form>
    </>
  );
}

export default ContactUsSection;