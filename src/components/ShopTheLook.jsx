import React, { useState } from 'react';

const ShopTheLook = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeHotspot, setActiveHotspot] = useState(0);

    const looks = [
        {
            id: 1,
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/files/Shop_the_look_-_mini_primo.jpg?v=1676554113&width=1200",
            hotspots: [
                { top: "35%", left: "24%" },
                { top: "51%", left: "67%" }
            ],
            products: [
                {
                    id: 1,
                    title: "Le Grand Nova Ivory Liégé",
                    price: "$450.00",
                    image: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Grand-Nova-Lisse-Ivoire-01_c5e43010-e4a3-4dac-97b1-5552659b9a73.jpg?v=1676886728&width=800",
                    secondaryImage: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Grand-Nova-Lisse-Ivoire-02_348ac141-50cb-4494-983f-723ee1be4298.jpg?v=1677153834&width=800",
                    badge: "Best seller"
                },
                {
                    id: 2,
                    title: "Le Primo Greige Pebbled Leather",
                    price: "$420.00",
                    image: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Primo-Graine-Grege-01_dd85fd19-44f2-4e1d-a4ac-9b62d571a7a0.jpg?v=1676886974&width=800",
                    secondaryImage: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Primo-Graine-Grege-02_e11e2930-e862-43d7-ac51-eaf3b7fc7526.jpg?v=1677144014&width=800",
                    badge: null
                }
            ]
        },
        {
            id: 2,
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/files/Shop_the_look_-_home_2.jpg?v=1680769235&width=1200",
            hotspots: [
                { top: "58%", left: "35%" },
                { top: "75%", left: "69%" }
            ],
            products: [
                {
                    id: 3,
                    title: "Le Slim Briefcase Khaki Pebbled Leather",
                    price: "$420.00",
                    image: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Petit-Graine-Kaki-01_7bfb103e-67af-4e25-8052-530433507a1e.jpg?v=1676887484&width=800",
                    secondaryImage: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Petit-Graine-Kaki-02_1fb09edf-841a-4ab8-b142-a09247ea38e6.jpg?v=1677260844&width=800",
                    badge: "New"
                },
                {
                    id: 4,
                    title: "Le Nova Petrol Liégé",
                    price: "$420.00",
                    image: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Nova-Vert-01_1_55241fb8-6ed6-41c7-9964-8d8f3ed9b886.jpg?v=1676886478&width=800",
                    secondaryImage: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Nova-Vert-02_1_bb71a3ae-dba4-4a37-a5ce-1d510e1acb86.jpg?v=1677078486&width=800",
                    badge: null
                }
            ]
        }
    ];

    const currentLook = looks[currentSlide];
    const currentProduct = currentLook.products[activeHotspot];

    return (
        <section className="py-16 md:py-24 bg-[#EFEFEF]">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-[#1c1c1c]/60 mb-3">
                        Shop
                    </p>
                    <h2 className="text-3xl md:text-4xl uppercase tracking-[0.05em] font-light text-[#1c1c1c]">
                        Our Looks
                    </h2>
                </div>

                {/* Desktop Layout with External Arrows */}
                <div className="hidden md:block relative">
                    {/* Left Arrow - Positioned outside with shadow */}
                    <button
                        onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                        disabled={currentSlide === 0}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 w-12 h-12 rounded-full bg-white border border-black/10 flex items-center justify-center hover:border-black/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10 shadow-md"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 18" fill="none">
                            <path d="M11 1 3 9l8 8" stroke="currentColor" strokeLinecap="square" />
                        </svg>
                    </button>

                    {/* Main Content Grid - Reduced gap */}
                    <div className="grid grid-cols-[1.4fr_1fr] gap-6 lg:gap-8 items-start max-w-5xl mx-auto">
                        {/* Left: Lifestyle Image with Hotspots (Larger) - Added top padding */}
                        <div className="relative aspect-square pt-8">
                            <img
                                src={currentLook.image}
                                alt="Shop the look"
                                className="w-full h-full object-cover"
                            />

                            {/* Smaller Hotspot Markers */}
                            {currentLook.hotspots.map((hotspot, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveHotspot(index)}
                                    className={`absolute w-8 h-8 rounded-full transition-all duration-500 hover:scale-110 group flex items-center justify-center ${activeHotspot === index
                                        ? 'bg-white/30 backdrop-blur-[4px] border border-white/60 shadow-[0_0_25px_rgba(255,255,255,0.3)] scale-110'
                                        : 'bg-white/20 backdrop-blur-[2px] border border-white/20'
                                        }`}
                                    style={{
                                        top: hotspot.top,
                                        left: hotspot.left,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                    aria-label={`View product ${index + 1}`}
                                >
                                    <span className="w-3 h-3 rounded-full bg-white shadow-sm transition-transform duration-300 group-hover:scale-110" />
                                </button>
                            ))}
                        </div>

                        {/* Right: Product Details - Refined to match reference */}
                        <div className="flex flex-col items-start w-full relative pt-8 h-full text-left">
                            {/* Badge - Fixed at the top left to match alignment with image top */}
                            <div className="mb-16 w-full text-left">
                                {currentProduct.badge && (
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-normal text-gray-400">
                                        {currentProduct.badge}
                                    </span>
                                )}
                            </div>

                            {/* Product Content - Positioned with top margin instead of center */}
                            <div className="w-full flex flex-col items-center mt-4">
                                {/* Product Image - More compact with padding */}
                                <div className="w-full max-w-[260px] mb-10">
                                    <div className="relative aspect-square overflow-hidden group">
                                        <img
                                            src={currentProduct.image}
                                            alt={currentProduct.title}
                                            className="w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                                        />
                                        <img
                                            src={currentProduct.secondaryImage}
                                            alt={currentProduct.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                                        />
                                    </div>
                                </div>

                                {/* Product Info - Tighter spacing */}
                                <div className="text-center mb-8">
                                    <h3 className="text-[11px] uppercase tracking-[0.15em] font-normal text-[#1c1c1c] mb-2 leading-relaxed">
                                        {currentProduct.title}
                                    </h3>
                                    <p className="text-[13px] text-[#1c1c1c]/60 font-light">
                                        {currentProduct.price}
                                    </p>
                                </div>

                                {/* View Product Button - Refined styling */}
                                <div className="mb-6">
                                    <button className="btn-hover-dark py-3 px-10 text-[10px] uppercase tracking-[0.2em] font-medium">
                                        View Product
                                    </button>
                                </div>

                                {/* Hotspot Navigation Dots */}
                                <div className="flex justify-center gap-2">
                                    {currentLook.products.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveHotspot(index)}
                                            className={`w-1.5 h-1.5 rounded-full transition-colors ${activeHotspot === index ? 'bg-black' : 'bg-black/25'
                                                }`}
                                            aria-label={`View product ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Arrow - Positioned outside with shadow */}
                    <button
                        onClick={() => setCurrentSlide(prev => Math.min(looks.length - 1, prev + 1))}
                        disabled={currentSlide === looks.length - 1}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 w-12 h-12 rounded-full bg-white border border-black/10 flex items-center justify-center hover:border-black/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10 shadow-md"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 18" fill="none">
                            <path d="m5 17 8-8-8-8" stroke="currentColor" strokeLinecap="square" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden space-y-8">
                    {/* Lifestyle Image with Hotspots */}
                    <div className="relative aspect-square">
                        <img
                            src={currentLook.image}
                            alt="Shop the look"
                            className="w-full h-full object-cover"
                        />

                        {/* Hotspot Markers */}
                        {currentLook.hotspots.map((hotspot, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveHotspot(index)}
                                className={`absolute w-8 h-8 rounded-full transition-all duration-500 hover:scale-110 group flex items-center justify-center ${activeHotspot === index
                                    ? 'bg-white/30 backdrop-blur-[4px] border border-white/60 shadow-[0_0_25px_rgba(255,255,255,0.3)] scale-110'
                                    : 'bg-white/20 backdrop-blur-[2px] border border-white/20'
                                    }`}
                                style={{
                                    top: hotspot.top,
                                    left: hotspot.left,
                                    transform: 'translate(-50%, -50%)'
                                }}
                            >
                                <span className="w-3 h-3 rounded-full bg-white shadow-sm transition-transform duration-300 group-hover:scale-110" />
                            </button>
                        ))}
                    </div>

                    {/* View Products Button */}
                    <button className="w-full btn-hover-dark py-4 px-8 text-[11px] uppercase tracking-[0.15em] font-medium">
                        View Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ShopTheLook;
