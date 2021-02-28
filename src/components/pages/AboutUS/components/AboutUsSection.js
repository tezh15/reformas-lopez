import React from 'react';
import '../css/AboutUsSection.css';

function HeroSection({
  lightBg,
  lightText,
  headline,
  description,
  descriptionTwo,
  descriptionThree
}) {
  return (
    <>
      <div className={lightBg ? 'AboutUs__hero-section' : 'AboutUs__hero-section darkBg'}>
        <div className='container'>
          <h1 className={lightText ? 'heading' : 'heading dark'}>
            {headline}
          </h1>
          <p className='dark'>
            {description}
          </p>
          <h1 className={lightText ? 'heading' : 'heading dark'}>Misión</h1>
          <p className='dark'>
            {descriptionTwo}
          </p>
          <h1 className={lightText ? 'heading' : 'heading dark'}>Visión</h1>
          <p className='dark'>
            {descriptionThree}
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;