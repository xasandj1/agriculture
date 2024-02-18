import React from 'react'
import { FreshCardsCard } from '../../../../components/FreshCardsCard'
import { FreshCards } from '../../../../data/freshCards'
import { OfferCards } from '../../../../data/offerCards'
import { OfferCardsCard } from '../../../../components/OfferCardsCard'

export const Fresh = () => {
    return (
        <section className="mt-[100px]">
            <div className="container flex items-center justify-center gap-[36px]">
                {FreshCards.map((item) => (
                    <FreshCardsCard key={item.id} img={item.img} title={item.title} txt={item.txt} />
                ))}
                {OfferCards.map((item) => (
                    <OfferCardsCard key={item.id} img={item.img} title={item.title} txt={item.txt} />
                ))}
            </div>
        </section>
    )
}
