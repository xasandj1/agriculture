import React from 'react'
import { images } from '../../../../constant/images'
import Button, { secondaryButton } from '../../../../components/Ul/Button'
import { LeftArrow } from '../../../../assets/icons/leftArrow'

export const Suscribe = () => {
    return (
        <section className='mt-[185px]'>
            <div className="container flex items-center justify-center">
                <img src={images.Suscribe} alt="" className='relative' />
                <div className="absolute  max-w-[1258px] w-full flex items-center justify-between">
                    <h2 className="text-[50px] max-w-[357px] w-full text-white font-ttroboto font-bold">Subscribe to our Newsletter</h2>
                    <form className="flex items-center gap-[6px] max-w-[575px] w-full">
                        <div className="max-w-[349px] w-full">
                            <input type="text" className='w-full py-[30px] rounded-[16px] pl-[23px] text-lg text-dark font-ttroboto font-regular focus:outline-darkgreen placeholder:text-plachholderLight' placeholder='Your Email Address' />
                        </div>
                        <Button classes={secondaryButton}>Subscribe <LeftArrow /></Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
