import React from 'react'
import ContactUsSection from './components/ContactUsSection'
import ContactForm from "./components/ContactForm"
import { contactObjOne } from './components/Data'

function Contact() {
    return (
        <>
            <div className="mainSection">
                <div className="container">
                    <div className="row">
                        <h1 style={{ marginBottom: 20 }}>Contáctanos</h1>
                        <div className="col-lg-6">
                            <ContactUsSection />
                        </div>
                        <div className="col-lg-6">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
