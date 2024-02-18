import React from 'react'
import { Banner } from './components/banner'
import { Fresh } from './components/Fresh/Fresh'
import { AboutUs } from './components/AboutUs'
import { Products } from './components/Products'
import { Customer } from './components/Customer'
import { OfferProduct } from './components/OfferProduct'
import { Econis } from './components/Econis'
import { OrganicFoods } from './components/OrganicFoods/OrganicFoods'
import { Discover } from './components/Discover'
import { Suscribe } from './components/Suscribe'

export const Home = () => {
    return (
        <>
            <Banner />
            <Fresh />
            <AboutUs />
            <Products />
            <Customer />
            <OfferProduct />
            <Econis />
            <OrganicFoods />
            <Discover />
            <Suscribe />
        </>
    )
}
