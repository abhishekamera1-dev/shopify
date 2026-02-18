import React from 'react'

const Banner = () => {
    return (
        <div className="bg-[#1c1c1c] text-white h-[44px] md:h-[68px] px-4 md:px-12 flex flex-row items-center justify-center md:justify-between gap-4 md:gap-0 font-sans uppercase">
            {/* Left side: Sale text and Shop link - Hidden on very small screens or tightened */}
            <div className="flex items-center gap-3 md:gap-6">
                <span className="text-[10px] md:text-[12px] tracking-[0.1em] md:tracking-[0.18em] font-light">
                    Super Sale Up to 40% Off
                </span>
                <a
                    href="#"
                    className="hidden sm:inline-block text-[10px] md:text-[12px] font-medium underline underline-offset-[4px] hover:text-gray-300 transition-colors tracking-[0.18em]"
                >
                    Shop Now
                </a>
            </div>

            {/* Right side: Countdown Timer */}
            <div className="flex items-center gap-4 md:gap-8 border-l border-white/10 md:border-none pl-4 md:pl-0">
                <div className="flex items-center gap-1.5 md:gap-3">
                    <div className="flex flex-col items-center">
                        <div className="text-[12px] md:text-[15px] font-medium leading-none tracking-tight">99</div>
                        <div className="text-[7px] md:text-[9px] mt-0.5 text-gray-400 font-bold tracking-[0.1em] md:tracking-[0.15em]">Day</div>
                    </div>
                    <span className="text-[12px] md:text-[18px] font-light text-gray-500 pb-2.5 md:pb-4">:</span>
                </div>

                <div className="flex items-center gap-1.5 md:gap-3">
                    <div className="flex flex-col items-center">
                        <div className="text-[12px] md:text-[15px] font-medium leading-none tracking-tight">19</div>
                        <div className="text-[7px] md:text-[9px] mt-0.5 text-gray-400 font-bold tracking-[0.1em] md:tracking-[0.15em]">Hrs</div>
                    </div>
                    <span className="text-[12px] md:text-[18px] font-light text-gray-500 pb-2.5 md:pb-4">:</span>
                </div>

                <div className="flex items-center gap-1.5 md:gap-3">
                    <div className="flex flex-col items-center">
                        <div className="text-[12px] md:text-[15px] font-medium leading-none tracking-tight">27</div>
                        <div className="text-[7px] md:text-[9px] mt-0.5 text-gray-400 font-bold tracking-[0.1em] md:tracking-[0.15em]">Min</div>
                    </div>
                    <span className="text-[12px] md:text-[18px] font-light text-gray-500 pb-2.5 md:pb-4">:</span>
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-[12px] md:text-[15px] font-medium leading-none tracking-tight">56</div>
                    <div className="text-[7px] md:text-[9px] mt-0.5 text-gray-400 font-bold tracking-[0.1em] md:tracking-[0.15em]">Sec</div>
                </div>
            </div>
        </div>
    )
}

export default Banner