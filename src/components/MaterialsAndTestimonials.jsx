import React, { useState } from 'react';

const testimonials = [
    {
        quote: 'The GQ choice: "black or green, with its leather both flexible and rigid, small Binder protects your equipment in dedicated compartments"',
        logo: "//prestige-theme-allure.myshopify.com/cdn/shop/files/GQ_f8752956-3d3d-4641-b56b-11aa8f575ad0.png?v=1678198022&width=300",
        name: "GQ"
    },
    {
        quote: "Le Petit Violette redefined women elegancy. Its high quality leather and convenient interior make it perfect for an everyday usage!",
        logo: "//prestige-theme-allure.myshopify.com/cdn/shop/files/farfetch_918705ce-3e92-4233-b030-82a21ada45c6.png?v=1678198022&width=300",
        name: "Farfetch"
    },
    {
        quote: "Le Nouveau Cartable is perfectly sized, even holds my water bottle. And the leather just looks super rich and luxurious. Most awesome product I've tested!",
        logo: "//prestige-theme-allure.myshopify.com/cdn/shop/files/forbes_d342321b-285c-4e83-bd44-37953300a262.png?v=1678198021&width=300",
        name: "Forbes"
    }
];

const MaterialsAndTestimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="materials-testimonials-section">
            {/* Materials Section */}
            <section className="relative h-[400px] md:h-[300px] lg:h-[500px] overflow-hidden">
                <picture>
                    <source
                        media="(max-width: 699px)"
                        srcSet="//prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Mobile_-_leather.jpg?v=1677251340&width=1000"
                    />
                    <img
                        src="//prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Desktop_-_leather.jpg?v=1677251257&width=2500"
                        alt="Materials Leather Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </picture>

                {/* Overlay Box */}
                <div className="absolute inset-0 flex items-center justify-center p-6 bg-black/5">
                    <div className="bg-white px-8 py-8 md:px-10 md:py-10 text-center max-w-[280px] md:max-w-[340px] shadow-sm transform transition-all duration-700 hover:scale-[1.02]">
                        <p className="text-[12px] uppercase tracking-[0.4em] font-light text-[#1c1c1c] mb-6">
                            Materials
                        </p>
                        <p className="text-[10px] md:text-[12px] font-extralight text-[#1c1c1c] leading-relaxed mb-8">
                            We only work with the best leather, chosen in collaboration with our factory. Made in Italy.
                        </p>
                        <a
                            href="/pages/commitments"
                            className="text-[12px] tracking-[0.1em] font-extralight text-[#1c1c1c] border-b border-[#1c1c1c]/20 hover:border-[#1c1c1c] transition-all pb-1"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-[#1c1c1c] py-10 md:py-16">
                <div className="container mx-auto px-10 md:px-24 lg:px-80 max-w-7xl text-center">
                    {/* Active Testimonial Quote */}
                    <div className="min-h-[100px] md:min-h-[120px] flex items-center justify-center mb-16">
                        <div
                            key={activeIndex}
                            className="animate-in fade-in slide-in-from-bottom-2 duration-700"
                        >
                            <p className="text-[18px] md:text-[22px] font-light  text-white/90 leading-relaxed tracking-tight">
                                {testimonials[activeIndex].quote}
                            </p>
                        </div>
                    </div>

                    {/* Logo Navigation Grid */}
                    <div className="flex justify-center items-center gap-10 md:gap-20">
                        {testimonials.map((testimonial, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`transition-all duration-500 transform ${activeIndex === index
                                    ? 'opacity-100 scale-110'
                                    : 'opacity-30 grayscale scale-100 hover:opacity-60 hover:grayscale-0'
                                    }`}
                                aria-label={`View testimonial from ${testimonial.name}`}
                            >
                                <img
                                    src={testimonial.logo}
                                    alt={testimonial.name}
                                    className="h-6 md:h-10 w-auto object-contain brightness-0 invert"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MaterialsAndTestimonials;
