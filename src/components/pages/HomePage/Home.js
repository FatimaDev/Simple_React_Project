import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObjOne ,homeObjTwo,homeObjThree ,homeObjFour,homeObjFive,homeObjSix,homeObjSeven,homeObjLast} from './Data'

function Home() {
    return (
        <>
           <HeroSection {...homeObjOne} />
           <HeroSection {...homeObjTwo} />
           <HeroSection {...homeObjThree} />
           <HeroSection {...homeObjFour} />
           <Pricing/>
           <HeroSection {...homeObjFive} />
           <HeroSection {...homeObjSix} />
           <HeroSection {...homeObjSeven} />
           <HeroSection {...homeObjLast} />




        </>
    )
}

export default Home
