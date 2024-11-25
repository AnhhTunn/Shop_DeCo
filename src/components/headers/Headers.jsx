import React from 'react'
import logo from '../../assets/images/logo.webp'
import ico_search from '../../assets/images/ico_search.png'
import ico_user from '../../assets/images/ico_user.png'
import ico_heart from '../../assets/images/ico_heart.png'
import ico_bag from '../../assets/images/ico_bag.png'
import Menu from './Menu'


const Headers = () => {
    return (
        <header className="py-5 lg:py-8 sticky top-0 z-10 bg-white shadow-lg">
            <div className="container flex items-center">
                <h1 className="flex-shrink-0 mr-5">
                    <a className="block max-w-[130px]" href="index.html"><img className="max-w-full" src={logo} alt="Darion" /></a>
                </h1>

                <div className="relative ml-auto lg:mr-20 max-w-[500px] w-full hidden xl:block">
                    <input type="text" placeholder="Search..." className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span><img className="size-5" src={ico_search} alt="" /></span>
                    </div>
                </div>

                <Menu />

                <div className="flex items-center gap-6 ml-auto lg:ml-0 shrink-0">
                    <a href="#none" className="lg:hidden"><img className="size-5" src={ico_search} alt="" /></a>
                    <a href="login.html"><img className="size-5" src={ico_user} alt="" /></a>
                    <a href="#none" className="relative">
                        <span className="absolute -top-[8px] -right-[10px] size-[18px] bg-black text-white rounded-full text-xs grid place-items-center">10</span>
                        <img className="size-5" src={ico_heart} alt="" />
                    </a>
                    <a href="shopping-cart.html" className="relative">
                        <span className="absolute -top-[8px] -right-[10px] size-[18px] bg-black text-white rounded-full text-xs grid place-items-center">3</span>
                        <img className="size-5" src={ico_bag} alt="" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Headers
