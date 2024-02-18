import React from 'react'
import { images } from '../../../../constant/images'
import { Herb } from '../../../../assets/icons/herb'
import { Pochta } from '../../../../assets/icons/pochta'
import Button, { secondaryButton } from '../../../../components/Ul/Button'
import { LeftArrow } from '../../../../assets/icons/leftArrow'

export const AboutUs = () => {
    return (
        <section className="bg-aboutBg mt-[100px] py-[100px]">
            <div className="container flex items-center gap-[60px]">
                <div className="">
                    <img src={images.AboutUs} alt="" />
                </div>
                <div className="">
                    <h3 className="text-darkgreen font-ttyelow text-4xl font-regular">About Us</h3>
                    <h2 className="max-w-[702px] w-full text-dark text-[50px] font-bold mt-[8px]">We Believe in Working Accredited Farmers</h2>
                    <p className="text-darkBrown text-lg font-regular max-w-[740px] w-full mt-[14px]">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <div className="mt-[46px]">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex items-center gap-[20px]">
                                <div className="bg-white rounded-[20px] py-[23px] px-[27px]">
                                    <Herb />
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="text-dark font-ttroboto font-bold text-[25px]">Organic Foods Only</h5>
                                    <p className="text-darkBrown text-lg font-regular max-w-[440px] w-full">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-[20px]">
                                <div className="bg-white rounded-[20px] py-[23px] px-[27px]">
                                    <Pochta />
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="text-dark font-ttroboto font-bold text-[25px]">Quality Standards</h5>
                                    <p className="text-darkBrown text-lg font-regular max-w-[440px] w-full">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                </div>
                            </div>
                            <div className="flex items-center mt-12">
                                <Button classes={`${secondaryButton}`}>Shop Now <LeftArrow /></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
