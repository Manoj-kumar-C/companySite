import React from 'react';
import HeroArea from './hero-area';
import HeaderThree from '@/src/layout/headers/header-3';
import ServiceArea from './service-area';
import AccessArea from './access-area';
import FeatureArea from './feature-area';
import AccessAreaTwo from './access-area-2';
import PriceAreaHomeSeven from './price-area-home-7';
import TestimonialArea from './testimonial-area';
import BrandArea from './brand-area';
import NewsletterArea from './newsletter-area';
import Footer from '@/src/layout/footers/footer';

const HomeSeven = () => {
    return (
        <>
        <HeaderThree style_7={true} /> 
        <main>
            <HeroArea /> 
            <ServiceArea /> 
            <AccessArea /> 
            <FeatureArea /> 
            <AccessAreaTwo />
            <PriceAreaHomeSeven />
            <TestimonialArea />
            <BrandArea />
            <NewsletterArea />
        </main>  
        <Footer home_2={true} footer_bg={true}/>         
        </>
    );
};

export default HomeSeven;