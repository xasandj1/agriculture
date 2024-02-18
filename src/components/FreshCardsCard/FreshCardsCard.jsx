import React from 'react'

export const FreshCardsCard = ({ title, img, txt }) => {
    return (
        <div className="relative">
            <img src={img} alt="" />
            <div className="absolute top-[30%] left-[6%]">
                <h2 className="text-white font-ttyelow text-4xl font-regular">{title}</h2>
                <p className="font-bold text-white max-w-[270px] w-full text-[40px]">{txt}</p>
            </div>
        </div>
    )
}
