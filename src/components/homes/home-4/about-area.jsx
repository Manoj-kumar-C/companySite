import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import about_img from "@assets/img/bg/ab.png";

const about_content = {
    title: "Starting with xisen is easier than anything",
    info: <>Firmament after it our female herb so greatful signs days saw that fruit stars after open form given thing good.</>,
    feature_1: <>Likeness whales sixth he there seas have lesser for the light sea</>,
    feature_2: <>Over fifth morning wherein bearing greater very let dominion</>,
}
const {title, info, feature_1, feature_2}  = about_content

const AboutArea = () => {
    return (
        <>
           <div className="xn-about-area pt-110 pb-100 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="xn-about-img-2 mb-30 wow fadeInLeft animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <Image src={about_img} alt="theme-pure" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="xn-about-content xn-about-5 mb-30 pt-70 pr-40">
                                <span className="d-block mb-15">About us</span>
                                <h2>{title}</h2>
                                <p>{info}</p>
                                <ul>
                                    <li>
                                        <i className="ti-check-box"></i> 
                                        <span>{feature_1}</span>
                                    </li>
                                    <li>
                                        <i className="ti-check-box"></i> 
                                        <span>{feature_2}</span>
                                    </li>
                                </ul>
                                <div data-aos="fade-up">
                                    <Link href="/about" className="x-btn btn-border btn-orange" >learn more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default AboutArea;