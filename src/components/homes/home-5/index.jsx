import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import HeroArea from "./hero-area";
import ServiceArea from "./service-area";
import BenefitsArea from "./benefits-area";   
import TestimonialArea from "./testimonial-area";
import PriceAreaHomeFive from "./price-area-home-5";
import BrandArea from "./brand-area";
import FooterTwo from "@/src/layout/footers/footer-2";

const HomeFive = () => {
  return (
    <>
      <HeaderTwo style_5={true} />
      <main>
      <HeroArea />
      <ServiceArea />
      <BenefitsArea />
      <TestimonialArea />
      <PriceAreaHomeFive />
      <BrandArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default HomeFive;
