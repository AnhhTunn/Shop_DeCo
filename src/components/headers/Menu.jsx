import React from 'react'
import Menuitem from './items/Menuitem'

const Menu = () => {
    const listMenu = [
        { href: "index.html", title: "Home" },
        { href: "product-list.html", title: "Shop" },
        { href: "#none", title: "Product" },
        { href: "#none", title: "Blog" },
        { href: "#none", title: "Fetured" },

    ]
    return (
        <div>
            <nav className="mr-28 hidden lg:block ml-auto">
                <ul className="flex items-center gap-10">
                    {
                        listMenu.map((item, index) => <Menuitem dataMenu={item} key={index} />)
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Menu
