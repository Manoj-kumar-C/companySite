import Image from 'next/image';
import React from 'react';
import  hero_img  from '@assets/img/slider/v-image.png';
import Link from 'next/link';

const HeroArea = () => {
    return (
        <>
            <section className="slider-area fix">
                <div className="single-slider slider-height-5 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7 ">
                                <div className="slider-text-4 slider-text-5  pt-190">
                                    <h2 className="wow fadeInUp animated" data-wow-delay="0.4s">
                                        Powerful Application for  growing companies
                                    </h2>
                                    <p className="wow fadeInUp animated" data-wow-delay="0.9s">
                                        Upon divide bearing face you'll heaven fifth herb. Gathering whales together let made had moving them saw there male
                                    lights fish under image land day years have seas under had fowl them heaven give
                                    </p>
                                    <div className="slider-app-btn get-app wow fadeInUp animated" data-wow-delay="1.3s">
                                        <Link className="app-border-btn" href="#">
                                            <i className="ti-android"></i>
                                            <p><span>Get It On</span> Google Play</p>
                                        </Link>
                                        <Link className="app-bg-btn" href="#">
                                            <i className="ti-apple"></i>
                                            <p><span>Get It On</span> app store</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5">
                                <div className="slider-img-5 pt-50 wow fadeInRight animated" data-wow-duration="2.5s">
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