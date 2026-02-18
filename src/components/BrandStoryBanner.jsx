import React, { useEffect, useState, useRef } from 'react';

const BrandStoryBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden bg-black"
        >
            <div className="relative aspect-[4/5] md:aspect-auto md:h-[600px] lg:h-[500px] w-full overflow-hidden">
                {/* Background Image with Scale Animation */}
                <picture>
                    <source
                        media="(max-width: 699px)"
                        srcSet="//prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Mobile_-_the_dino.jpg?v=1676561333&width=1000"
                    />
                    <img
                        src="//prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=2500"
                        alt="Léo et Violette Brand Story"
                        className={`w-full h-full object-cover transition-all duration-[1500ms] ease-out ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                            }`}
                    />
                </picture>

                {/* Dark Overlay (0.3 opacity as per reference) */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <div
                        className={`max-w-[400px] md:max-w-[600px] transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                    >
                        <p className="text-[6px] md:text-[9px] uppercase tracking-[0.4em] font-light text-white/90 mb-2 md:mb-6">
                            The couple
                        </p>
                        <h2 className="text-[20px] md:text-[42px] lg:text-[36px] uppercase tracking-[0.2em] font-light text-white mb-4 md:mb-8 leading-tight">
                            Léo et violette
                        </h2>
                        <div className="text-[11px] md:text-[12px] font-extralight text-white/95 leading-relaxed tracking-wide space-y-2">
                            <p>We aspire to be a brand of the 21st century: 100% online and without any intermediary.</p>
                            <p>From you to us directly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandStoryBanner;
