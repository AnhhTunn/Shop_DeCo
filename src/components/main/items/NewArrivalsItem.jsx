import React from 'react'

const NewArrivalsItem = ({ dataNewArr }) => {
    const { href, in_stock, icons: { heart, reload, search }, image, star: { active, gray }, title, price, saleOf, point } = dataNewArr;
    const calPriceSale = price - ((price * saleOf) / 100);
    const formatPrice = price.toLocaleString('vi-VN');
    const formatPriceSale = calPriceSale.toLocaleString('vi-VN')

    const checkSaleOf = []
    for (let i = 1; i <= 100; i++) {
        checkSaleOf.push(i)
    }

    const check_InStock = !in_stock ? (
        <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-black text-white rounded-xl">Out of stock</span>
    ) : null;

    const saleOfItem = checkSaleOf.includes(saleOf) ? (
        <span className="absolute py-1 text-xs px-2 top-3 right-3 bg-red-600 text-white rounded-xl">-{saleOf}%</span>
    ) : null;

    const priceSaleItem = checkSaleOf.includes(saleOf) ?
        (
            <>
                <span className="line-through text-lightGray mr-1">{formatPrice}$</span>{' - '}
                <span className="text-red-600 ml-1">{formatPriceSale}$</span>
            </>
        ) : (<span >{formatPrice}$</span>)

    const star = [];
    for (let i = 0; i < 5; i++) {
        star.push(
            <img key={i} className="size-13 inline-block" src={i < point ? active : gray} alt=""></img>
        )
    }

    const starItem = star
    return (
        <li className="mt-6 md:mt-0 text-center group relative">
            <a href={href}>
                {check_InStock}
                {saleOfItem}
                <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                    <li
                        className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button type="button"
                            className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all">
                            <img src={heart} className="image size-4 rouded-full" alt="" />
                        </button>
                    </li>
                    <li
                        className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button type="button"
                            className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all">
                            <img src={reload} className="image size-4 rouded-full" alt="" />
                        </button>
                    </li>
                    <li
                        className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button type="button"
                            className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all">
                            <img src={search} className="image size-4 rouded-full" alt="" />
                        </button>
                    </li>
                </ul>

                <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                    <img className={!in_stock ? "block size-full object-cover opacity-50 rounded-lg" : "block size-full object-cover"} src={image} alt="" />
                </div>
                <div className="flex justify-center items-center gap-1 mt-5">
                    {starItem}
                </div>
                <h3 className="text-15 mt-2">{title}</h3>
            </a>
            <div className="mt-2 relative h-5 overflow-hidden"><a href="product-detail.html">
            </a>
                <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                    <a href="product-detail.html">
                        <div className="flex items-center justify-center font-bold text-15 text-center">
                            {priceSaleItem}
                        </div>
                    </a><a href="#none"
                        className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500">Add
                        to cart</a>
                </div>
            </div>

        </li>
    )
}

export default NewArrivalsItem
