import React from 'react'
import Button, { primaryButton } from '../../../../components/Ul/Button'
import { LeftArrow } from '../../../../assets/icons/leftArrow'
import { OfferCards } from '../../../../components/OfferCards/OfferCards'
import { offerOrganicCards } from '../../../../data/offerOrganicCards'

export const OfferProduct = () => {
    return (
        <section className="bg-dark">
            <div className="container py-52">
                <div className="flex items-center justify-between">
                    <div className="">
                        <h3 className="text-darkgreen font-ttyelow text-4xl font-regular">Offer</h3>
                        <p className="text-white text-5xl font-bold mt-2 font-ttroboto">What Our Customer Saying?</p>
                    </div>
                    <div className="">
                        <Button classes={primaryButton}>View All Product<LeftArrow /></Button>
                    </div>
                </div>
                <div className="flex items-center gap-5 mt-12 justify-center">
                    {offerOrganicCards.map((item) => (
                        <OfferCards key={item.id} img={item.img} id={item.id} title={item.title} sale={item.sale} price={item.price} icon={item.icon} btn={item.btn} />
                    ))}
                </div>
            </div>
        </section>
    )
}
