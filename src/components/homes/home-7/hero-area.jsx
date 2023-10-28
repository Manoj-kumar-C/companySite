import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import hero_img from "@assets/img/slider/slider-image.png";
import hero_shape_1 from "@assets/img/shape/shape1.png";
import hero_shape_2 from "@assets/img/shape/shape2.png";
import hero_shape_3 from "@assets/img/shape/shape3.png";
import hero_shape_4 from "@assets/img/shape/shape4.png";
import hero_shape_5 from "@assets/img/shape/shape5.png";
import hero_shape_6 from "@assets/img/shape/shape6.png";
 
const hero_content = {
    title_1:  "Advanced",
    title_2: "Future Software Made Simple",
    info: <>Herb fill fowl fourth they're were whales Don it first green Years to  seasons seed behold fruitful let gathering good</>, 
}
const {title_1, title_2, info} = hero_content

const HeroArea = () => {

    return (
         <>
            <section className="slider-area fix">
                <div className="shape-slider"> 
                    <Image className="shape shape-1" src={hero_shape_1} alt="theme-pure" />
                    <Image className="shape shape-2" src={hero_shape_2} alt="theme-pure" />
                    <Image className="shape shape-3" src={hero_shape_3} alt="theme-pure" />
                    <Image className="shape shape-4" src={hero_shape_4} alt="theme-pure" />
                    <Image className="shape shape-5" src={hero_shape_5} alt="theme-pure" />
                    <Image className="shape shape-6" src={hero_shape_6} alt="theme-pure" />
                </div>
                <div className="single-slider slider-height header-bg d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="slider-text">
                                    <h2 className="wow fadeInUp animated" data-wow-delay="0.4s">
                                        <span className="color">{title_1}</span> {title_2}
                                    </h2>
                                    <p className="wow fadeInUp animated" data-wow-delay="0.9s">
                                        {info}
                                    </p>
                                    <Link href="/register" className="x-btn wow fadeInUp animated" data-wow-delay="1.5s">Free trial</Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 offset-xl-1">
                                <div className="slider-img mt-50 wow fadeInRight animated" data-wow-duration="2.5s">
                                    <Image src={hero_img} alt="theme-pure" />
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