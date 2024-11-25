import React from 'react'
import img_category from '../../assets/images/img_category.webp'
import img_category2 from '../../assets/images/img_category2.webp'
import img_category3 from '../../assets/images/img_category3.webp'
import img_category4 from '../../assets/images/img_category4.webp'
import OutCategoriesItem from './items/OutCategoriesItem'
const OutCategories = () => {
    const list_out = [
        { href: "#none", image: img_category, title: "Bathroom" },
        { href: "#none", image: img_category2, title: "Chair" },
        { href: "#none", image: img_category3, title: "Decor" },
        { href: "#none", image: img_category4, title: "Lamp" },
    ]
    return (
        <section className="mt-9 lg:mt-24">
            <div className="container">
                <h2 className="text-3xl font-bold text-center">Our Categories</h2>
                <ul className="md:grid grid-cols-4 gap-10 mt-11">
                    {
                        list_out.map((item, index) => <OutCategoriesItem dataOutCate={item} index={index} key={index} />)
                    }
                </ul>
            </div>
        </section>
    )
}

export default OutCategories

