import { useState, useEffect } from 'react';

const Herosection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            type: 'video',
            src: 'https://prestige-theme-allure.myshopify.com/cdn/shop/videos/c/vp/a9ea64c362124ba0b6ffc37ea30bc5c8/a9ea64c362124ba0b6ffc37ea30bc5c8.HD-1080p-4.8Mbps-13664080.mp4?v=0',
            poster: 'https://prestige-theme-allure.myshopify.com/cdn/shop/files/preview_images/a9ea64c362124ba0b6ffc37ea30bc5c8.thumbnail.0000000000_400x.jpg?v=1680852367',
            subtitle: 'NEW COLLECTION',
            title: 'BEAUTIES',
            actions: [
                { text: 'WOMEN', link: '#' },
                { text: 'MEN', link: '#' }
            ]
        },
        {
            type: 'image',
            src: '/Slideshow_-_Desktop_-_home.jpg',
            subtitle: 'LE SAC BAGUETTE',
            title: 'INSPIRED BY THE 90S',
            actions: [
                { text: 'SHOP NOW', link: '#' }
            ]
        },
        {
            type: 'image',
            src: '/hero 2.webp',
            subtitle: 'LE NOVA',
            title: 'ELEGANT & TIMELESS',
            bordered: true,
            actions: [
                { text: 'VIEW COLLECTION', link: '#' }
            ]
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="relative w-full h-screen bg-black">
            <div className="absolute inset-0 overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] ${index === currentSlide ? 'opacity-100 visible' : 'opacity-0 invisible'
                            }`}
                    >
                        {/* Background */}
                        <div className="absolute inset-0 z-0">
                            {slide.type === 'video' ? (
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster={slide.poster}
                                >
                                    <source src={slide.src} type="video/mp4" />
                                </video>
                            ) : (
                                <img src={slide.src} alt={slide.title} className="w-full h-full object-cover" />
                            )}
                            <div className="absolute inset-0 bg-black/20 z-10"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-20 w-full max-w-[1200px] px-10 text-center text-white">
                            <div
                                className={`inline-flex flex-col items-center max-w-md mx-auto transition-transform duration-700 ease-[cubic-bezier(0.215,0.61,0.355,1)] ${index === currentSlide ? 'translate-y-0' : 'translate-y-5'
                                    } ${slide.bordered ? 'border border-white py-4 px-4 md:py-10 md:px-14' : ''}`}
                            >
                                <span className="text-[9px] tracking-[0.3em] uppercase mb-3 md:mb-5 block font-medium opacity-90">
                                    {slide.subtitle}
                                </span>
                                <h2 className="text-[20px] md:text-[32px] tracking-[0.18em] uppercase mb-6 md:mb-10 font-normal leading-tight whitespace-pre-line text-center">
                                    {slide.title}
                                </h2>
                                <div className="flex gap-3 md:gap-4 justify-center w-full">
                                    {slide.actions.map((action, i) => (
                                        <a
                                            key={i}
                                            href={action.link}
                                            className={`inline-block px-5 py-2 md:px-8 md:py-3 text-[10px] tracking-[0.2em] uppercase font-medium min-w-[150px] md:min-w-[170px] text-center ${action.text === 'MEN' ? 'btn-hover-black-hero' : 'btn-hover-white'
                                                }`}
                                        >
                                            {action.text}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-10 right-6 md:right-12 flex gap-4 z-30">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-1 h-1 rounded-full transition-all duration-300 p-0 cursor-pointer ${index === currentSlide ? 'bg-white scale-150' : 'bg-white/40 hover:bg-white/70'
                            }`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-40">
                <button
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors group"
                    onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                >
                    <svg
                        className="w-5 h-5 text-black group-hover:translate-y-0.5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Herosection;