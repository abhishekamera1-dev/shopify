import React, { useEffect, useState, useRef } from 'react';

const socialImages = [
    "//prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image1.jpg?v=1676464474&width=1400",
    "//prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image2.jpg?v=1676464493&width=1400",
    "//prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image3.jpg?v=1676464510&width=1400",
    "//prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image4.jpg?v=1676464532&width=1400",
    "//prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image5.jpg?v=1676464543&width=1400"
];

const services = [
    {
        icon: (
            <svg className="w-8 h-8 text-[#1c1c1c]/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M21 8V21H3V8" />
                <path d="M1 3H23V8H1V3Z" />
                <path d="M10 12H14" />
            </svg>
        ),
        title: "Express Delivery",
        description: "DHL express delivery worldwide"
    },
    {
        icon: (
            <svg className="w-8 h-8 text-[#1c1c1c]/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        title: "Free Returns",
        description: "Free return for 30 days for any order delivered in France"
    },
    {
        icon: (
            <svg className="w-8 h-8 text-[#1c1c1c]/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
        title: "Available Customer Service",
        description: "Available via Whatsapp on +33123456789"
    },
    {
        icon: (
            <svg className="w-8 h-8 text-[#1c1c1c]/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10h20" />
            </svg>
        ),
        title: "Payment in 3x",
        description: "Take advantage of a payment in 3x without fees from $100 of purchase"
    }
];

const SocialSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);
    const servicesRef = useRef(null);

    const handleScroll = () => {
        if (!servicesRef.current) return;
        const scrollLeft = servicesRef.current.scrollLeft;
        const width = servicesRef.current.offsetWidth;
        const index = Math.round(scrollLeft / width);
        setActiveIndex(index);
    };

    const scrollToIndex = (index) => {
        if (!servicesRef.current) return;
        servicesRef.current.scrollTo({
            left: servicesRef.current.offsetWidth * index,
            behavior: "smooth"
        });
    };

    return (
        <section ref={sectionRef} className="bg-[#f3f3f3] py-16 md:py-20 overflow-hidden">
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[1600px]">

                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-[10px] uppercase tracking-[0.25em] font-normal text-[#1c1c1c]/80 mb-4">
                        Join us
                    </p>
                    <h2 className="text-[24px] md:text-[32px] uppercase tracking-[0.2em] font-light text-[#1c1c1c]">
                        @leoetviolette
                    </h2>
                </div>

                {/* SOCIAL IMAGES */}
                <div className="
                    flex md:grid
                    md:grid-cols-5
                    gap-4 md:gap-6 lg:gap-8
                    overflow-x-auto md:overflow-visible
                    snap-x snap-mandatory
                    scrollbar-hide
                    mb-10 md:mb-20
                ">
                    {socialImages.map((image, index) => (
                        <div
                            key={index}
                            className="
                                shrink-0
                                w-[70%] sm:w-[45%]
                                md:w-auto
                                aspect-square
                                snap-start
                                overflow-hidden
                                bg-white
                            "
                        >
                            <img
                                src={image}
                                alt={`Social feed ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* SERVICES */}
                <div className="max-w-[1400px] mx-auto">

                    <div
                        ref={servicesRef}
                        onScroll={handleScroll}
                        className="
                            flex md:grid
                            md:grid-cols-2 lg:grid-cols-4
                            overflow-x-auto md:overflow-visible
                            snap-x snap-mandatory
                            scrollbar-hide
                        "
                    >
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="
                                    w-full shrink-0
                                    md:w-auto
                                    snap-start
                                    flex flex-col items-center text-center
                                    px-6 md:px-0
                                "
                            >
                                <div className="mb-6 text-[#1c1c1c]/80">
                                    {service.icon}
                                </div>

                                <h3 className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-light text-[#1c1c1c] mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-[11px] md:text-[12px] font-normal leading-relaxed text-[#1c1c1c]/80 max-w-[260px]">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Pagination (Mobile Only) */}
                    <div className="flex justify-center gap-3 mt-8 md:hidden">
                        {services.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === index
                                    ? "bg-[#1c1c1c]"
                                    : "bg-[#1c1c1c]/30"
                                    }`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SocialSection;
