import HeaderThree from "@/src/layout/headers/header-3";
import React from "react";
import HeroArea from "./hero-area";
import FeaturesArea from "./features-area";
import ServiceArea from "./service-area";
import AboutArea from "./about-area";
import TeamArea from "./team-area";
import TestimonialArea from "./testimonial-area";
import DeviceArea from "./device-area"; 
import Footer from '@/src/layout/footers/footer';
import SubscriptionArea from "./subscription-area";


const HomeThree = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <HeroArea />
        <FeaturesArea />
        <ServiceArea />
        <AboutArea />
        <TeamArea />
        <TestimonialArea style_3={true} />
        <DeviceArea />
        <SubscriptionArea />
      </main>
      <Footer home_2={true} />
    
    </>
  );
};

export default HomeThree;
