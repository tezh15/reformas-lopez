import React, { useState } from 'react';
import '../css/ContactSection.css';
import Toast from '../../../toast/Toast';
import { sendEmailApi } from '../services';

function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: ''
  });

  const [configToast, setConfigToast] = useState({
    typeToast: '',
    textToast: ''

  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value });
  }

  let componentToast = () => {
    if (configToast.typeToast !== '') {
      return <Toast typeToast={configToast.typeToast}
        changeError={changeError}
        textToast={configToast.textToast} />
    } else {
      return null
    }
  }

  const changeError = () => {
    setConfigToast({ ...configToast, typeToast: '', textToast: '' });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const response = await sendEmailApi(formData);
    setTimeout(() => {
      setConfigToast({ ...configToast, typeToast: "done", textToast: "Email sent" });
      setIsLoading(false);
      setFormData({ ...formData, name: '', email: '', comments: '' });
    }, 2000);
  }

  return (
    <>
      {componentToast()}
      <form onSubmit={handleSubmit} className="row-mb-3">
        <div className="col-md-12">
          <label htmlFor="FormControlInput1" className="form-label">Nombre completo *</label>
          <input style={{ marginBottom: 10 }} type="text" name="name" className="form-control" id="FormControlInput1"
            placeholder="Nombre" onChange={handleChange} value={formData.name} required />
        </div>
        <div className="col-md-12">
          <label htmlFor="FormControlInput2" className="form-label">Email *</label>
          <input style={{ marginBottom: 10 }} type="email" name="email" className="form-control" id="FormControlInput2"
            placeholder="name@example.com" onChange={handleChange} value={formData.email} required />

        </div>
        <div className="mb-3">
          <label htmlFor="ControlTextarea1" className="form-label">Comentarios *</label>
          <textarea className="form-control" id="ControlTextarea1" value={formData.comments} name="comments" rows="3"
            onChange={handleChange} required />
        </div>
        {isLoading ?
          <div style={{ marginBottom: 20 }}>
            <button className="btn btn-primary">
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </button>
          </div>
          :
          <div style={{ marginBottom: 20 }}>
            <button className="btn btn-primary">Enviar</button>
          </div>
        }


      </form>
    </>
  );
}

export default ContactUsSection;