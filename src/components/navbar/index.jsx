import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import './index.scss';
import { IconContext } from 'react-icons/lib';


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();

    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: 'var(--color-carbon)' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <div className='firstLogo'>
                                <img src="assets/logo/logo-wbg.webp" alt="logo4" style={{ height: 60, marginRight: 10 }} />
                            </div>
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                    Inicio
                                 </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/servicios' className="nav-links" onClick={closeMobileMenu}>
                                    Servicios
                        </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/nosotros' className="nav-links" onClick={closeMobileMenu}>
                                    Nosotros
                        </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contacto' className="nav-links" onClick={closeMobileMenu}>
                                    Contacto
                        </Link>
                            </li>
                            <button
                                className="btn btn-primary whatsapp"
                                type="button"
                                aria-label="WhatsApp"
                                title="WhatsApp"
                            >
                                <FaWhatsapp aria-hidden="true" />
                            </button>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
