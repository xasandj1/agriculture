import React from 'react'
import { images } from '../../../../constant/images'
import { CustomerSlider } from '../CustomerSlider'

export const Customer = () => {
    return (
        <section className="bg-banner bg-cover bg-center mt-[200px]" style={{ backgroundImage: `url(${images.TesTimonial})` }}>
            <div className="container flex items-center flex-col py-40">
                <h3 className="text-darkgreen text-4xl font-ttyelow font-regular">Testimonial </h3>
                <p className="text-dark text-5xl font-bold mt-2 font-ttroboto">What Our Customer Saying?</p>
                <CustomerSlider />
            </div>
        </section>
    )
}
