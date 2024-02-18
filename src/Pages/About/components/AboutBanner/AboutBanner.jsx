import React from 'react'
import { images } from '../../../../constant/images'

export const AboutBanner = () => {
    return (
        <section className="bg-banner bg-cover bg-center min-h-[450px] flex flex-col justify-center" style={{ backgroundImage: `url(${images.AboutUsPage})` }}>
            <div className="container flex items-center justify-center">
                <h2 className="text-dark font-ttroboto text-[70px] font-bold">About Us</h2>
            </div>
        </section>
    )
}
