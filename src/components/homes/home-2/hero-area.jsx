import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import hero_img from "@assets/img/slider/sass.png";

const hero_content ={
    bg_img: "/assets/img/slider/hero.png",
    hero_sub_title: "Effortlessly",
    hero_title: "Manages All Your Information",
}
const {bg_img, hero_sub_title, hero_title}  = hero_content 
const HeroArea = () => {
    return (
        <>
           <section className="hero-padding pos-relative">
                <div className="shape-slider">
                    <span className="shape shape-circle shape-c-1 "></span>
                </div>
                <div className="slider-area fix">
                    <div className="single-slider slider-height-2 pt-230" style={{backgroundImage: `url(${bg_img})`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="slider-text slider-text-2 pt-0">
                                        <h2 className="wow fadeInUp animated" data-wow-delay="0.4s">
                                            <span>{hero_sub_title}</span>
                                            {hero_title}
                                        </h2>
                                        <Link href="#" className="x-btn btn-squ-bg wow fadeInUp animated" data-wow-delay="1.5s">
                                            Free trial
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 offset-xl-1">
                                    <div className="slider-img slider-img-2-1 wow fadeInUp animated" data-wow-duration="3.5s">
                                        <Image src={hero_img} alt="theme-pure" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default HeroArea;