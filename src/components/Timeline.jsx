import React, { useState } from 'react';

const timelineData = [
    {
        year: "2013",
        tag: "First product",
        title: "Le Petit Cartable",
        description: "Leo et Violette's story is ours. We are Léo Dominguez & Violette Polchi. Two Parisian lovers sharing our life for more than 8 years. Ever since we met, we always had the dream to develop a project together. By creating Le petit cartable in January 2013, we started to realize this dream. Our first Kickstarter campaign is launched!",
        image: "//prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2013_e1daf994-0b5b-4e84-99e3-9131adfcf250.jpg?v=1677505104&width=1200"
    },
    {
        year: "2014",
        tag: "Our vision",
        title: "Transparency",
        description: "No intermediaries and no wholesalers. So no excessive margins. It's just between you and us. And this is what allows us to offer you a quality product at an affordable price. Welcome to the fashion of the 21st century.",
        image: "//prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2014_cacce574-d648-4c1e-885e-4ba935505d1e.jpg?v=1677505627&width=1200"
    },
    {
        year: "2015",
        tag: "New factory",
        title: "Relationship",
        description: "Our workshop is located next to Naples, Italy. It was founded in the early 1980s by Dino Levorino, a craftsman well known for his know-how. The workshop was taken over by his son Gennaro, with whom we talk every day, about the production and the design of new models. More than just a factory, they are real partners who have shared Leo et Violette's vision.",
        image: "//prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2015.jpg?v=1677505855&width=1200"
    },
    {
        year: "2017",
        tag: "Opening",
        title: "Our flagship",
        description: "Our first Léo et Violette location, right in the heart of Paris. The perfect place to discover and buy the collection. Open Monday to Saturday + Sunday in December.",
        image: "//prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2017.jpg?v=1677506209&width=1200"
    },
    {
        year: "2020",
        tag: "New idea",
        title: "Small Leather Goods",
        description: "With the success of our bags we wanted to go further by offering small leather goods: wallets, card holders and pouches.",
        image: "//prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2020.jpg?v=1677506700&width=1200"
    },
    {
        year: "2021",
        tag: "First collaboration",
        title: "Léo et Violette x Wendy Swan",
        description: "The meeting between Wendy and Léo et Violette gave birth to our new bag: The Dalia. Every detail, from the choice of leather quality to the metal parts, has been carefully thought out.",
        image: "//prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2021.jpg?v=1677507605&width=1200"
    }
];

const Timeline = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-[#efefef] md:pt-24 pb-4 md:pb-12 overflow-hidden">
            <div className="container mx-auto px-0 md:px-12 lg:px-24 max-w-7xl">
                <div className="relative flex flex-col md:flex-row items-stretch bg-white shadow-sm overflow-hidden h-[600px] md:h-[500px]">
                    {/* Left: Image Column (Absolute on mobile, relative on desktop) */}
                    <div className="absolute inset-0 md:relative md:w-1/2 overflow-hidden bg-gray-100">
                        <div key={`image-${activeIndex}`} className="h-full w-full animate-in fade-in zoom-in-95 duration-1000">
                            <img
                                src={timelineData[activeIndex].image}
                                alt={timelineData[activeIndex].title}
                                className="h-full w-full object-cover"
                            />
                            {/* Mobile-only dark overlay for readability */}
                            <div className="absolute inset-0 bg-black/40 md:hidden" />
                        </div>
                    </div>

                    {/* Right: Content Column (Overlay on mobile, column on desktop) */}
                    <div className="relative z-10 w-full h-full md:w-1/2 flex items-center justify-center md:items-stretch md:justify-end p-4 md:p-0">
                        <div className="bg-transparent md:bg-transparent p-0 md:p-10 shadow-none md:shadow-none w-full max-w-[320px] md:max-w-none text-center md:text-left flex flex-col justify-center md:justify-end">
                            <div key={`content-${activeIndex}`} className="animate-in fade-in slide-in-from-bottom-4 md:slide-in-from-right-4 duration-700">
                                <p className="text-[8px] md:text-[11px] uppercase tracking-[0.1em] font-bold text-white/60 md:text-[#1c1c1c]/60 mb-2 md:mb-3">
                                    {timelineData[activeIndex].tag}
                                </p>
                                <h2 className="text-[18px] md:text-[32px] uppercase tracking-[0.18em] font-extralight text-white md:text-[#1c1c1c] mb-4 md:mb-6 leading-tight">
                                    {timelineData[activeIndex].title}
                                </h2>
                                <p className="text-[11px] md:text-[14px] font-light leading-relaxed text-white/80 md:text-[#1c1c1c]/80 mx-auto md:mx-0 max-w-md">
                                    {timelineData[activeIndex].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation: Year Switcher - Scrollable on mobile */}
                <div className="mt-10 md:mt-12 px-6 md:px-0">
                    <div className="flex overflow-x-auto snap-x scrollbar-hide gap-8 md:gap-10 justify-start md:justify-center">
                        {timelineData.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`group relative py-2 text-[13px] tracking-[0.2em] transition-all duration-300 flex-shrink-0 snap-center ${activeIndex === index
                                    ? 'text-[#1c1c1c] font-medium'
                                    : 'text-[#1c1c1c]/40 hover:text-[#1c1c1c]/70'
                                    }`}
                                aria-label={`View story from ${item.year}`}
                            >
                                {item.year}
                                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-[#1c1c1c] transition-all duration-500 ${activeIndex === index ? 'w-full' : 'w-0 group-hover:w-4'
                                    }`} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
