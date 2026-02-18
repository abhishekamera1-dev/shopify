import React, { useEffect, useState, useRef } from 'react';

const Newsletter = () => {
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
                {/* Background Image */}
                <picture>
                    <source
                        media="(max-width: 699px)"
                        srcSet="//prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Mobile_-_faq_32978f71-3bdd-4469-8cff-1a459ccbfcd7.jpg?v=1679563459&width=800"
                    />
                    <img
                        src="//prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Desktop_-_faq_419bf819-c69b-4147-923f-20d9554b4072.jpg?v=1679563449&width=2500"
                        alt="Newsletter Background"
                        className={`w-full h-full object-cover transition-all duration-[1500ms] ease-out ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                            }`}
                    />
                </picture>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6  md:pt-4">
                    <div
                        className={`max-w-[1200px] transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                    >
                        <p className="text-[9px] md:text-[12px] uppercase tracking-[0.2em] font-light text-white/90 mb-6 md:mb-5">
                            Keep me updated
                        </p>
                        <h2 className=" uppercase tracking-[0.2em] font-light text-white mb-10 md:mb-5 lg:text-[28px]">
                            Newsletter
                        </h2>
                        <p className="text-[14px] md:text-[13px] font-extralight text-white/95 leading-relaxed tracking-wide mb-7 max-w-[550px] mx-auto">
                            Subscribe to get notified about product launches, special offers and company news.
                        </p>

                        <form className="w-full max-w-[1200px] mx-auto">
                            <div className="flex flex-col md:flex-row gap-4 md:gap-4 items-stretch">
                                <div className="flex-1 border border-white/60 bg-transparent">
                                    <input
                                        type="email"
                                        placeholder="E-mail"
                                        className="w-full bg-transparent text-white px-6 py-4 md:py-4 outline-none placeholder:text-white/40 text-[11px] tracking-[0.2em] font-light"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn-hover-white px-12 py-4 text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-light whitespace-nowrap"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
