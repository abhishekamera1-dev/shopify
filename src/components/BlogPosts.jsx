import React from 'react';

const blogPosts = [
    {
        category: "Product",
        title: "How to choose your business bag",
        image: "https://prestige-theme-allure.myshopify.com/cdn/shop/articles/Featured_image-_How_to_choose_your_business_bag.jpg?v=1679497250&width=1000",
        link: "/blogs/news/how-to-choose-your-business-bag"
    },
    {
        category: "Story",
        title: "A shooting day in Etretat",
        image: "https://prestige-theme-allure.myshopify.com/cdn/shop/articles/Featured_image_-_A_day_in_Etretat.jpg?v=1679486958&width=1000",
        link: "/blogs/news/a-day-in-etretat"
    },
    {
        category: "Product",
        title: "Focus on your new favorite: Le Gianni",
        image: "https://prestige-theme-allure.myshopify.com/cdn/shop/articles/Featured_image_-_Focus_on_your_new_favorite__Le_Gianni.jpg?v=1679501378&width=1000",
        link: "/blogs/news/focus-on-your-new-favorite-le-gianni"
    }
];

const BlogCard = ({ post }) => {
    return (
        <div className="blog-post-card group shrink-0 w-[75%] sm:w-[65%] md:w-auto snap-start text-left">
            <div className="overflow-hidden aspect-[3/2] md:aspect-[2/1] bg-gray-200 mb-4 relative">
                <a href={post.link} className="block w-full h-full">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                </a>
            </div>

            <div className="blog-post-info">
                <p className="text-[9px] uppercase tracking-[0.25em] font-light text-[#1c1c1c]/60 mb-2">
                    {post.category}
                </p>

                <h3 className="text-[14px] md:text-[18px] uppercase tracking-[0.18em] font-light text-[#1c1c1c] mb-3 leading-relaxed">
                    <a href={post.link}>{post.title}</a>
                </h3>

                <a
                    href={post.link}
                    className="text-[10px] uppercase tracking-[0.2em] font-light underline underline-offset-[6px] decoration-[#1c1c1c]/20 hover:decoration-[#1c1c1c] transition-all duration-300"
                >
                    Read more
                </a>
            </div>
        </div>
    );
};

const BlogPosts = () => {
    return (
        <section className="bg-[#efefef] pt-12 pb-12 md:pb-20 px-6 md:px-24 lg:px-40 border-b border-[#1c1c1c]/10">
            <div className="container mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-[11px] uppercase tracking-[0.35em] font-light text-[#1c1c1c] mb-3">
                        News
                    </p>
                    <h2 className="text-[24px] md:text-[32px] uppercase tracking-[0.25em] font-light text-[#1c1c1c]">
                        From the blog
                    </h2>
                </div>

                {/* Scrollable on mobile / Grid on desktop */}
                <div className="
                    flex md:grid 
                    md:grid-cols-3 
                    gap-8 md:gap-12 lg:gap-16 
                    overflow-x-auto md:overflow-visible 
                    snap-x snap-mandatory 
                    scrollbar-hide
                    pb-4
                ">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={index} post={post} />
                    ))}
                </div>

                {/* Footer Button */}
                <div className="text-center mt-10 md:mt-16">
                    <a
                        href="/blogs/news"
                        className="inline-block btn-hover-dark px-2 py-3 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-medium min-w-[280px] text-center"
                    >
                        Discover all our stories
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BlogPosts;
