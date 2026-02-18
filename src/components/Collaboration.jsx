import React from 'react';

const Collaboration = () => {
    return (
        <section className="py-16 md:py-24 bg-[#EFEFEF]">
            <div className="container mx-auto px-0 md:px-16 lg:px-32 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-[375px_1fr] gap-12 lg:gap-32 items-center">
                    {/* Left: Content */}
                    <div className="prose max-w-none order-2 lg:order-1 px-6 md:px-0">
                        <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-normal text-[#1c1c1c]/60 mb-4">
                            Collaboration
                        </p>
                        <h3 className="text-xl md:text-2xl uppercase tracking-[0.1em] font-light text-[#1c1c1c] mb-6 leading-tight">
                            Léo et Violette x Wendy Swan
                        </h3>
                        <p className="text-[13px] md:text-sm leading-relaxed font-light text-[#1c1c1c]/70 mb-8">
                            Dalia was born from the encounter between Wendy and Léo et Violette. Wendy's minimalist and elegant universe corresponds perfectly to the spirit of Léo et Violette.
                        </p>
                        <div>
                            <a
                                href="/pages/collaboration"
                                className="inline-block btn-hover-dark px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-medium"
                            >
                                Discover
                            </a>
                        </div>
                    </div>

                    {/* Right: Multi-Image Grid with Overlap */}
                    <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end w-full">
                        <div className="flex flex-row-reverse md:flex-row items-end justify-center lg:justify-end w-full">
                            {/* Small Image (Full Body) - Overlapping */}
                            <div className="relative w-[48vw] md:w-[240px] lg:w-[280px] aspect-[2/3] z-20">
                                <img
                                    src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Multiple_media_with_text_-_Portrait_-_home_2.jpg?v=1680770198&width=1000"
                                    alt="Collaboration - Full Body"
                                    className="w-full h-full object-cover shadow-lg"
                                    loading="lazy"
                                />
                            </div>

                            {/* Large Image (Close Up) - Underneath and Offset Upwards */}
                            <div className="relative w-[58vw] md:w-[320px] lg:w-[380px] aspect-[2/3] -mr-12 md:mr-0 md:-ml-20 lg:-ml-24 mb-10 md:mb-20 lg:mb-24 z-10">
                                <img
                                    src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Multiple_media_with_text_-_Portrait_-_home_1.jpg?v=1680770183&width=1000"
                                    alt="Collaboration - Close Up"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collaboration;
