import React from 'react';
import '../css/ContactSection.css';
import { Link } from 'react-router-dom';

function ContactUsSection({
}) {
  return (
    <>
          <div className="row-mb-3">
            <div className="col-md-12">
              <label htmlFor="exampleFormControlInput1" className="form-label">Nombre completo</label>
              <input style={{marginBottom: 10}} type="text" className="form-control" id="FormControlInput1" placeholder="Nombre" />
            </div>
            <div className="col-md-12">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
              <input style={{marginBottom: 10}} type="email" className="form-control" id="FormControlInput2" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Comentarios</label>
              <textarea className="form-control" id="ControlTextarea1" rows="3"></textarea>
            </div>
            <div style={{marginBottom: 20}}>
              <button className="btn btn-primary">Enviar</button>
            </div>
      </div>
    </>
  );
}

export default ContactUsSection;