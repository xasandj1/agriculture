import React from 'react'
import Button from '../Ul/Button'

export const ServiceCard = ({ img, title, txt }) => {
    return (
        <Button classes="bg-white flex items-center flex-col rounded-[30px] pt-[50px] px-[35px] pb-[20px]">
            <div className="bg-aboutBg rounded-[18px] mb-[15px]">
                <img src={img} alt="" className='p-6' />
            </div>
            <h3 className="text-dark text-2xl font-ttroboto font-bold">Return Policy</h3>
            <p className="max-w-[190px] w-full text-darkBrown text-center text-lg font-regular mt-3">Simply dummy text of the printintypesetting industry.</p>
        </Button>
    )
}
