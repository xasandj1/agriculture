import React from 'react'
import { ServiceCards } from '../../../../data/servicCards'
import { ServiceCard } from '../../../../components/ServiceCard'

export const Service = () => {
    return (
        <section className="mt-[91px]">
            <div className="conatiner">
                <div className="flex items-center gap-8">
                    {ServiceCards.map((item) => (
                        <ServiceCard key={item.id} img={item.img} title={item.title} txt={item.txt} />
                    ))}
                </div>
            </div>
        </section>
    )
}
