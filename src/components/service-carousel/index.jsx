import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './index.scss';

function ServiceCarousel({ service }) {
    const { hash } = useLocation();
    const [projectIndex, setProjectIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);
    const project = service.projects[projectIndex];
    const imageCount = project.images.length;

    useEffect(() => {
        if (hash !== `#${service.id}`) {
            return undefined;
        }

        const frame = window.requestAnimationFrame(() => {
            document.getElementById(service.id)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });

        return () => window.cancelAnimationFrame(frame);
    }, [hash, service.id]);

    useEffect(() => {
        const desktopQuery = window.matchMedia('(min-width: 769px)');
        let interval;

        const updateInterval = () => {
            window.clearInterval(interval);
            if (desktopQuery.matches) {
                interval = window.setInterval(() => {
                    setImageIndex((current) => (current + 1) % imageCount);
                }, 3000);
            }
        };

        updateInterval();
        desktopQuery.addListener(updateInterval);

        return () => {
            window.clearInterval(interval);
            desktopQuery.removeListener(updateInterval);
        };
    }, [imageCount]);

    const selectProject = (index) => {
        setProjectIndex(index);
        setImageIndex(0);
    };

    return (
        <div className="service-carousel">
            <div className="service-carousel__description">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                {service.projects.length > 1 && (
                    <div className="service-carousel__projects" aria-label="Seleccionar proyecto">
                        {service.projects.map((item, index) => (
                            <button
                                className={`service-carousel__project${index === projectIndex ? ' is-active' : ''}`}
                                key={`${item.name}-${item.images[0]}`}
                                type="button"
                                onClick={() => selectProject(index)}
                                aria-pressed={index === projectIndex}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="service-carousel__gallery">
                <div className="service-carousel__image-wrap">
                    <img
                        className="service-carousel__image"
                        src={project.images[imageIndex]}
                        alt={`${service.title}, ${project.name.toLowerCase()}, paso ${imageIndex + 1}`}
                    />
                    <span className="service-carousel__step">
                        Paso {imageIndex + 1} de {imageCount}
                    </span>
                </div>

                <div className="service-carousel__controls">
                    <button
                        className="service-carousel__arrow"
                        type="button"
                        onClick={() => setImageIndex((current) => (current - 1 + imageCount) % imageCount)}
                        aria-label="Ver imagen anterior"
                    >
                        <FaChevronLeft aria-hidden="true" />
                    </button>
                    <div className="service-carousel__dots" aria-label="Imágenes del proyecto">
                        {project.images.map((image, index) => (
                            <button
                                className={`service-carousel__dot${index === imageIndex ? ' is-active' : ''}`}
                                key={image}
                                type="button"
                                onClick={() => setImageIndex(index)}
                                aria-label={`Ver paso ${index + 1}`}
                                aria-current={index === imageIndex ? 'step' : undefined}
                            />
                        ))}
                    </div>
                    <button
                        className="service-carousel__arrow"
                        type="button"
                        onClick={() => setImageIndex((current) => (current + 1) % imageCount)}
                        aria-label="Ver imagen siguiente"
                    >
                        <FaChevronRight aria-hidden="true" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ServiceCarousel;
