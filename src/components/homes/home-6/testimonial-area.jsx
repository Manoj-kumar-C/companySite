import Image from 'next/image';
import Slider from 'react-slick';
import React, { useRef } from 'react';

import testimonial_shape_1 from "@assets/img/shape/shape-f-1.png";
import testimonial_shape_2 from "@assets/img/shape/shape2.png";
// testimonial data 
const testimonial_data = [
    {
        id: 1,
        name: "Harrish Morgan",
        job_title: "Software developer",
        info: <>Gathering creepeth good divide yielding living lesser signs itseld Sea made isn't together be have yielding after light
        which days there dominion isn't spirit to</>
    },
    {
        id: 2,
        name: "Mark Williams",
        job_title: "Web Developer",
        info: <>Gathering creepeth good divide yielding living lesser signs itseld Sea made isn't together be have yielding after light
        which days there dominion isn't spirit to</>
    },
    {
        id: 3,
        name: "Salim Rana",
        job_title: "Web Developer",
        info: <>Gathering creepeth good divide yielding living lesser signs itseld Sea made isn't together be have yielding after light
        which days there dominion isn't spirit to</>
    },
]
// setting
const setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1

            }
        }
    ]
}

const TestimonialArea = ({style_testimonial}) => {
    const {sliderRef}  = useRef(null)
    return (
        <> 
             <div className={`testimonial-area pos-relative ${style_testimonial? "pt-120 pb-120" : "pb-150"}`}>
                <div className="shape-slider">
                    <Image className="shape shape-1 shape-5-1 " src={testimonial_shape_1} alt="theme-pure" />
                    <Image className="shape shape-5 " src={testimonial_shape_2} alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title-2 section-title-4 mb-70">
                                <span>Testimonials</span>
                                <h2>Our happy customer says
                                about our software.</h2>
                            </div>
                        </div>
                    </div>
                    <Slider {...setting} ref={sliderRef}  className="row testimonial-text-active dot-style">
                        {testimonial_data.map((item, i)  => 
                            <div key={i} className="col-xl-6 pl-15 pr-15">
                                <div className="testi-wrapper">
                                    <div className="client-info-text mb-20">
                                        <h4>{item.name}</h4>
                                        <span>{item.job_title}</span>
                                    </div>
                                    <p>{item.info}</p>
                                </div>
                            </div>                        
                        )} 
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default TestimonialArea;