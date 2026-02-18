import React from 'react'

const Midbanner = () => {
    return (
        <section className="relative w-full h-[500px] md:h-[500px] overflow-hidden group bg-[#EFEFEF]">
            {/* Background Image with slight scale effect on hover/scroll */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Desktop_-_home.jpg?v=1680765088&width=2500"
                    alt="New Product - Le Backpack"
                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                    loading="lazy"
                />
                {/* Subtle overlay for text readability */}
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Content Overlay - Centered on mobile, cornered on desktop */}
            <div className="absolute inset-0 z-10 p-6 md:p-8 flex flex-col justify-center items-center md:justify-end md:items-start md:pl-8 md:pb-8">
                <div className="text-center md:text-left text-white max-w-xl animate-in fade-in slide-in-from-bottom-5 duration-1000">
                    <p className="text-[12px] md:text-[13px] tracking-[0.2em] uppercase font-medium mb-3 md:mb-4">
                        New product
                    </p>
                    <h2 className="text-[28px] md:text-[36px] tracking-[0.15em] uppercase font-normal mb-6 md:mb-4 leading-tight">
                        Le Backpack
                    </h2>
                    <a
                        href="#"
                        className="inline-block px-10 py-3.5 md:px-8 md:py-3 btn-hover-white text-[13px] tracking-[0.18em] uppercase font-medium"
                    >
                        Shop
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Midbanner