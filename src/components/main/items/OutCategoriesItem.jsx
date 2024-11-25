import React from 'react'

const OutCategoriesItem = ({ dataOutCate, index }) => {
    const { href, image, title } = dataOutCate
    return (
        <li className="mt-6 md:mt-0">
            <a href={href}>
                <div className="rounded-lg overflow-hidden">
                    <img className="image" src={image} alt="" />
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
            </a>
        </li>
    )
}

export default OutCategoriesItem
