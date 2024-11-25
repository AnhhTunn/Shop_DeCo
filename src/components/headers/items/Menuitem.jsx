import React from 'react'

const Menuitem = (menu) => {

    const { href, title } = menu.dataMenu;
    return (
        <div>
            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:w-full after:scale-x-0 hover:after:-scale-x-100">
                <a href={href}>{title}</a>
            </li>
        </div>
    )
}

export default Menuitem
