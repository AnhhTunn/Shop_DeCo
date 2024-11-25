import React from 'react'
import NewArrivalsItem from './items/NewArrivalsItem'
import ico_heart from '../../assets/images/ico_heart.png'
import ico_reload from '../../assets/images/ico_reload.png'
import ico_search from '../../assets/images/ico_search.png'
import img_product from '../../assets/images/img_product.webp'
import img_product2 from '../../assets/images/img_product2.webp'
import img_product3 from '../../assets/images/img_product3.webp'
import img_product4 from '../../assets/images/img_product4.webp'
import ico_star_active from '../../assets/images/ico_star_active.png'
import ico_star_gray from '../../assets/images/ico_star_gray.png'
const NewArrivals = () => {
    const list_NewArrivals = [
        {
            href: "product-detail.html",
            in_stock: false,
            icons: { heart: ico_heart, reload: ico_reload, search: ico_search },
            image: img_product,
            star: { active: ico_star_active, gray: ico_star_gray },
            title: "Egg Dining Table",
            price: 70000,
            saleOf: 10,
            point: 5,
        },
        {
            href: "product-detail.html",
            in_stock: true,
            icons: { heart: ico_heart, reload: ico_reload, search: ico_search },
            image: img_product2,
            star: { active: ico_star_active, gray: ico_star_gray },
            title: "Century Starburst Clock",
            price: 55000,
            saleOf: 0,
            point: 3,
        },
        {
            href: "product-detail.html",
            in_stock: true,
            icons: { heart: ico_heart, reload: ico_reload, search: ico_search },
            image: img_product3,
            star: { active: ico_star_active, gray: ico_star_gray },
            title: "Bouquet Flower Vase",
            price: 59000,
            saleOf: 18,
            point: 1,
        },
        {
            href: "product-detail.html",
            in_stock: true,
            icons: { heart: ico_heart, reload: ico_reload, search: ico_search },
            image: img_product4,
            star: { active: ico_star_active, gray: ico_star_gray },
            title: "Caravaggio Read Wall Light",
            price: 70000,
            saleOf: 40,
            point: 0,
        }
    ]
    return (
        <section className="pt-16 pb-8 bg-gray">
            <div className="container">
                <div className="lg:flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-bold">New Arrivals</h2>
                        <p className="mt-2 text-lightGray">Experience the best products at our store!</p>
                    </div>
                    <a href="#none"
                        className="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300">View
                        All</a>
                </div>
                <ul className="mt-8 lg:grid grid-cols-4 gap-7">
                    {
                        list_NewArrivals.map((item, index) => <NewArrivalsItem dataNewArr={item} key={index} />)
                    }
                </ul>
            </div>
        </section>
    )
}

export default NewArrivals
