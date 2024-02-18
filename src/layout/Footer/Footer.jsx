import React from 'react'
import { images } from '../../constant/images'
import { Link } from 'react-router-dom'
import { Instagram } from '../../assets/icons/instagram'
import { Facebook } from '../../assets/icons/facebook'
import { Twiter } from '../../assets/icons/twiter'
import { Pixo } from '../../assets/icons/pixo'

export const Footer = () => {
    return (
        <footer className="mt-[50px]">
            <div className="container flex items-center justify-between">
                <div className="flex items-end justify-end flex-col border-r pr-[51px]">
                    <h3 className="text-dark font-ttroboto text-[30px] font-bold">Contact Us</h3>
                    <div className="mt-[32px] flex justify-end items-end flex-col">
                        <p className="text-darkBrown text-base font-bold">Email</p>
                        <a href="mailto:needhelp@Organia.com" className='text-darkBrown text-base font-regular mt-1'>needhelp@Organia.com</a>
                    </div>
                    <div className="mt-[32px] flex justify-end items-end flex-col">
                        <p className="text-darkBrown text-base font-bold">Phone</p>
                        <a href="tel:+666 888 888" className='text-darkBrown text-base font-regular mt-1'>666 888 888</a>
                    </div>
                    <div className="mt-[32px] flex justify-end items-end flex-col">
                        <p className="text-darkBrown text-base font-bold">Address</p>
                        <p className='text-darkBrown text-base font-regular mt-1'>88 road, borklyn street, USA</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Link to={"/"}><img src={images.Logo} alt="" /></Link>
                    <p className="max-w-[556px] w-full text-center font-regular mt-[23px] text-darkBrown text-lg ">Simply dummy text of the printing and typesetting industry.Lorem Ipsum simply dummy text of the printing </p>
                    <div className="flex items-center gap-[15px] mt-[50px]">
                        <Link to=""><Instagram /></Link>
                        <Link to=""><Facebook /></Link>
                        <Link to=""><Twiter /></Link>
                        <Link to=""><Pixo /></Link>
                    </div>
                </div>
                <div className="flex items-start justify-start flex-col border-l pl-[51px]">
                    <h3 className="text-dark font-ttroboto text-[30px] font-bold">Utility Pages</h3>
                    <Link to="" className='text-darkBrown text-base font-regular mt-[34px]'>Style Guide</Link>
                    <Link to="*" className='text-darkBrown text-base font-regular mt-6'>404 Not Found</Link>
                    <Link className='text-darkBrown text-base font-regular mt-6'>Password Protected</Link>
                    <Link className='text-darkBrown text-base font-regular mt-6'>Licences</Link>
                    <Link className='text-darkBrown text-base font-regular mt-6'>Changelog</Link>
                </div>
            </div>
        </footer>
    )
}
