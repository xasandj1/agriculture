import React from 'react'
import { ExpertsCard } from '../../../../components/ExpertsCard'
import { ExpertsCards } from '../../../../data/ExpertsCards'

export const Experts = () => {
    return (
        <section className="py-44">
            <div className="container flex items-center flex-col">
                <div className="flex flex-col items-center">
                    <p className="font-ttyelow font-regular text-[36px] text-darkgreen">Team</p>
                    <h2 className="text-dark text-[50px] font-bold">Our Organic Experts</h2>
                    <p className="max-w-[865px] w-full text-center text-darkBrown text-lg font-regular">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                </div>
                <div className="flex items-center justify-center gap-7 mt-10">
                    {ExpertsCards.map((item) => (
                        <ExpertsCard key={item.id} img={item.img} job={item.job} instagram={item.instagram} facebook={item.facebook} twiter={item.twiter} name={item.name} />
                    ))}
                </div>
            </div>
        </section>
    )
}
