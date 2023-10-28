import HeaderTwo from "@/src/layout/headers/header-2"; 
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import AboutUs from "./about-us"; 
import ServiceArea from "../homes/home-5/service-area";
import TestimonialArea from "../homes/home-5/testimonial-area";
import BrandArea from "./brand-area";
import Footer from "@/src/layout/footers/footer";

const About = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="About Style 01" title="About" />
        <AboutUs /> 
        <ServiceArea about={true} />
        <TestimonialArea />
        <BrandArea />
      </main>
      <Footer />
    </>
  );
};

export default About;
 