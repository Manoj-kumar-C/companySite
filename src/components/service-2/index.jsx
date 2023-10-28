import HeaderTwo from '@/src/layout/headers/header-2';
import React from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ExcellentFeatureArea from '../homes/home-4/excellent-feature-area';
import AdvanceFeature from '../homes/home-4/advance-feature';
import HWArea from '../homes/home-4/hw-area';
import SubscriptionArea from '../homes/home-3/subscription-area';
import Footer from '@/src/layout/footers/footer';

const ServiceTwo = () => {
    return (
        <>
           <HeaderTwo />
           <main>
                <Breadcrumb top_title="Service Style 02"  title="Service 02" />
                <ExcellentFeatureArea style_service_2={true} />
                <AdvanceFeature />
                <HWArea style_service_2={true} />
                <SubscriptionArea style_service={true} />
           </main> 
           <Footer home_2={true} />
        </>
    );
};

export default ServiceTwo;