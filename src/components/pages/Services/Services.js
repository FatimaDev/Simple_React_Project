import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObjTwo ,homeObjFour} from './Data'

function Services() {
    return (
        <>
         
           <HeroSection {...homeObjTwo} />
           <Pricing/>
           <HeroSection {...homeObjFour} />

           

        </>
    )
}

export default Services
