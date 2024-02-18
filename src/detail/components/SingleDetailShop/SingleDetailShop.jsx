import React from 'react'
import Button, { secondaryButton } from '../../../components/Ul/Button'
import { Stars } from '../../../assets/icons/stars'
import { LeftArrow } from '../../../assets/icons/leftArrow'
import { useParams } from 'react-router-dom'
import { SingleCards } from '../../../data/SingleCards'


export const SingleDetailShop = () => {
    const { id } = useParams()
    const data = SingleCards.find((item) => item.id == id)
    return (
        <section className="mt-28">
            <div className="container flex flex-col items-center">
                <div className="flex items-center justify-center gap-20">
                    <div className="max-w-[600px] w-full relative bg-aboutBg py-[63px] px-[80px] rounded-[30px]">
                        <img src={data.img} alt="" className='w-full ' />
                        <div className="absolute top-10 left-9 bg-dark rounded-[8px]">
                            <Button classes="text-white text-base font-semibold py-[6px] px-[12px] ">{data.btn}</Button>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-dark font-ttroboto text-4xl font-semibold">{data.title}</h2>
                        <div className="mt-2"><Button><Stars /></Button></div>
                        <div className="flex items-baseline gap-2">
                            <p className="text-grey text-xl font-semibold line-through">{data.sale}</p>
                            <p className="text-dark text-2xl font-bold">{data.price}</p>
                        </div>
                        <p className="max-w-[658px] w-full text-darkBrown text-lg font-regular mt-[27px]">{data.txt}</p>
                        <div className="flex items-center gap-5 mt-9">
                            <p className="text-dark font-ttroboto text-xl font-bold">{data.quntity}</p>
                            <input type="number" className='rounded-2xl max-w-[134px] w-full h-20 py-[28px] border border-dark pl-[31px] font-regular text-dark text-xl focus:outline-darkgreen' />
                            <Button classes={secondaryButton}>{data.add}<LeftArrow /></Button>
                        </div>
                    </div>
                </div>
                <div className="mt-24 flex items-center flex-col">
                    <div className="flex items-center gap-5">
                        <Button classes={`${secondaryButton} py-[23px] px-[53px] text-white`}>Product Description</Button>
                        <Button classes="bg-grey py-[20px] px-[61px] rounded-[16px] text-dark text-[25px] font-bold">Additional Info</Button>
                    </div>
                    <div className="mt-7">
                        <p className="text-center text-darkBrown text-lg font-regular max-w-[1138px] w-full">Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
