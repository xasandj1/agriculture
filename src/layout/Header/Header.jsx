import React from 'react'
import { links } from './data'
import { Link } from 'react-router-dom'
import { images } from '../../constant/images'
import { SearchIcon } from '../../assets/icons/SearchIcon'
import { ShopIcon } from '../../assets/icons/ShopIcon'

export const Header = () => {
    return (
        <header className="py-[75px]">
            <div className="container flex items-center justify-between">
                <Link to="/"><img src={images.Logo} alt="" /></Link>
                <ul className="flex items-center gap-[40px]">
                    {links.map((route) => (
                        <Link key={route.path} to={route.path} className='text-dark text-xl font-bold'>
                            {route.name}
                        </Link>
                    ))}
                </ul>
                <div className="flex items-center gap-[10px] max-w-[550px] w-full">
                    <form className="max-w-[376px] w-full relative">
                        <input type="text" name='input' className="bg-lightWhite h-[66px] rounded-[36px] focus:outline-darkgreen w-full text-xl text-dark font-ttyelow font-semibold pl-6 " />
                        <button className="absolute top-[5px] right-[6px]"><SearchIcon /></button>
                    </form>
                    <button className="border-[1px] border-light flex items-center py-[5px] pl-[6px] rounded-[33px]">
                        <ShopIcon />
                        <p className="text-lg font-semibold text-dark pr-[23px] ml-[12px]">Cart (0)</p>
                    </button>
                </div>
            </div>
        </header>
    )
}
