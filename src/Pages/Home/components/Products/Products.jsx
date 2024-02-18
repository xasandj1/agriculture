import React from 'react'
import { OurProductCards } from '../../../../data/ourProductsCards'
import { ProductCard } from '../../../../components/ProductCard/ProductCard'
import Button, { secondaryButton } from '../../../../components/Ul/Button'
import { LeftArrow } from '../../../../assets/icons/leftArrow'
export const Products = () => {
    
    return (
        <section className="mt-32">
            <div className="container flex flex-col">
                <div className="flex items-center flex-col">
                    <h3 className="text-darkgreen text-4xl font-ttyelow font-regular">Categories </h3>
                    <p className="text-dark text-5xl font-bold mt-2 font-ttroboto">Our Products</p>
                </div>
                <div className="flex items-center mt-10 gap-5 flex-wrap justify-center">
                    {OurProductCards.map((item) => (
                        <ProductCard key={item.id} id={item.id} img={item.img} title={item.title} sale={item.sale} price={item.price} icon={item.icon} btn={item.btn} />
                    ))}
                </div>
                <div className="flex items-center justify-center mt-28">
                    <Button classes={secondaryButton}>Load More <LeftArrow /></Button>
                </div>
            </div>
        </section>
    )
}
