import React from 'react'
import { customCards } from '../../../../data/customCards'
import { CustomSlider } from '../../../../components/CustomSlider'
import Slider from 'react-slick'
import { Organic } from '../../../../assets/icons/organic'
import { ActiveProduct } from '../../../../assets/icons/activeProduct'
import { OrganicOchide } from '../../../../assets/icons/organicOchide'
import { YersFarming } from '../../../../assets/icons/yersFarming'

export const CustomerSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section className="mt-14">
            <div className="container flex flex-col items-center">
                <div className="flex items-center flex-col">
                    {customCards.map((item) => (
                        <CustomSlider key={item.id} img={item.img} icon={item.icon} txt={item.txt} name={item.name} job={item.job} btn={item.btn} />
                    ))}
                </div>
                <div className="mt-24 flex items-center gap-16">
                    <Organic />
                    <ActiveProduct />
                    <OrganicOchide />
                    <YersFarming />
                </div>
            </div>
        </section>
    )
}
