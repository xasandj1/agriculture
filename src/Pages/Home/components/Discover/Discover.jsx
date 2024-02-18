import React from 'react'
import Button, { primaryButton } from '../../../../components/Ul/Button'
import { LeftArrow } from '../../../../assets/icons/leftArrow'
import { images } from '../../../../constant/images'
import { User } from '../../../../assets/icons/user'

export const Discover = () => {
    return (
        <section className="my-[175px]">
            <div className="container flex flex-col">
                <h3 className="text-darkgreen font-ttyelow text-4xl font-regular">News</h3>
                <div className="flex items-center justify-between">
                    <h2 className="max-w-[790px] w-full text-dark text-[50px] font-bold mt-[8px] ">Discover weekly content about organic food, & more</h2>
                    <Button classes={`flex items-center py-[28px] px-[45px] gap-[9px] text-dark border-dark border rounded-[16px] font-bold font-ttroboto text-xl`}>More News <LeftArrow /></Button>
                </div>
                <div className="mt-[40px] flex items-center gap-[50px] justify-center">
                    <div className="relative">
                        <img src={images.NewHerb} alt="" />
                        <div className="flex flex-col bg-white absolute bottom-[-15%] left-[3%] py-[46px] px-[57px] shadow-lg rounded-tl-[31px] rounded-tr-[34px] rounded-br-[30px] rounded-bl-[30px]" >
                            <div className="flex items-center gap-2">
                                <User />
                                <h6 className="text-dark text-lg font-regular font-ttroboto">By Rachi Card</h6>
                            </div>
                            <h3 className="mt-[15px] font-ttroboto text-dark text-[25px] font-bold">The Benefits of Vitamin D & How to Get It</h3>
                            <p className="max-w-[440px] w-full text-darkBrown text-lg font-regular">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            <div className="flex items-center mt-[15px]">
                                <Button classes={primaryButton}>Read More <LeftArrow /></Button>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={images.NewTomatio} alt="" />
                        <div className="flex flex-col bg-white absolute bottom-[-15%] left-[3%] py-[46px] px-[57px] shadow-lg rounded-tl-[31px] rounded-tr-[34px] rounded-br-[30px] rounded-bl-[30px]" >
                            <div className="flex items-center gap-2">
                                <User />
                                <h6 className="text-dark text-lg font-regular font-ttroboto">By Rachi Card</h6>
                            </div>
                            <h3 className="mt-[15px] font-ttroboto text-dark text-[25px] font-bold">Our Favourite Summertime Tommeto</h3>
                            <p className="max-w-[440px] w-full text-darkBrown text-lg font-regular">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            <div className="flex items-center mt-[15px]">
                                <Button classes={primaryButton}>Read More <LeftArrow /></Button>
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </section>
    )
}
