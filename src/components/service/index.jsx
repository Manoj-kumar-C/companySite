import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import OurService from "./our-service";
import BenefitsArea from "../homes/home-5/benefits-area";  
import SubscriptionArea from "../homes/home-3/subscription-area";
import Footer from "@/src/layout/footers/footer";

const Service = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Service Style 01"  title="Service"/>
        <OurService />
        <BenefitsArea style_service={true} />  
        <SubscriptionArea style_service={true} />
      </main>
      <Footer home_2={true} />
    </>
  );
};

export default Service;
