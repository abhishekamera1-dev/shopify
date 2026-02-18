import React from 'react'

const WeekendCollection = () => {
    const products = [
        {
            id: 1,
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Noir-01_2c0fb581-2bd2-453e-a305-161fbfb97621.jpg?v=1676887330&width=800",
            title: "Le Compact Weekender Buffalo Black",
            price: "$470.00",
            badge: ""
        },
        {
            id: 2,
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-01_30f52b96-4635-4e78-a3aa-cfc6d4cfbc42.jpg?v=1676887357&width=800",
            title: "Le Compact Weekender Black Pebbled Leather",
            price: "$470.00",
            badge: "Best seller"
        },
        {
            id: 3,
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Bleu-01_3ce2f9ae-8483-4136-9cf1-1c5bcb832718.jpg?v=1676887344&width=800",
            title: "Le Compact Weekender Blue Pebbled Leather",
            price: "$470.00",
            badge: ""
        },
        {
            id: 4,
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Brun-01_4f3c8d5a-25d3-4b3c-b5cf-f587983da039.jpg?v=1676887315&width=800",
            title: "Le Compact Weekender Buffalo Brown",
            price: "$470.00",
            badge: ""
        }
    ];

    return (
        <section className="bg-[#EFEFEF] text-[#1c1c1c] w-full pb-20 md:pb-28">
            <div className="max-w-[1600px] mx-auto">

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-5 pb-16 md:pb-24 px-6">
                    <p className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#1c1c1c]/60">
                        Le weekend bag
                    </p>
                    <h2 className="text-[26px] md:text-[34px] uppercase tracking-[0.22em] font-light text-[#1c1c1c] leading-tight">
                        Ideal for a weekend outing
                    </h2>
                </div>

                {/* PRODUCT CONTAINER */}
                <div className="
                    flex overflow-x-auto md:grid 
                    md:grid-cols-4 
                    gap-x-12 md:gap-x-16 lg:gap-x-24
                    snap-x snap-mandatory 
                    scrollbar-hide 
                    px-6 md:px-12 lg:px-20
                ">

                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="
                                min-w-[160px] w-[45vw]
                                md:min-w-0 md:w-full
                                flex-shrink-0
                                flex flex-col items-center text-center
                                snap-start
                            "
                        >

                            {/* Badge (Desktop centered above image) - Fixed height for perfect image alignment */}
                            <div className="hidden md:flex items-center justify-center h-[14px] mb-8">
                                {product.badge ? (
                                    <span className="text-[11px] uppercase tracking-[0.3em] text-[#1c1c1c]/60">
                                        {product.badge}
                                    </span>
                                ) : null}
                            </div>

                            {/* Image */}
                            <div className="relative w-full max-w-[260px] md:max-w-[300px] lg:max-w-[320px] aspect-[1/0.9] overflow-hidden mb-8 md:mb-10">

                                {/* Mobile Badge (top right only on small screens) */}
                                {product.badge && (
                                    <div className="absolute top-0 right-0 p-3 md:hidden">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#1c1c1c]/60">
                                            {product.badge}
                                        </span>
                                    </div>
                                )}

                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-contain transition-transform duration-700 ease-out hover:scale-105"
                                />

                                {/* Quick Add */}
                                <div className="absolute bottom-0 right-0 p-4">
                                    <button className="w-8 h-8 md:w-10 md:h-10 shadow-sm flex items-center justify-center btn-hover-white">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex flex-col gap-2 items-center px-4">
                                <h3 className="text-[12px] uppercase tracking-[0.18em] font-light leading-relaxed text-[#1c1c1c] max-w-[260px]">
                                    {product.title}
                                </h3>
                                <p className="text-[12px] font-light text-[#1c1c1c]/50 tracking-[0.15em]">
                                    {product.price}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default WeekendCollection;
