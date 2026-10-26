import React from 'react'
import AboutUsSection from '../../components/about-us-section'
import {aboutUsObjOne} from './Data'

function SignUp() {
    return (
        <>
            <AboutUsSection {...aboutUsObjOne}/>
        </>
    )
}

export default SignUp