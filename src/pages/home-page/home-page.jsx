import React from 'react';
import HeroSection from '../../components/hero-section';
import FeaturedWorks from '../../components/featured-works';
import WorkProcess from '../../components/work-process';
import Contact from '../contact';
import { homeObjOne } from './Data';

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <FeaturedWorks />
            <WorkProcess />
            <Contact embedded />
        </>
    )
}

export default Home
