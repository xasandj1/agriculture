import React from 'react'
import Button from '../Ul/Button'

export const OrganicJuice = ({ img, btn }) => {
    return (
        <div className="relative">
            <img src={img} alt="" />
            <Button classes="py-[33px] px-[83px] bg-white text-dark text-2xl font-regular font-ttroboto absolute top-[40%] left-[25%] rounded-[20px]">{btn}</Button>
        </div>
    )
}
