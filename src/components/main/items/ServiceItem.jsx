import React from 'react'
const ServiceItem = (props) => {
    const { title, image } = props.dataService;
    return (
        <div>
            <li className="flex items-center lg:justify-center lg:flex-1 gap-[15px]">
                <img src={image} alt="" />
                <span className="text-sm lg:text-base font-semibold">{title}</span>
            </li>
        </div>
    )
}

export default ServiceItem
