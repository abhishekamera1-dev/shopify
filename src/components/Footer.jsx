import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-12 border-t border-[#1c1c1c]/5">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-6">

                    {/* Newsletter */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#1c1c1c]">
                            NEWSLETTER
                        </h4>

                        <div className="flex flex-col gap-6">
                            <p className="text-[14px] font-light text-[#1c1c1c]/70 leading-relaxed max-w-[320px]">
                                Subscribe to receive updates, access to exclusive deals, and more.
                            </p>

                            <form className="flex flex-col gap-4 max-w-[320px]">
                                <input
                                    type="email"
                                    placeholder="E-mail"
                                    className="w-full border border-[#1c1c1c]/10 px-4 py-3.5 text-[14px] font-light outline-none focus:border-[#1c1c1c]/30 transition-colors placeholder:text-[#1c1c1c]/30"
                                    required
                                />

                                <button
                                    type="submit"
                                    className="btn-hover-dark py-4 px-8 text-[11px] uppercase tracking-[0.2em] font-medium w-fit transition-all"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>

                            {/* Social Icons */}
                            <div className="flex gap-7 mt-6">
                                <a href="#" className="text-[#1c1c1c]/60 hover:text-[#1c1c1c] transition-colors">
                                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-[#1c1c1c]/60 hover:text-[#1c1c1c] transition-colors">
                                    <svg className="w-[16px] h-[16px] mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-[#1c1c1c]/60 hover:text-[#1c1c1c] transition-colors">
                                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.258-2.911.554-.789.306-1.459.717-2.126 1.384S.93 3.277.624 4.066c-.296.763-.497 1.634-.554 2.911C.014 8.252 0 8.66 0 11.919s.014 3.667.072 4.947c.057 1.277.258 2.148.554 2.911.306.789.717 1.459 1.384 2.126s1.337 1.077 2.126 1.384c.763.296 1.634.497 2.911.554 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.258 2.911-.554.789-.306 1.459-.717 2.126-1.384s1.077-1.337 1.384-2.126c.296-.763.497-1.634.554-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.258-2.148-.554-2.911-.306-.789-.717-1.459-1.384-2.126S18.56.93 17.771.624c-.763-.296-1.634-.497-2.911-.554C15.587.014 15.179 0 11.92 0z" />
                                        <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.081 4.081 0 110-8.162A4.081 4.081 0 0112 16zM18.406 4.155a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-[#1c1c1c]/60 hover:text-[#1c1c1c] transition-colors"
                                >
                                    <svg
                                        className="w-[18px] h-[18px]"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.23 5.924c-.094 2.06-1.532 4.88-4.316 8.46-2.88 3.74-5.318 5.61-7.314 5.61-1.24 0-2.29-1.145-3.15-3.435-.574-2.11-1.147-4.22-1.72-6.33-.638-2.29-1.323-3.435-2.053-3.435-.158 0-.712.334-1.662 1.002L1 6.417c1.18-1.036 2.338-2.072 3.474-3.108 1.58-1.37 2.766-2.09 3.558-2.16 1.87-.18 3.02 1.1 3.45 3.84.46 2.96.78 4.8.96 5.52.53 2.46 1.11 3.69 1.74 3.69.49 0 1.23-.77 2.22-2.31.99-1.54 1.52-2.71 1.59-3.51.14-1.33-.39-2-1.59-2-.57 0-1.15.13-1.74.39 1.16-3.8 3.37-5.64 6.63-5.52 2.42.07 3.57 1.65 3.46 4.74z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Shop */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#1c1c1c]">
                            SHOP
                        </h4>
                        <ul className="flex flex-col gap-3.5 text-[14px] font-light text-[#1c1c1c]/70">
                            <li><a href="#" className="hover:text-[#1c1c1c] transition-colors">Women</a></li>
                            <li><a href="#" className="hover:text-[#1c1c1c] transition-colors">Men</a></li>
                            <li><a href="#" className="hover:text-[#1c1c1c] transition-colors">Small Leather Goods</a></li>
                            <li><a href="#" className="hover:text-[#1c1c1c] transition-colors">Collaboration</a></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#1c1c1c]">
                            INFORMATION
                        </h4>
                        <ul className="flex flex-col gap-3.5 text-[14px] font-light text-[#1c1c1c]/70">
                            <li><a href="#" className="hover:text-[#1c1c1c] transition-colors">Theme Features</a></li>
                            <li><a href="#" className="hover:text-[#1c1c1c] transition-colors">About us</a></li>
                            <li><a href="#" className="hover:text-[#1c1c1c] transition-colors">Contact us</a></li>
                            <li><a href="#" className="hover:text-[#1c1c1c] transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-[#1c1c1c] transition-colors">Maintenance Tips</a></li>
                        </ul>
                    </div>

                    {/* About */}
                    <div className="flex flex-col gap-6 max-w-[420px]">
                        <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#1c1c1c]">
                            ABOUT THE SHOP
                        </h4>

                        <div className="flex flex-col gap-4">
                            <p className="text-[13px] font-light text-[#1c1c1c]/70 leading-relaxed">
                                The story of Leo and Violette, it's ours. We are Léo Dominguez & Violette Polchi. Two Parisian lovers sharing our lives for more than 8 years. Since the early days of our meeting, we always had the dream to develop a project together. Here it is!
                            </p>
                            <p className="text-[13px] font-light text-[#1c1c1c]/70 leading-relaxed">
                                Thanks to <a href="#" className="underline underline-offset-4 decoration-1 decoration-[#1c1c1c]/20 hover:decoration-[#1c1c1c]/60 transition-all">Léo et Violette</a> for allowing us to use their products in this demo store.
                            </p>
                        </div>
                    </div>



                </div>

                {/* Bottom Bar */}
                <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] font-medium text-[#1c1c1c]/60 cursor-pointer group">
                        <img src="https://flagcdn.com/us.svg" className="w-4 h-2.5 object-cover" alt="USA" />
                        <span>UNITED STATES (USD $)</span>
                        <svg className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    <div className="text-[10px] uppercase tracking-[0.2em] font-light text-[#1c1c1c]/40 text-center">
                        © 2026 - PRESTIGE - ALLURE POWERED BY SHOPIFY
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="h-6 w-10 border border-[#1c1c1c]/5 rounded-[2px] flex items-center justify-center p-1 bg-white">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Visa_Inc._logo_%282021%E2%80%93present%29.svg/3840px-Visa_Inc._logo_%282021%E2%80%93present%29.svg.png" alt="Visa" className="max-h-full max-w-full" />
                        </div>
                        <div className="h-6 w-10 border border-[#1c1c1c]/5 rounded-[2px] flex items-center justify-center p-1 bg-white">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="max-h-full max-w-full" />
                        </div>
                        <div className="h-6 w-10 border border-[#1c1c1c]/5 rounded-[2px] flex items-center justify-center p-1 bg-white">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="max-h-full max-w-full" />
                        </div>
                        <div className="h-6 w-10 border border-[#1c1c1c]/5 rounded-[2px] flex items-center justify-center p-1 bg-white">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex" className="max-h-full max-w-full" />
                        </div>
                        <div className="h-6 w-10 border border-[#1c1c1c]/5 rounded-[2px] flex items-center justify-center p-1 bg-white">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Diners_Club_Logo3.svg" alt="Maestro" className="max-h-full max-w-full" />
                        </div>
                        <div className="h-6 w-10 border border-[#1c1c1c]/5 rounded-[2px] flex items-center justify-center p-1 bg-white">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Discover_Card_logo.svg/3840px-Discover_Card_logo.svg.png" alt="Discover" className="max-h-full max-w-full" />
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
