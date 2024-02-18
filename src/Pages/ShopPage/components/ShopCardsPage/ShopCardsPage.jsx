import React from 'react'
import { ShopPageCard } from '../../../../data/shopPageCard'
import { ShopPageCardsAll } from '../../../../components/ShopPageCardsAll/ShopPageCardsAll'
import { Suscribe } from '../../../Home/components/Suscribe/Suscribe'

export const ShopCardsPage = () => {
    return (
        <section className="mt-32">
            <div className="container flex flex-col">
                <div className="flex items-center flex-col">
                    <h3 className="text-darkgreen text-4xl font-ttyelow font-regular">Categories </h3>
                    <p className="text-dark text-5xl font-bold mt-2 font-ttroboto">Our Products</p>
                </div>
                <div className="flex items-center mt-10 gap-5 flex-wrap justify-center">
                    {ShopPageCard.map((item) => (
                        <ShopPageCardsAll key={item.id} id={item.id} img={item.img} title={item.title} sale={item.sale} price={item.price} icon={item.icon} btn={item.btn} />
                    ))}
                </div>
                <Suscribe />
            </div>
        </section>
    )
}
