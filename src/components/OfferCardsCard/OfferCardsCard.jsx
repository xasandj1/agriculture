import React from 'react'

export const OfferCardsCard = ({ img, title, txt }) => {
    return (
        <div className="relative">
            <img src={img} alt="" />
            <div className="absolute top-[30%] left-[6%]">
                <h2 className="font-ttyelow text-darkgreen  text-4xl font-regular">{title}</h2>
                <p className="font-bold max-w-[290px] w-full text-[40px] text-dark">{txt}</p>
            </div>
        </div>
    )
}
