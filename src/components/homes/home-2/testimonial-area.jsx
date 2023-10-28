import Image from 'next/image';
import Slider from 'react-slick';
import React, { useRef } from 'react';

import shape_client from "@assets/img/bg/client.png";
import shape_zigzag from "@assets/img/shape/shape-zigzag.png";
// testimonial data 
const testimonial_data = [
    {
        id: 1, 
        name: "Mitcel Sorts,",
        title: "Project Manager",
        info: <>Bearing one Seas his give creepeth hath green set in one grass yielding beast she'd deep man creature a life
        female let fruit have unto yielding</>
    }, 
    {
        id: 2, 
        name: "Mitcel Sorts,",
        title: "Project Manager",
        info: <>Bearing one Seas his give creepeth hath green set in one grass yielding beast she'd deep man creature a life
        female let fruit have unto yielding</>
    },
    {
        id: 3, 
        name: "Mitcel Sorts,",
        title: "Project Manager",
        info: <>Bearing one Seas his give creepeth hath green set in one grass yielding beast she'd deep man creature a life
        female let fruit have unto yielding</>
    }, 

]
// slider setting 
const setting = { 
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  };

const TestimonialArea = () => {
  const sliderRef = useRef(null);
    return (
        <>
            <section className="testimonial-area pos-relative pb-120">
                <div className="shape-slider">
                    <span className="shape shape-circle shape-c-3 "></span>
                    <Image className="shape shape-test-1" src={shape_zigzag} alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="testimonial-img-2 mb-30 wow fadeInLeft animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <Image src={shape_client} alt="theme-pure" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="section-title-2 mb-25 mt-60">
                                <span>Testimnonials</span>
                                <h2>Findout what people says
                                about our works.</h2>
                            </div>
                            <Slider {...setting} ref={sliderRef}  
                            className="testimonial-active testimonial-red mb-30 brand-active-2 dot-style dot-style-2">
                                {testimonial_data.map((item, i)  => 
                                    <div key={i} className="single-testimonial">
                                        <p>{item.info}</p>
                                        <span><b>{item.name}</b> {item.title}</span>
                                    </div>
                                )} 
                            </Slider>
                        </div> 
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialArea;