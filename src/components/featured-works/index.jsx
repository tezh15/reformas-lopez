import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './index.scss';

const featuredWorks = [
    {
        title: 'Cocinas transformadas',
        project: 'De espacios anticuados a cocinas funcionales y modernas.',
        images: Array.from({ length: 4 }, (_, index) => (
            `/assets/assets/reformas/cocina/3/image${index + 1}.jpeg`
        )),
        alt: 'Cocina reformada, proyecto destacado 3',
        link: '/servicios#cocina',
    },
    {
        title: 'Baños que mejoran tu hogar',
        project: 'Transformando espacios con estilo y funcionalidad.',
        images: Array.from({ length: 4 }, (_, index) => (
            `/assets/assets/reformas/baños/3/image${index + 1}.jpeg`
        )),
        alt: 'Baño reformado, proyecto destacado 3',
        link: '/servicios#banos',
    },
    {
        title: 'Puertas y carpintería',
        project: 'Una base impecable para tu hogar.',
        images: Array.from({ length: 4 }, (_, index) => (
            `/assets/assets/reformas/puertas/3/image${index + 1}.jpeg`
        )),
        alt: 'Trabajo de puertas y carpintería, proyecto destacado 3',
        link: '/servicios#puertas',
    },
];

function FeaturedWorkCard({ work }) {
    const [imageIndex, setImageIndex] = useState(0);
    const touchStartX = useRef(null);

    useEffect(() => {
        const desktopQuery = window.matchMedia('(min-width: 769px)');
        let interval;

        const updateInterval = () => {
            window.clearInterval(interval);
            if (desktopQuery.matches) {
                interval = window.setInterval(() => {
                    setImageIndex((current) => (current + 1) % work.images.length);
                }, 3000);
            }
        };

        updateInterval();
        desktopQuery.addListener(updateInterval);

        return () => {
            window.clearInterval(interval);
            desktopQuery.removeListener(updateInterval);
        };
    }, [work.images.length]);

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
        if (touchStartX.current === null) {
            return;
        }

        const swipeDistance = event.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(swipeDistance) > 40) {
            setImageIndex((current) => (
                (current + (swipeDistance < 0 ? 1 : -1) + work.images.length) % work.images.length
            ));
        }
        touchStartX.current = null;
    };

    return (
        <article className="featured-works__card">
            <div
                className="featured-works__gallery"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={() => { touchStartX.current = null; }}
            >
                <img
                    className="featured-works__image"
                    src={work.images[imageIndex]}
                    alt={`${work.alt}, imagen ${imageIndex + 1}`}
                    loading="lazy"
                />
                <div className="featured-works__dots" aria-label="Imágenes del proyecto">
                    {work.images.map((image, index) => (
                        <button
                            className={`featured-works__dot${index === imageIndex ? ' is-active' : ''}`}
                            key={image}
                            type="button"
                            onClick={() => setImageIndex(index)}
                            aria-label={`Ver imagen ${index + 1} de ${work.title}`}
                            aria-current={index === imageIndex ? 'true' : undefined}
                        />
                    ))}
                </div>
            </div>
            <div className="featured-works__info">
                <span>{work.project}</span>
                <h3>{work.title}</h3>
                <Link className="featured-works__link" to={work.link}>
                    Ver servicio <FaArrowRight aria-hidden="true" />
                </Link>
            </div>
        </article>
    );
}

function FeaturedWorks() {
    return (
        <section className="featured-works" aria-labelledby="featured-works-title">
            <div className="container">
                <header className="featured-works__header">
                    <span className="featured-works__eyebrow">Nuestro trabajo</span>
                    <h2 id="featured-works-title">Proyectos destacados</h2>
                    <p>Una selección de reformas realizadas cuidando cada detalle.</p>
                </header>

                <div className="featured-works__grid">
                    {featuredWorks.map((work) => (
                        <FeaturedWorkCard work={work} key={work.title} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedWorks;
