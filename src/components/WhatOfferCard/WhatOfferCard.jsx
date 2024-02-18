import React from 'react'

export const WhatOfferCard = ({ img, title }) => {
    return (
        <div className="">
            <img src={img} alt="" />
            <h5 className="text-center mt-6 text-white font-ttroboto font-regular text-2xl">{title}</h5>
        </div>
    )
}
