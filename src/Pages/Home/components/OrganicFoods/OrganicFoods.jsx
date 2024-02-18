import React from 'react'
import { JuiceCards } from '../../../../data/JuiceCards'
import { OrganicJuice } from '../../../../components/OrganicJuice'

export const OrganicFoods = () => {
    return (
        <section className='bg-organicWhite py-[187px]'>
            <div className="flex items-center gap-10">
                {JuiceCards.map((item) => (
                    <OrganicJuice key={item.id} img={item.img} btn={item.btn} />
                ))}
            </div>
        </section>
    )
}
