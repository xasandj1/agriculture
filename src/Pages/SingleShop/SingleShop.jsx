import React from 'react'
import { ShopBanner } from '../../detail/components/ShopBanner'
import { RelatedProducts } from '../../detail/components/RelatedProducts'
import { Suscribe } from '../Home/components/Suscribe'
import { SingleDetailShop } from '../../detail/components/SingleDetailShop'


export const SingleShop = () => {
    return (
        <>
            <ShopBanner />
            <SingleDetailShop />
            <RelatedProducts />
            <Suscribe />
        </>
    )
}
