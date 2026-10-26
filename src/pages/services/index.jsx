import React from 'react';
import ServiceCarousel from '../../components/service-carousel';
import services from './Data';
import './index.scss';

function Services() {
    return (
        <main className="services-page">
            <div className="container">
                <header className="services-page__header">
                    <h1>Nuestros servicios</h1>
                    <p>Descubre algunos de nuestros trabajos y cómo evoluciona cada reforma.</p>
                </header>
                {services.map((service, index) => (
                    <section
                        className={`services-page__item${index % 2 === 1 ? ' services-page__item--reversed' : ''}`}
                        id={service.id}
                        key={service.id}
                    >
                        <ServiceCarousel service={service} />
                    </section>
                ))}
            </div>
        </main>
    );
}

export default Services;
