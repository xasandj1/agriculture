import React from 'react'
import { images } from '../../../../constant/images'

export const Creative = () => {
    return (
        <section className="mt-28">
            <div className="container flex items-center justify-between">
                <div className="">
                    <img src={images.Creative} alt="" className='max-w-[794px] w-full h-[752px]' />
                </div>
                <div className="flex flex-col">
                    <p className="font-ttyelow font-regular text-[36px] text-darkgreen">About Us</p>
                    <h2 className="max-w-[540px] w-full text-dark text-[50px] font-bold mt-[8px]">We do Creative Things for Success</h2>
                    <div className="flex flex-col">
                        <p className="text-darkBrown text-lg font-regular max-w-[665px] w-full mt-3">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        <p className="text-darkBrown text-lg font-regular mt-6 max-w-[665px] w-full">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    </div>
                    <div className="flex items-center justify-between mt-12">
                        <div className="flex items-center gap-4">
                            <img src={images.Tractor} alt="" />
                            <h3 className="text-dark font-ttroboto text-2xl font-semibold max-w-[226px] w-full">Modern Agriculture Equipment</h3>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src={images.Grow} alt="" />
                            <h3 className="text-dark font-ttroboto text-2xl font-semibold max-w-[226px] w-full">No growth hormones are used</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
