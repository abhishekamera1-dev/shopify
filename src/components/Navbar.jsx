import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const [selectedCurrency, setSelectedCurrency] = useState({
        code: 'USD $',
        country: 'United States',
        flag: 'https://flagcdn.com/w20/us.png'
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const currencies = [
        { name: 'Canada (CAD $)', code: 'CAD $', country: 'Canada', flag: 'https://flagcdn.com/w20/ca.png' },
        { name: 'France (EUR €)', code: 'EUR €', country: 'France', flag: 'https://flagcdn.com/w20/fr.png' },
        { name: 'Germany (EUR €)', code: 'EUR €', country: 'Germany', flag: 'https://flagcdn.com/w20/de.png' },
        { name: 'Hong Kong SAR (HKD $)', code: 'HKD $', country: 'Hong Kong', flag: 'https://flagcdn.com/w20/hk.png' },
        { name: 'Italy (EUR €)', code: 'EUR €', country: 'Italy', flag: 'https://flagcdn.com/w20/it.png' },
        { name: 'Japan (JPY ¥)', code: 'JPY ¥', country: 'Japan', flag: 'https://flagcdn.com/w20/jp.png' },
        { name: 'South Korea (KRW ₩)', code: 'KRW ₩', country: 'South Korea', flag: 'https://flagcdn.com/w20/kr.png' },
        { name: 'Spain (EUR €)', code: 'EUR €', country: 'Spain', flag: 'https://flagcdn.com/w20/es.png' },
        { name: 'United Kingdom (GBP £)', code: 'GBP £', country: 'United Kingdom', flag: 'https://flagcdn.com/w20/gb.png' },
        { name: 'United States (USD $)', code: 'USD $', country: 'United States', flag: 'https://flagcdn.com/w20/us.png' },
    ];

    const [bannerHeight, setBannerHeight] = useState(68);
    const isLight = !isScrolled && !isHovered;

    useEffect(() => {
        const updateHeight = () => {
            setBannerHeight(window.innerWidth < 768 ? 44 : 68);
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <nav
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`h-[75px] flex items-center justify-between px-6 md:px-12 font-sans uppercase fixed w-full z-50 transition-all duration-300 ${isLight ? 'bg-transparent text-white border-transparent' : 'bg-white text-black border-b border-gray-100 shadow-sm'
                }`}
            style={{ top: isScrolled ? '0' : `${bannerHeight}px` }}
        >
            {/* Left Column: Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
                <a href="#" className={`text-[12px] tracking-[0.18em] font-light transition-colors ${isLight ? 'hover:text-gray-300' : 'hover:text-gray-500'}`}>Women</a>
                <a href="#" className={`text-[12px] tracking-[0.18em] font-light transition-colors ${isLight ? 'hover:text-gray-300' : 'hover:text-gray-500'}`}>Men</a>
                <a href="#" className={`text-[12px] tracking-[0.18em] font-light transition-colors ${isLight ? 'hover:text-gray-300' : 'hover:text-gray-500'}`}>Blog</a>
                <a href="#" className={`text-[12px] tracking-[0.18em] font-light transition-colors ${isLight ? 'hover:text-gray-300' : 'hover:text-gray-500'}`}>About</a>
            </div>

            {/* Mobile Menu Icon (Placeholder) */}
            <div className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>

            {/* Center Column: Logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
                <a href="/">
                    <img
                        src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/logo.png?v=1680783645&width=260"
                        alt="Prestige Logo"
                        className={`h-[18px] md:h-[22px] w-auto transition-all duration-300 ${isLight ? 'brightness-0 invert' : ''
                            }`}
                    />
                </a>
            </div>

            {/* Right Column: Icons and Currency */}
            <div className="flex items-center gap-4 md:gap-6">
                {/* Currency Selector */}
                <div className="relative hidden md:block">
                    <div
                        className={`flex items-center gap-2 text-[11px] tracking-[0.15em] font-medium transition-colors cursor-pointer ${isLight ? 'text-gray-200 hover:text-white' : 'text-gray-500 hover:text-black'
                            }`}
                        onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                    >
                        <img src={selectedCurrency.flag} alt={`${selectedCurrency.country} Flag`} className="w-5 h-auto" />
                        {selectedCurrency.code}
                        <svg className={`w-3 h-3 transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    {isCurrencyOpen && (
                        <div className="absolute right-0 mt-4 w-[280px] bg-white border border-gray-100 shadow-xl py-4 z-50">
                            <div className="max-h-[400px] overflow-y-auto no-scrollbar">
                                {currencies.map((curr) => (
                                    <div
                                        key={curr.name}
                                        className="flex items-center gap-4 px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                                        onClick={() => {
                                            setSelectedCurrency(curr);
                                            setIsCurrencyOpen(false);
                                        }}
                                    >
                                        <img src={curr.flag} alt={curr.country} className="w-6 h-auto" />
                                        <span className="text-[13px] tracking-[0.05em] text-gray-800 normal-case font-normal">
                                            {curr.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-4 md:gap-5">
                    {/* Account Icon */}
                    <button className={`transition-colors ${isLight ? 'hover:text-gray-300' : 'hover:text-gray-500'}`}>
                        <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </button>
                    {/* Search Icon */}
                    <button className={`transition-colors ${isLight ? 'hover:text-gray-300' : 'hover:text-gray-500'}`}>
                        <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    {/* Cart Icon */}
                    <button className={`transition-colors ${isLight ? 'hover:text-gray-300' : 'hover:text-gray-500'}`}>
                        <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar