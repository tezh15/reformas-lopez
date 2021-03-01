import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

const handlecurrentDate = () => {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  return (
    <small className='website-rights'>ETERUX © 2020 - {year} </small>
  )
}

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sobre nosotros</h2>
            <Link to='/about-us'>Sobre nosotros</Link>
            <Link to='/'>Portafolio</Link>
            <Link to='/'>Servicios</Link>
            <Link to='/'>Términos y condiciones</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contáctanos</h2>
            <Link to='/contact'>Contacto</Link>
            <Link to='/contact'>Solicitudes</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Redes Sociales</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className="navbar-logo">
              <div className='firstLogo'>
                <img src="images/logo_4.png" alt="logo4" style={{ width: 50, height: 50, marginRight: 10 }} />
              </div>
              <div className='secondLogo'>
                <img src="images/logo_5.png" alt="logo5" style={{ width: 100, height: 50, display: "flex", justifyContent: "flex-start" }} />
              </div>
            </Link>
          </div>
          {handlecurrentDate()}
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'>
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;