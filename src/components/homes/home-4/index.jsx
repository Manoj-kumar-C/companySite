import HeaderFour from '@/src/layout/headers/header-4';
import React from 'react';
import HeroArea from './hero-area';
import AboutArea from './about-area';
import ExcellentFeatureArea from './excellent-feature-area';
import AdvanceFeature from './advance-feature';
import HWArea from './hw-area'; 
import TestimonialArea from '../home-3/testimonial-area';
import PricingAreaHomeFour from './pricing-area-home-4';
import BrandArea from './brand-area';
import LatestNewsArea from './latest-news-area';
import Footer from '@/src/layout/footers/footer';

const HomeFour = () => {
    return (
        <>
           <HeaderFour />
           <main>
            <HeroArea />
            <AboutArea />
            <ExcellentFeatureArea />
            <AdvanceFeature />
            <HWArea />
            <TestimonialArea style_4={true} />
            <PricingAreaHomeFour />
            <BrandArea />
            <LatestNewsArea />
           </main>
           <Footer style_4={true} />
        </>
    );
};

export default HomeFour;