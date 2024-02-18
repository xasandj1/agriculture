import React from 'react'
import { AboutBanner } from './components/AboutBanner'
import { Creative } from './components/Creative'
import { Market } from './components/Market'
import { Experts } from './components/Experts'
import { WhatOffer } from './components/WhatOffer'
import { Suscribe } from '../Home/components/Suscribe'

export const About = () => {
    return (
        <>
            <AboutBanner />
            <Creative />
            <Market />
            <Experts />
            <WhatOffer />
            <Suscribe />
        </>
    )
}
