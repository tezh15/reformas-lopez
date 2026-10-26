import React from 'react'
import { Button } from '../button'
import {IoHardwareChip} from 'react-icons/io5'
import {SiBmcsoftware} from 'react-icons/si'
import {GiAutoRepair} from 'react-icons/gi'
import {IconContext} from 'react-icons/lib'
import { Link } from 'react-router-dom';
import './index.scss'


function Pricing({ headingLevel = 'h1' }) {
    const SectionHeading = headingLevel;

    return (
        <IconContext.Provider value={{color: 'var(--color-carbon)', size: 64}}>
        <div>
            <div className="pricing__section darkBg">
                <div className="pricing__wrapper">
                    <SectionHeading className="pricing__heading">Nuestros servicios</SectionHeading>
                    <div className="pricing__container">
                        <Link to="" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <IoHardwareChip/>
                                </div>
                                <h3>Hardware</h3>
                                <h4>Soluciones inteligentes</h4>
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
                        <Link to="/" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <SiBmcsoftware/>
                                </div>
                                <h3>Software</h3>
                                <h4>Desarrollo de apps</h4>
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
                        <Link to="/" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <GiAutoRepair/>
                                </div>
                                <h3>Soluciones a la medida</h3>
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
