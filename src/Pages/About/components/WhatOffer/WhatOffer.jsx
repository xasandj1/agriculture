import React from 'react'
import { WhatOfferCards } from '../../../../data/whatOfferCards'
import { WhatOfferCard } from '../../../../components/WhatOfferCard'

export const WhatOffer = () => {
    return (
        <section className="bg-dark">
            <div className="container flex flex-col items-center py-44">
                <div className="flex items-center flex-col">
                    <p className="font-ttyelow font-regular text-[36px] text-darkgreen">About Us</p>
                    <h2 className="text-white text-[50px] font-bold">What We Offer for You</h2>
                </div>
                <div className="mt-8 flex items-center gap-5">
                    {WhatOfferCards.map((item) => (
                        <WhatOfferCard key={item.id} img={item.img} title={item.title} />
                    ))}
                </div>
            </div>
        </section>
    )
}
