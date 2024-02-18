import React from 'react'
import { offerOrganicCards } from '../../../data/offerOrganicCards'
import { OfferCards } from '../../../components/OfferCards'

export const RelatedProducts = () => {
    return (
        <section className="mt-36">
            <div className="container flex items-center flex-col">
                <div className="">
                    <p className="text-dark text-5xl font-bold mt-2 font-ttroboto">Related Products</p>
                </div>
                <div className="flex items-center gap-5 mt-12 justify-center">
                    {offerOrganicCards.map((item) => (
                        <OfferCards key={item.id} img={item.img} title={item.title} sale={item.sale} price={item.price} icon={item.icon} btn={item.btn} />
                    ))}
                </div>
            </div>
        </section>
    )
}
