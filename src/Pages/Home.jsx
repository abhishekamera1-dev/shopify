import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import Bestseller from '../components/Bestseller'
import Midbanner from '../components/Midbanner'
import Ouraimsection from '../components/Ouraimsection'
import Category from '../components/Category'
import Title from '../components/Title'
import WeekendCollection from '../components/WeekendCollection'
import VideoSection from '../components/VideoSection'
import ShopTheLook from '../components/ShopTheLook'
import CountdownSale from '../components/CountdownSale'
import Collaboration from '../components/Collaboration'
import BeforeAfter from '../components/BeforeAfter'
import ScrollingImages from '../components/ScrollingImages'
import BlogPosts from '../components/BlogPosts'
import FeaturedProduct from '../components/FeaturedProduct'
import MaterialsAndTestimonials from '../components/MaterialsAndTestimonials'
import Timeline from '../components/Timeline'
import BrandStoryBanner from '../components/BrandStoryBanner'
import MultiColumnFeatures from '../components/MultiColumnFeatures'
import Newsletter from '../components/Newsletter'
import SocialSection from '../components/SocialGrid'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Banner />
            <Navbar />
            <Herosection />
            <Bestseller />
            <Midbanner />
            <Ouraimsection />
            <Category />
            <Title />
            <WeekendCollection />
            <VideoSection />
            <ShopTheLook />
            <CountdownSale />
            <Collaboration />
            <BeforeAfter />
            <ScrollingImages />
            <BlogPosts />
            <FeaturedProduct />
            <MaterialsAndTestimonials />
            <Timeline />
            <BrandStoryBanner />
            <MultiColumnFeatures />
            <Newsletter />
            <SocialSection />
            <Footer />
        </div>
    )
}

export default Home;