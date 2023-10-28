import HeaderTwo from '@/src/layout/headers/header-2';
import React from 'react';
import HeroArea from './hero-area';
import FeaturesArea from './features-area';
import WhatWeDoArea from './what-we-do-area';
import AboutArea from './about-area';
import PricingAreaHomeTwo from './pricing-area-home-2';
import TestimonialArea from './testimonial-area'; 
import BrandArea from './brand-area';
import Footer from '@/src/layout/footers/footer';

const HomeTwo = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <HeroArea />
                <FeaturesArea />
                <WhatWeDoArea />
                <AboutArea />
                <PricingAreaHomeTwo />
                <TestimonialArea />
                <BrandArea />
            </main>
            <Footer home_2={true} />
        </>
    );
};

export default HomeTwo;