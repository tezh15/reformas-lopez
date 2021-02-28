import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import Contact from '../Contact/Contact';
import { homeObjOne } from './Data'

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <Pricing />
            <Contact />
        </>
    )
}

export default Home
