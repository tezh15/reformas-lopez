import React from 'react';
import ContactUsSection from '../../components/contact-us-section';
import ContactForm from '../../components/contact-form';

function Contact({ embedded = false }) {
    const PageHeading = embedded ? 'h2' : 'h1';

    return (
        <>
            <div className="mainSection">
                <div className="container">
                    <div className="row">
                        <PageHeading style={{ marginBottom: 20 }}>¿Qué te gustaría reformar?</PageHeading>
                        <span style={{ marginBottom: 20 }}>Cuéntanos brevemente tu proyecto</span>
                        <div className="col-lg-6 mb-4">
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
