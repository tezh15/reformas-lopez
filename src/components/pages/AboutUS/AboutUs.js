import React from 'react'
import AboutUsSection from './components/AboutUsSection'
import {aboutUsObjOne} from './components/Data'

function SignUp() {
    return (
        <>
            <AboutUsSection {...aboutUsObjOne}/>
        </>
    )
}

export default SignUp