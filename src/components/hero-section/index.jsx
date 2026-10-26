import React from 'react';
import './index.scss';
import { Button } from '../button';
import { Link } from 'react-router-dom';

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container' style={{justifyContent: "space-around"}}>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              justifyContent: "space-around",
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col' >
              <div className='home__hero-text-wrapper' style={{marginRight: 10}}>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to='/servicios'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col' style={{ padding: 25, borderRadius: 5}}>
              <div className='home__hero-img-wrapper' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <img src="assets/logo/logo-wbg.webp" alt="logo"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;