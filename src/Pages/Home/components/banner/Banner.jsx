import React from 'react'
import { images } from '../../../../constant/images'
import { LeftArrow } from '../../../../assets/icons/leftArrow'
import Button, { primaryButton } from '../../../../components/Ul/Button'

export const Banner = () => {
    return (
        <section className="bg-banner bg-cover bg-center min-h-[898px] flex flex-col justify-center" style={{ backgroundImage: `url(${images.Banner})` }}>
            <div className="container flex flex-col">
                <p className="font-ttyelow font-regular text-[36px] text-darkgreen">100% Natural Food</p>
                <h1 className="text-dark text-[70px] font-bold max-w-[530px] w-full">Choose the best healthier way of life</h1>
                <div className="flex items-center mt-[23px]">
                    <Button classes={`${primaryButton}`}>Explore Now <LeftArrow /></Button>
                </div>
            </div>
        </section>
    )
}
