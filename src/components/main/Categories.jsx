import React from 'react'
import img_collection from '../../assets/images/img_collection.webp'
import img_collection2 from '../../assets/images/img_collection2.webp'
import img_collection3 from '../../assets/images/img_collection3.webp'
import CategoriesItem from './items/CategoriesItem'
const Categories = () => {
    const list_Collection = [
        { image: img_collection, href: "#none", title: "Living Room" },
        { image: img_collection2, href: "#none", title: "Lamp" },
        { image: img_collection3, href: "#none", title: "Deco" }
    ]
    return (
        <section className="mt-8 lg:mt-24">
            <div className="container">
                <div className="lg:flex justify-between items-center">
                    <h2 className="text-3xl font-bold">Our Categories</h2>
                    <a href="#none" className="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300">View All</a>
                </div>
                <ul className="mt-10 md:grid grid-cols-3 gap-10 cursor-pointer">
                    {
                        list_Collection.map((item, index) => <CategoriesItem dataCate={item} index={index} key={index} />)
                    }
                </ul>
            </div>
        </section>
    
    )
}

export default Categories