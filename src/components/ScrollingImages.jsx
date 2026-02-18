import React, { useEffect, useRef, useState } from 'react';

const ScrollingImages = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemRefs = useRef([]);

    const items = [
        {
            number: "#1",
            title: "The Design",
            text: "At Léo et Violette, we create our bags with you in mind. All our products are imagined and designed in Paris, in our offices on rue Sainte-Anne. Most of the time, an idea for a model comes from a need that you have expressed to us through the various feedbacks we collect throughout the year.",
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/files/Images_with_text_scroll_-_Image_-_home_1.jpg?v=1680774254&width=1000",
            linkText: "Learn more",
            linkUrl: "/pages/about-us"
        },
        {
            number: "#2",
            title: "Our commitments",
            text: "At Léo et Violette, from day one we have made responsibility part of our values. Towards you, and also towards the environment through the way we produce our collections. From design to distribution, we take the greatest care with our products, which reflect our values: timeless, quality, at the right price.",
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/files/Images_with_text_scroll_-_Image_-_home_2.jpg?v=1680774758&width=1000",
            linkText: "Learn more",
            linkUrl: "/pages/commitments"
        }
    ];

    useEffect(() => {
        const observers = itemRefs.current.map((ref, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveIndex(index);
                    }
                },
                {
                    threshold: 0.5,
                    rootMargin: "-25% 0px -25% 0px"
                }
            );

            if (ref) observer.observe(ref);
            return observer;
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, [items.length]);

    return (
        <section className="relative w-full">
            {/* Fixed Background Image */}
            <div
                className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: `url('https://prestige-theme-allure.myshopify.com/cdn/shop/files/Images_with_text_scroll_-_Background_image_-_Desktop_-_home.jpg?v=1680772698&width=3000')`
                }}
            />
            {/* Dark Overlay */}
            <div className="fixed inset-0 z-[-1] bg-black/30 bg-fixed" />

            <div className="container mx-auto px-0 md:px-12 lg:px-24">
                {/* Desktop: Sticky Layout */}
                <div className="hidden md:flex flex-row gap-0">
                    {/* Left: Sticky Image Side */}
                    <div className="w-1/2 h-[100vh] sticky top-0 flex items-center justify-center">
                        <div className="relative w-full max-w-[400px] aspect-[4/5] overflow-hidden shadow-2xl">
                            {items.map((item, index) => (
                                <img
                                    key={index}
                                    src={item.image}
                                    alt={item.title}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activeIndex === index ? 'opacity-100' : 'opacity-0'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Scrollable Text Side */}
                    <div className="w-1/2 flex flex-col">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                ref={el => itemRefs.current[index] = el}
                                className="h-[100vh] flex flex-col items-center justify-center p-12 lg:p-24"
                            >
                                <div className="max-w-md w-full text-center">
                                    <p className="text-[12px] tracking-[0.2em] uppercase font-extralight text-white/70 mb-5">
                                        {item.number}
                                    </p>
                                    <h3 className="text-[15px] md:text-[20px] lg:text-[25px] tracking-[0.1em] uppercase font-extralight text-white mb-8 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-[14px] md:text-[15px] leading-[1.7] font-extralight text-white/85 mb-10 max-w-sm mx-auto">
                                        {item.text}
                                    </p>
                                    <a
                                        href={item.linkUrl}
                                        className="text-[12px] tracking-[0.18em] uppercase font-extralight text-white border-b border-white/30 hover:border-white transition-all pb-1 duration-300"
                                    >
                                        {item.linkText}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile: Standard Layout - Refined with Pagination-Only Control */}
                <div className="md:hidden py-24 overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {items.map((item, index) => (
                            <div key={index} className="min-w-full flex-shrink-0 flex flex-col items-center">
                                <div className="w-full max-w-[320px] aspect-[4/5] overflow-hidden shadow-xl mb-12">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="text-center max-w-sm">
                                    <p className="text-[10px] tracking-[0.2em] uppercase font-medium text-white/70 mb-4">{item.number}</p>
                                    <h3 className="text-[20px] tracking-[0.2em] uppercase font-light text-white mb-6">{item.title}</h3>
                                    <p className="text-[14px] leading-relaxed text-white/80 mb-8 font-light px-4">{item.text}</p>
                                    <div className="mb-14">
                                        <a href={item.linkUrl} className="text-[12px] tracking-widest uppercase text-white border-b border-white/30 pb-1 duration-300 hover:border-white">{item.linkText}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots - Controlled Navigation */}
                    <div className="flex justify-center gap-4 mt-2">
                        {items.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-white scale-110' : 'bg-white/40'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScrollingImages;
