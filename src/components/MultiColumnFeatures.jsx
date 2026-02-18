import React from 'react';

const features = [
    {
        title: "The design",
        description: "At Léo et Violette, we create our bags with you in mind. All our products are imagined and designed in Paris, in our offices on rue Sainte-Anne.",
        image: "//prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_commitments_1.jpg?v=1677510747&width=1400"
    },
    {
        title: "Materials",
        description: "Our leathers come exclusively from hides recovered from the food industry. We work exclusively with tanneries in Italy, France and Spain.",
        image: "//prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_home_2.jpg?v=1680778082&width=879"
    },
    {
        title: "The know-how",
        description: "Each step of the manufacturing process is carried out according to the strict specifications of the leatherworker's craft.",
        image: "//prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_home_3.jpg?v=1680778272&width=879"
    }
];

const MultiColumnFeatures = () => {
    return (
        <section className="bg-[#efefef] py-8 md:py-16 lg:py-20 overflow-hidden border-t border-[#1c1c1c]/5">
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[1600px]">

                {/* Section Header */}
                <div className="text-center mb-10 md:mb-14">
                    <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#1c1c1c]/80 mb-4">
                        About us
                    </p>
                    <h2 className="text-[26px] md:text-[28px] uppercase tracking-[0.2em] font-light text-[#1c1c1c]">
                        From A to Z
                    </h2>
                </div>

                {/* Mobile Scroll / Desktop Grid */}
                <div className="
                    flex md:grid
                    md:grid-cols-3
                    gap-8 md:gap-8 lg:gap-16
                    overflow-x-auto md:overflow-visible
                    snap-x snap-mandatory
                    scrollbar-hide
                    pb-4
                ">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="
                                shrink-0
                                w-[80%] sm:w-[65%]
                                md:w-auto
                                snap-start
                                flex flex-col items-center text-center
                            "
                        >
                            {/* Image */}
                            <div className="relative w-full aspect-[2/3] overflow-hidden bg-gray-200">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text */}
                            <div className="mt-6 md:mt-8 px-2 md:px-0">
                                <h3 className="text-[13px] md:text-[18px] uppercase tracking-[0.2em] font-light text-[#1c1c1c]/80 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-[13px] md:text-[14px] font-light leading-relaxed text-[#1c1c1c]/80 max-w-[280px] md:max-w-none">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MultiColumnFeatures;
