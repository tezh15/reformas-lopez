import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib'


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
            <IconContext.Provider value={{ color: '#242424' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <div className='firstLogo'>
                                <img src="images/logo_4.png" style={{ width: 50, height: 50, marginRight: 10 }} />
                            </div>
                            <div className='secondLogo'>
                                <img src="images/logo_5.png" style={{ width: 100, height: 50, display: "flex", justifyContent: "flex-start"}} />
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
                                <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                    Servicios
                        </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                                    Contacto
                        </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
