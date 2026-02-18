import React, { useState, useEffect, useRef } from 'react';

const CountdownSale = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Lock target date once (99 days from first load)
    const targetDate = useRef(
        new Date(Date.now() + 99 * 24 * 60 * 60 * 1000).getTime()
    );

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate.current - now;

            if (difference <= 0) {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            });
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num) => String(num).padStart(2, "0");
    return (
        <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <picture>
                    {/* Mobile Image */}
                    <source
                        media="(max-width: 699px)"
                        srcSet="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Mobile.jpg?v=1679410187&width=1000"
                    />
                    {/* Desktop Image */}
                    <img
                        src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=3200"
                        alt="Super Sale"
                        className="w-full h-full object-cover"
                    />
                </picture>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content Container */}
            <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center md:justify-between py-12 md:py-16 gap-12 md:gap-12">
                {/* Left: Promotional Content */}
                <div className="text-white max-w-xl flex flex-col items-center md:items-start text-center md:text-left gap-6">
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium">
                        Limited time only
                    </p>
                    <h2 className="text-xl md:text-2xl lg:text-4xl uppercase tracking-[0.2em] font-extralight leading-tight">
                        Super Sale Up to 40% off
                    </h2>
                    <p className="text-xs md:text-s leading-normal tracking-wider font-extralight text-white/90">
                        Shop our selection of exclusive handbags and backpacks at reduced price during the Super Sale. Hurry up!
                    </p>
                    <div>
                        <a
                            href="/collections/sale"
                            className="inline-block btn-hover-white px-10 py-3.5 text-[10px] uppercase tracking-[0.2em] font-medium"
                        >
                            Shop now
                        </a>
                    </div>
                </div>

                {/* Right: Countdown Timer */}
                <div className="flex items-center gap-2 md:gap-1">
                    {/* Days */}
                    <div className="flex flex-col items-center">
                        <div className="text-white text-2xl md:text-3xl lg:text-4xl font-light px-3 md:px-4 py-2 md:py-3 min-w-[50px] md:min-w-[75px] text-center">
                            {formatNumber(timeLeft.days)}
                        </div>
                        <span className="text-white text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-extralight mt-1">
                            Day
                        </span>
                    </div>

                    <span className="text-white text-xl md:text-3xl font-light">:</span>

                    {/* Hours */}
                    <div className="flex flex-col items-center">
                        <div className="text-white text-2xl md:text-3xl lg:text-4xl font-light px-3 md:px-4 py-2 md:py-3 min-w-[50px] md:min-w-[75px] text-center">
                            {formatNumber(timeLeft.hours)}
                        </div>
                        <span className="text-white text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-extralight mt-1">
                            Hours
                        </span>
                    </div>

                    <span className="text-white text-xl md:text-3xl font-light">:</span>

                    {/* Minutes */}
                    <div className="flex flex-col items-center">
                        <div className="text-white text-2xl md:text-3xl lg:text-4xl font-light px-3 md:px-4 py-2 md:py-3 min-w-[50px] md:min-w-[75px] text-center">
                            {formatNumber(timeLeft.minutes)}
                        </div>
                        <span className="text-white text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-extralight mt-1">
                            Min
                        </span>
                    </div>

                    <span className="text-white text-xl md:text-3xl font-light">:</span>

                    {/* Seconds */}
                    <div className="flex flex-col items-center">
                        <div className="text-white text-2xl md:text-3xl lg:text-4xl font-light px-3 md:px-4 py-2 md:py-3 min-w-[50px] md:min-w-[75px] text-center">
                            {formatNumber(timeLeft.seconds)}
                        </div>
                        <span className="text-white text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-extralight mt-1">
                            Sec
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CountdownSale;
