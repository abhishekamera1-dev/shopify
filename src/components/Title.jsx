import React from 'react'

const Title = () => {
    // Reduced gap as requested
    const commonClasses = "flex items-center gap-6 md:gap-12 whitespace-nowrap py-10 md:py-12";
    const textClasses = "text-[36px] md:text-[65px] font-light uppercase tracking-[0.05em] text-[#B3B3B3] leading-none";
    const imageClasses = "h-[50px] md:h-[80px] w-auto object-contain";
    const borderClass = "border-[rgba(179,179,179,0.15)]";

    const Row1Content = () => (
        <>
            <span className={textClasses}><span className="text-black"></span>New: Le Sac Baguette</span>
            <img src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Scrolling_content_-_home_-_sac._-baguette.jpg?v=1680765474&width=200" alt="Le Sac Baguette" className={imageClasses} />
            <span className={textClasses}><span className="text-black"></span>New: Le Sac Baguette</span>
            <img src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Scrolling_content_-_home_-_sac._-baguette.jpg?v=1680765474&width=200" alt="Le Sac Baguette" className={imageClasses} />
            <span className={textClasses}><span className="text-black"></span>New: Le Sac Baguette</span>
            <img src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Scrolling_content_-_home_-_sac._-baguette.jpg?v=1680765474&width=200" alt="Le Sac Baguette" className={imageClasses} />
            <span className={textClasses}><span className="text-black"></span>New: Le Sac Baguette</span>
            <img src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Scrolling_content_-_home_-_sac._-baguette.jpg?v=1680765474&width=200" alt="Le Sac Baguette" className={imageClasses} />
        </>
    );

    const Row2Content = () => (
        <>
            <span className={textClasses}>Shop New Arrivals</span>
            <img src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Scrolling_content_-_home_-_new.jpg?v=1680765940&width=200" alt="New Arrivals" className={imageClasses} />
            <span className={textClasses}>Shop New Arrivals</span>
            <img src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Scrolling_content_-_home_-_new.jpg?v=1680765940&width=200" alt="New Arrivals" className={imageClasses} />
            <span className={textClasses}>Shop New Arrivals</span>
            <img src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Scrolling_content_-_home_-_new.jpg?v=1680765940&width=260" alt="New Arrivals" className={imageClasses} />
            <span className={textClasses}>Shop New Arrivals</span>
            <img src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Scrolling_content_-_home_-_new.jpg?v=1680765940&width=200" alt="New Arrivals" className={imageClasses} />
        </>
    );

    return (
        <section className="py-20 bg-[#EFEFEF] overflow-hidden w-full">
            {/* Row 1: Scrolling Left */}
            <div className={`relative flex overflow-hidden w-full border-t-2 border-b ${borderClass}`}>
                {/* Track 1 */}
                <div className={`animate-scroll-left ${commonClasses} px-4 flex min-w-full justify-around shrink-0`}>
                    <Row1Content />
                </div>
                {/* Track 2 (Duplicate) - Side by side, no absolute positioning needed */}
                <div className={`animate-scroll-left ${commonClasses} px-4 flex min-w-full justify-around shrink-0`}>
                    <Row1Content />
                </div>
            </div>

            {/* Row 1: Scrolling Left */}
            <div className={`relative flex overflow-hidden w-full border-t-2 border-b ${borderClass}`}>
                {/* Track 1 */}
                <div className={`animate-scroll-right ${commonClasses} px-4 flex min-w-full justify-around shrink-0`}>
                    <Row2Content />
                </div>
                {/* Track 2 (Duplicate) - Side by side, no absolute positioning needed */}
                <div className={`animate-scroll-right ${commonClasses} px-4 flex min-w-full justify-around shrink-0`}>
                    <Row2Content />
                </div>
            </div>
        </section>
    )
}

export default Title