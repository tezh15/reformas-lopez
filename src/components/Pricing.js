import React from 'react'
import { Button } from './Button'
import {IoHardwareChip} from 'react-icons/io5'
import {SiBmcsoftware} from 'react-icons/si'
import {GiAutoRepair} from 'react-icons/gi'
import {IconContext} from 'react-icons/lib'
import { Link } from 'react-router-dom';
import './Pricing.css'


function Pricing() {
    return (
        <IconContext.Provider value={{color: '#fff', size: 64}}>
        <div>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading">Servicios</h1>
                    <div className="pricing__container">
                        <Link to="/sign-up" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <IoHardwareChip/>
                                </div>
                                <h3>Hardware</h3>
                                <h5>Soluciones inteligentes</h5>
                                <div className="pricing__container-features">
                                <ul >
                                    <li>Domótica</li>
                                    <li>Automatización</li>
                                    <li>IOT</li>
                                </ul>

                                </div>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Conoce más
                                </Button>
                            </div>
                        </Link>
                        <Link to="/sign-up" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <SiBmcsoftware/>
                                </div>
                                <h3>Software</h3>
                                <h5>Desarrollo de apps</h5>
                                <div className="pricing__container-features">
                                <ul>
                                    <li>Web</li>
                                    <li>Movil</li>
                                    <li>Desktop</li>
                                </ul>
                                </div>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Conoce más
                                </Button>
                            </div>
                        </Link>
                        <Link to="/sign-up" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <GiAutoRepair/>
                                </div>
                                <h3>Soluciones</h3>
                                <h3>a la medida</h3>
                                <label>¿tienes un emprendimiento?</label>
                                <div className="pricing__container-features">
                                    <p style={{textAlign: "center", marginBottom: 55}}>Cuéntanos como podemos ayudarte desde el ámbito tecnológico</p>
                                </div>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Contáctanos
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Pricing
