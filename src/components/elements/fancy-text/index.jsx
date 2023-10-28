import HeaderTwo from "@/src/layout/headers/header-2"; 
import Breadcrumb from "../../common/breadcrumb/breadcrumb";    
import ServiceAreaOne from "../../homes/home/service-area";
import WhatWeDoArea from "../../homes/home-2/what-we-do-area"
import ServiceAreaThree from "../../homes/home-3/service-area";
import HWArea from "../../homes/home-4/hw-area";
import ServiceAreaFive from "../../homes/home-5/service-area";
import ServiceAreaSix from "../../homes/home-6/service-area";
import ServiceAreaSeven from "../../homes/home-7/service-area";
import Footer from "@/src/layout/footers/footer";



const FancyText = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title={"Elements Fancy Text"} title={"Fancy Text"} />
        <ServiceAreaOne style_fancy={true} />
        <WhatWeDoArea style_fancy={true} />
        <ServiceAreaThree style_fancy={true} />
        <HWArea style_fancy={true} />
        <ServiceAreaFive style_fancy={true} />
        <ServiceAreaSix style_fancy={true} />
        <ServiceAreaSeven style_fancy={true} />
      </main>
      <Footer />
    </>
  );
};

export default FancyText;
