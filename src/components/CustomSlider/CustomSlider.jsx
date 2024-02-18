import React from 'react'
import Slider from 'react-slick';
import Button from '../Ul/Button';

export const CustomSlider = ({ img, icon: Stars, txt, name, job, btn }) => {
    return (
        <div className='flex items-center flex-col border-b border-light pb-24'>
            <img src={img} alt="" />
            <div className="flex items-center justify-center mt-5">
                <Stars />
            </div>
            <p className="text-darkBrown text-lg font-regular max-w-[780px] text-center mt-6 mb-5">{txt}</p>
            <h5 className="text-dark font-ttroboto font font-semibold text-2xl">{name}</h5>
            <p className="text-darkBrown font-regular text-sm">{job}</p>
            <div className="">
                <Button classes="mt-[19px]"><img src={btn} alt="" /></Button>
            </div>
        </div>
    )
}