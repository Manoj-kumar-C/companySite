import HeaderFive from '@/src/layout/headers/header-5';
import React from 'react';
import HeroArea from './hero-area';
import ServiceArea from './service-area';
import HIWArea from './hiw-area';
import Brand from '../home/brand';
import HIWAreaTwo from './hiw-area-2';
import TestimonialArea from './testimonial-area';
import PricingAreaHomeSix from './pricing-area-home-6';
import LatestNewsArea from './latest-news-area';
import FooterThree from '@/src/layout/footers/footer-3';

const HomeSix = () => {
    return (
         <>
         <HeaderFive />
         <main>
            <HeroArea />
            <ServiceArea />
            <HIWArea />
            <Brand style={true} />
            <HIWAreaTwo />
            <TestimonialArea />
            <PricingAreaHomeSix />
            <LatestNewsArea />
         </main>
         <FooterThree />
         </>
    );
};

export default HomeSix;