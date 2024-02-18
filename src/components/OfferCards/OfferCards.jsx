import React from 'react'
import Button from '../Ul/Button'


export const OfferCards = ({ img, title, sale, price, icon: Star, btn }) => {
    return (
        <div className='relative bg-aboutBg max-w-[335px] w-full h-[455px] rounded-3xl'>
            <img src={img} alt="" className='max-w-[335px] w-full h-[324px] rounded-3xl' />
            <div className="p-8">
                <h5 className="text-dark text-xl font-semibold border-b pb-3">{title}</h5>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 mt-3">
                        <p className="text-grey text-sm line-through font-semibold">{sale}</p>
                        <p className="text-dark text-lg font-bold">{price}</p>
                    </div>
                    <Star />
                </div>
            </div>
            <Button classes="absolute top-6 left-7 text-[15px] font-semibold py-[5px] px-[12px] rounded-[8px] bg-dark text-white">{btn}</Button>
        </div>
    )
}
