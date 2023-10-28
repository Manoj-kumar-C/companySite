import HeaderTwo from "@/src/layout/headers/header-2"; 
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import TestimonialAreaHomeSix from "../../homes/home-6/testimonial-area";
import TestimonialAreaHomeTwo  from "../../homes/home-2/testimonial-area";
import TestimonialAreaHomeThree from "../../homes/home-3/testimonial-area";
import Footer from "@/src/layout/footers/footer";

const Testimonials = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Elements Testimonial"  title="Testimonial"/>
        <TestimonialAreaHomeSix style_testimonial={true} />
        <TestimonialAreaHomeTwo  />
        <TestimonialAreaHomeThree style_3={true} />
      </main>
      <Footer no_style={true} />
    </>
  );
};

export default Testimonials;
