import React from 'react'
import ico_freeship from '../../assets/images/ico_freeship.svg'
import ico_quality from '../../assets/images/ico_quality.svg'
import ico_return from '../../assets/images/ico_return.svg'
import ico_support from '../../assets/images/ico_support.svg'
import ServiceItem from './items/ServiceItem'
const Services = () => {
    const listService = [
        { title: "Free Shipping Over $50", image: ico_freeship },
        { title: "Quality Assurance", image: ico_quality },
        { title: "Return within 14 days", image: ico_return },
        { title: "Support 24/7", image: ico_support },
    ]
    return (
        <section className="bg-gray">
            <div className="container">
                <ul className="grid grid-cols-2 lg:grid-cols-4 gap-5 items-center py-14">
                    {
                        listService.map((item, index) => <ServiceItem dataService={item} key={index} />)
                    }
                </ul>
            </div>
        </section>
    )
}

export default Services
