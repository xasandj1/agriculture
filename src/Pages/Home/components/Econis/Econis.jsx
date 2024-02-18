import React from 'react'
import { images } from '../../../../constant/images'

export const Econis = () => {
    return (
        <section className="relative">
            <div className="flex items-center relative">
                <div className="">
                    <img src={images.EcoPicture} alt="" />
                </div>
                <div className="flex items-start flex-col absolute left-[45%]">
                    <div className="bg-white rounded-3xl py-20 px-20">
                        <h3 className="text-darkgreen font-ttyelow text-4xl font-regular">Eco Friendly</h3>
                        <p className="text-dark text-5xl font-bold mt-2 font-ttroboto max-w-[500px] w-full">Econis is a Friendly Organic Store</p>
                        <h5 className="text-dark font-ttroboto text-2xl font-regular mt-8">Start with Our Company First</h5>
                        <p className="max-w-[635px] w-full mt-2 text-darkBrown text-lg font-regular">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                        <h5 className="text-dark font-ttroboto text-2xl font-regular mt-8">Learn How to Grow Yourself</h5>
                        <p className="max-w-[635px] w-full mt-2 text-darkBrown text-lg font-regular">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                        <h5 className="text-dark font-ttroboto text-2xl font-regular mt-8">Start with Our Company First</h5>
                        <p className="max-w-[635px] w-full mt-2 text-darkBrown text-lg font-regular">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                        <h5 className="text-dark font-ttroboto text-2xl font-regular mt-8">Farming Strategies of Today</h5>
                        <p className="max-w-[635px] w-full mt-2 text-darkBrown text-lg font-regular">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
