import React from 'react';
import publicUrl from '../../utils/public-url';
import { Link } from 'react-router-dom';
import './index.scss';

function Footer() {
  const mobile = process.env.REACT_APP_CONTACT_MOBILE;
  const phoneLink = mobile.replace(/[^\d+]/g, '');
  const email = process.env.REACT_APP_CONTACT_EMAIL;
  const address = process.env.REACT_APP_CONTACT_ADDRESS;
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand-footer" aria-label="Reformas Lopez, inicio">
            <img src={publicUrl('/assets/logo/logo-wbg.webp')} alt="Reformas Lopez" />
          </Link>
          <p className="footer-copy">
            Reformas integrales y renovación de viviendas en toda la Garrotxa,
            con atención al detalle, trato cercano y calidad en cada proyecto.
          </p>
        </div>

        <nav className="footer-navigation" aria-label="Navegación del pie de página">
          <h2>Navegación</h2>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>

        <div className="footer-contact">
          <h2>Contacto</h2>
          <ul className="footer-links">
            <li><a href={`tel:${phoneLink}`}>{mobile}</a></li>
            <li><a href={`mailto:${email}`}>{email}</a></li>
            <li><span>{address}</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Reformas Lopez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
