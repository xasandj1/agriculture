import React from 'react'
import { Link } from 'react-router-dom'

export const ExpertsCard = ({ img, name, job, instagram: Instagram, facebook: FaceBook, twiter: Twiter }) => {
    return (
        <div className="hover:bg-white transform hover:scale-105  hover:filter drop-shadow-0 29px 44px rgba-150-150-150-25 transition-color duration-500 ease-in-out">
            <img src={img} alt="" />
            <div className="bg-aboutBg py-8 px-7 rounded-bl-[36px] rounded-br-[36px]">
                <h4 className="text-dark font-ttroboto text-2xl font-bold">{name}</h4>
                <div className="flex items-center justify-between">
                    <p className="text-darkgreen font-ttyelow text-2xl font-regular">{job}</p>
                    <div className="flex items-center gap-4">
                        <Link to={""}><Instagram /></Link>
                        <Link to={""}><FaceBook /></Link>
                        <Link to={""}><Twiter /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
