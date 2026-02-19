import React, { useState, useEffect, useRef } from 'react';

const FeaturedProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [yOffset, setYOffset] = useState(100);
    const sectionRef = useRef(null);

    const images = [
        "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Continental-Sienne-01_623cec76-7c79-4a8f-a90b-bdda4bb26bd2.jpg?v=1676887549&width=1500",
        "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Continental-Sienne-02_22af43f0-bf6f-4310-8542-5b1036527fe4.jpg?v=1676887549&width=1500",
        "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Continental-Sienne-03_e5720073-449c-413b-8d91-d3efe015b622.jpg?v=1676887549&width=1500",
        "https://prestige-theme-allure.myshopify.com/cdn/shop/products/CROPFICHEPRODUIT_e0904a12-0fa0-4a9b-997a-22b8f5728191.jpg?v=1676887549&width=1200",
        "https://prestige-theme-allure.myshopify.com/cdn/shop/products/CROPFICHEPRODUIT2_0b1fed55-cf21-4831-ae13-5c49cc621391.jpg?v=1676887549&width=1200"
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const scrollStart = viewportHeight;
            const scrollEnd = viewportHeight * 0.2;

            const currentPos = rect.top;
            let progress = (scrollStart - currentPos) / (scrollStart - scrollEnd);
            progress = Math.min(Math.max(progress, 0), 1);

            setYOffset(100 * (1 - progress));
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#EFEFEF] py-16 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <p className="text-[12px] uppercase tracking-[0.3em] font-light text-[#1c1c1c] mb-3">
                        Our selection
                    </p>
                    <h2 className="text-[28px] md:text-[28px] uppercase tracking-[0.2em] font-light text-[#1c1c1c]">
                        Product of the week
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
                    {/* Left: Paginated Image Gallery with Parallax Reveal */}
                    <div
                        className="w-full md:w-[55%] flex flex-col items-center will-change-transform"
                        style={{ transform: `translateY(${yOffset}px)` }}
                    >
                        <div className="relative w-full aspect-square overflow-hidden bg-transparent">
                            <div
                                className="flex transition-transform duration-700 ease-in-out h-full"
                                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                            >
                                {images.map((src, index) => (
                                    <div key={index} className="w-full h-full flex-shrink-0">
                                        <img
                                            src={src}
                                            alt={`Product detail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex gap-3.5 mt-10">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${currentImageIndex === index ? 'bg-[#1c1c1c] scale-125' : 'bg-[#1c1c1c]/15'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="w-full md:w-[45%] md:sticky md:top-28">
                        <div className="space-y-6">
                            {/* Badge & Title */}
                            <div className="space-y-5">
                                <div className="flex items-center">
                                    <span className="inline-block py-1 text-[10px] uppercase tracking-[0.2em] font-extralight text-[#1c1c1c]">
                                        New
                                    </span>
                                </div>
                                <h3 className="text-[24px] md:text-[20px] uppercase tracking-[0.2em] font-light text-[#1c1c1c] leading-tight">
                                    Le Continental Camel Liégé
                                </h3>
                                <p className="text-[18px] font-extralight text-[#1c1c1c]/80 tracking-[0.05em]">
                                    $200.00
                                </p>
                            </div>

                            <hr className="border-[#1c1c1c]/5" />

                            {/* Description */}
                            <p className="text-[12px] leading-relaxed font-light text-[#1c1c1c]/90 max-w-md">
                                Continental wallet in calfskin. Inside zip pocket for coins. 2 flat pockets for checks or bills. Leather lining. Heat embossed logo.
                            </p>

                            {/* Color Selection */}
                            <div className="space-y-5">
                                <p className="text-[12px] tracking-[0.1em] font-light text-[#1c1c1c]/80">
                                    Color: <span className="font-normal tracking-normal">Camel Liégé</span>
                                </p>
                                <div className="flex gap-4">
                                    {/* <div className="w-9 h-9 bg-[#a67c52] border border-black/5 cursor-pointer ring-1 ring-offset-4 ring-transparent hover:ring-black/10 transition-all active:scale-95" /> */}
                                    <div className="p-[3px] border border-black cursor-pointer">
                                        <div className="w-9 h-9 bg-[#965931] border border-black/10"></div>
                                    </div>


                                </div>
                            </div>

                            {/* Quantity Selector */}
                            <div className="space-y-5">
                                <div className="flex items-center w-fit border border-[#1c1c1c]/10 bg-white">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-6 py-4 hover:bg-gray-50 transition-colors"
                                    >
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                            <path d="M0 6h12" stroke="currentColor" strokeWidth="1" />
                                        </svg>
                                    </button>
                                    <span className="w-12 text-center text-[13px] font-light">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-6 py-4 hover:bg-gray-50 transition-colors"
                                    >
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                            <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Add to Cart Button */}
                            <button className="w-full btn-hover-dark h-[40px] text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-light shadow-sm active:translate-y-[1px]">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProduct;
