import React from 'react'

const Ouraimsection = () => {
    return (
        <section className="pt-16 pb-10 md:py-20 bg-[#EFEFEF]">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <div className="flex flex-col items-center gap-4">
                    {/* Line Art Image */}
                    <div className="w-full flex justify-center">
                        <img
                            src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/bag-240px.jpg?v=1683010834&width=240"
                            alt="Bag Icon"
                            className="w-[100px] md:w-[120px] h-auto object-contain opacity-90"
                            loading="lazy"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col items-center gap-8 md:gap-10">
                        <h2 className="text-[20px] md:text-[32px] tracking-[0.15em] uppercase font-light leading-relaxed text-[#1c1c1c] max-w-2xl px-4 md:px-0">
                            Our aim: offer elegant, timeless & functional products
                        </h2>

                        <div className="flex gap-8 md:gap-10 items-center">
                            <a
                                href="/pages/about-us"
                                className="text-[11px] md:text-[12px] tracking-[0.18em] uppercase font-light border-b border-black/30 hover:border-black transition-all duration-300 pb-0.5"
                            >
                                Our story
                            </a>
                            <a
                                href="/pages/commitments"
                                className="text-[11px] md:text-[12px] tracking-[0.18em] uppercase font-light border-b border-black/30 hover:border-black transition-all duration-300 pb-0.5"
                            >
                                Commitments
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ouraimsection