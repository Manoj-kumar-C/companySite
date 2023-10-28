import React, { useRef } from 'react';
import Slider from 'react-slick';
import Image from "next/image";

import bg_img from "@assets/img/bg/test.png";
import shape_img from "@assets/img/shape/shape6.png";

const testimonial_data = [
    {
        id: 1,
        name: "Karlo Hasels",
        job_title: "Project Manager",
        info: <>Bearing one Seas his give creepeth hath green set in one grass yielding beast she'd deep man creature a life
        female let fruit have unto yielding.</>
    },
    {
        id: 2,
        name: "Salim Rana",
        job_title: "Web Developer",
        info: <>Bearing one Seas his give creepeth hath green set in one grass yielding beast she'd deep man creature a life
        female let fruit have unto yielding.</>,
    },
    {
        id: 3,
        name: "Mitcel Sorts",
        job_title: "Designer",
        info: <>Bearing one Seas his give creepeth hath green set in one grass yielding beast she'd deep man creature a life
        female let fruit have unto yielding.</>,
    },
    {
        id: 4,
        name: "Mehedi Hasan",
        job_title: "Developer",
        info: <>Bearing one Seas his give creepeth hath green set in one grass yielding beast she'd deep man creature a life
        female let fruit have unto yielding.</>,
    },
]

const setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
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



const TestimonialArea = () => {
    const {sliderRef}  = useRef(null)
    
    return (
        <>
            <section className="testimonial-area pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="testimonial-img mb-30 wow fadeInLeft animated" 
                                  data-wow-duration="1.5s" data-wow-delay=".5s">
                                <Image src={bg_img} alt="theme-pure" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-9 offset-xl-1 pr-0 pos-relative">
                            <div className="shape-section">
                                <Image className="shape shape-t " src={shape_img} alt="theme-pure" />
                            </div>
                            <div className="section-title title-black pt-80">
                                <h2>What our <br />
                                    core clients saying?</h2>
                            </div>
                            <Slider {...setting} ref={sliderRef}  className="testimonial-text-active dot-style dot-color mb-30">
                                {testimonial_data.map((item, i) => 
                                    <div key={i} className="single-testimonial">
                                        <p>{item.info}</p>
                                        <span><b>{item.name},</b> {item.job_title}</span>
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