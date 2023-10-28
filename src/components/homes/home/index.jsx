import HeaderOne from "@/src/layout/headers/header";
import React from "react"; 
import Brand from "./brand";
import HeroArea from "./hero-area";
import ServiceArea from "./service-area";
import AboutArea from "./about-area";
import PeopleNetworkArea from "./people-network-area";
import PricingArea from "./pricing-area";
import NewsletterArea from "./newsletter-area";
import Footer from "@/src/layout/footers/footer";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroArea />
        <Brand />
        <ServiceArea />
        <AboutArea />
        <PeopleNetworkArea />
        <PricingArea />
        <NewsletterArea />
      </main>
      <Footer />
    </>
  );
};

export default HomeOne;
