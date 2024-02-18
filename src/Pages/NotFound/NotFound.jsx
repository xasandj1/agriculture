import React from 'react'
import { images } from '../../constant/images'
import Button, { secondaryButton } from '../../components/Ul/Button'
import { LeftArrow } from '../../assets/icons/leftArrow'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <section className="bg-banner bg-cover bg-center min-h-[898px] flex flex-col justify-center" style={{ backgroundImage: `url(${images.NotFound})` }}>
            <div className="container flex flex-col justify-end items-end">
                <div className="flex flex-col">
                    <img src={images.Error} alt="" />
                    <div className="flex items-center flex-col">
                        <h2 className="text-dark font-ttroboto text-7xl font-bold mt-2">Page not found</h2>
                        <p className="text-darkBrown text-lg font-semibold mt-3">The page you are looking for doesn't exist or has been moved</p>
                    </div>
                    <Link to={"/"} className="flex items-start justify-start mt-[23px]">
                        <Button classes={`${secondaryButton} mt-[36px]`}>Go to Homepage <LeftArrow /></Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
