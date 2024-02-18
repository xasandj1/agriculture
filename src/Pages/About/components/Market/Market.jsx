import React from 'react'
import { images } from '../../../../constant/images'
import { Sircle } from '../../../../assets/icons/sircle'
import { Service } from '../Service'

export const Market = () => {
    return (
        <section className="bg-aboutBg ">
            <div className="container py-48 flex items-center flex-col">
                <div className="flex items-center gap-12">
                    <div className="flex flex-col">
                        <p className="font-ttyelow font-regular text-[36px] text-darkgreen">Why Choose us?</p>
                        <h2 className="max-w-[600px] w-full text-dark text-[50px] font-bold mt-[8px]">We do not buy from the open market & traders.</h2>
                        <p className="text-darkBrown text-lg font-regular max-w-[670px] w-full mt-6">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
                        <div className="mt-9">
                            <div className="flex items-start">
                                <p className="flex items-center gap-2 text-dark font-ttroboto text-xl font-regular rounded-[49px] bg-whiteLight py-7 pl-7 pr-20">
                                    <Sircle />
                                    100% Natural Product
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-end mt-3">
                                <div className="flex items-center justify-end">
                                    <p className="max-w-[444px] text-darkBrown text-lg font-regular">Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-9">
                            <div className="flex items-start">
                                <p className="flex items-center gap-2 text-dark font-ttroboto text-xl font-regular rounded-[49px] bg-whiteLight py-7 pl-7 pr-20">
                                    <Sircle />
                                    Increases resistance
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-end mt-3">
                                <div className="flex items-center justify-end">
                                    <p className="max-w-[444px] text-darkBrown text-lg font-regular">Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={images.Market} alt="" />
                    </div>
                </div>
                <div className="mt-24">
                    <div className="flex flex-col items-center">
                        <div className="">
                            <Service />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
