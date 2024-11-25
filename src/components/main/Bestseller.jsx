import React from 'react'
import img_product from '../../assets/images/img_product.webp'
import img_product2 from '../../assets/images/img_product2.webp'
import img_product3 from '../../assets/images/img_product3.webp'
import img_product4 from '../../assets/images/img_product4.webp'
import ProductItem from './items/ProductItem'
import ico_heart from '../../assets/images/ico_heart.png'
import ico_reload from '../../assets/images/ico_reload.png'
import ico_search from '../../assets/images/ico_search.png'
import ico_star_active from '../../assets/images/ico_star_active.png'

import ico_star_gray from '../../assets/images/ico_star_gray.png'
const Bestseller = () => {
    const list_icon = [
        {
            icons: { heart: ico_heart, reload: ico_reload, search: ico_search },
            image: img_product,
            title: "Egg Dining Table",
            star: { active: ico_star_active, gray: ico_star_gray },
            price: 70000,
            in_stock: false,
            href: "product-detail.html",
            point: 4,
            saleOf:0,
        },
        {
            icons: { heart: ico_heart, reload: ico_reload, search: ico_search },
            image: img_product2,
            title: "Century Starburst Clock",
            star: { active: ico_star_active, gray: ico_star_gray },
            price: 55000,
            in_stock: true,
            href: "product-detail.html",
            point: 0,
            saleOf:10,
        },
        {
            icons: { heart: ico_heart, reload: ico_reload, search: ico_search },
            image: img_product3,
            title: "Bouquet Flower Vase",
            star: { active: ico_star_active, gray: ico_star_gray },
            price: 59000,
            in_stock: true,
            href: "product-detail.html",
            point: 3,
            saleOf:15,
        },
        {
            icons: { heart: ico_heart, reload: ico_reload, search: ico_search },
            image: img_product4,
            title: "Caravaggio Read Wall Light",
            star: { active: ico_star_active, gray: ico_star_gray },
            price: 60000,
            in_stock: true,
            href: "product-detail.html",
            point: 5,
            saleOf:30,
        },

    ]
    return (
        <section className="mt-9 lg:mt-24 pt-16 pb-8 bg-gray">
            <div className="container">
                <div className="lg:flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-bold">Bestseller</h2>
                        <p className="mt-2 text-lightGray">Experience the best products at our store!</p>
                    </div>
                    <a href="#none"
                        className="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300">View
                        All</a>
                </div>

                <ul className="mt-8 lg:grid grid-cols-4 gap-7">
                    {
                        list_icon.map((item, index) => <ProductItem dataBetsSeller={item} index={index} key={index} />)
                    }
                </ul>
            </div>
        </section>
    )
}

export default Bestseller
