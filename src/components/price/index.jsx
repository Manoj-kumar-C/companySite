import HeaderTwo from '@/src/layout/headers/header-2';
import React from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import PricingArea from '../homes/home/pricing-area';
import PricingAreaHomeTwo from "../homes/home-2/pricing-area-home-2";
import PricingAreaHomeFour from "../homes/home-4/pricing-area-home-4";
import PriceAreaHomeFive from '../homes/home-5/price-area-home-5';
import PricingAreaHomeSix from '../homes/home-6/pricing-area-home-6';
import PriceAreaHomeSeven from '../homes/home-7/price-area-home-7';
import Footer from '@/src/layout/footers/footer';

const Price = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb top_title="Pricing Plan" title="Price" />
                <PricingArea /> 
                <PricingAreaHomeTwo style_price={true} />
                <PricingAreaHomeFour style_price={true} />
                <PriceAreaHomeFive style_price={true} />
                <PricingAreaHomeSix style_price={true} />
                <PriceAreaHomeSeven style_price={true} />
            </main>
            <Footer />
        </>
    );
};

export default Price;