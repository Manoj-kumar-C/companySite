import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import about_img_1 from "@assets/img/bg/fea-4.png";
import about_img_2 from "@assets/img/bg/fea-41.png";

const about_content = {
    title_1: "Powered by Intellect Driven by Values",
    des_1: <>Kind waters day he green form you're had is first dry a place very second creepeth so place beginning whose replenish
    cattle him said created, unto seas moving them.</>,
    features: [
        <>Together blessed own them to beginning own forth create</>,
        <>Together blessed own them to beginning own forth create</>,
        <>Together blessed own them to beginning own forth create</>,
    ],
    title_2: "Business Mechanisms to Accelerate Change",


}
const {title_1, des_1, features, title_2}  = about_content


const AboutArea = () => {
    return (
        <>
           <div className="xn-about-area pt-110 fix">
                <div className="container">

                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="xn-about-img mb-30 wow fadeInLeft animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <Image src={about_img_1} alt="theme-pure" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 offset-lg-1">
                            <div className="xn-about-content mb-30 pt-40">
                                <h2>{title_1}</h2>
                                <p>{des_1}</p>
                                <ul>
                                    {features.map((list, i) => <li key={i}><i className="ti-check-box"></i> <span>{list}</span></li>)}
                                </ul>
                                <div data-aos="fade-up" className="aos-init aos-animate">
                                    <Link href="#" className="btn-grad-4" >learn more</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-50">
                        <div className="col-xl-6 col-lg-6">
                            <div className="xn-about-content mb-30 pt-40 pr-50">
                                <h2>{title_2}</h2>
                                <p>{des_1}</p>
                                <ul>
                                    {features.map((item, index) =>
                                    <li key={index}><i className="ti-check-box"></i> <span>{item}</span></li>                                    
                                    )} 
                                </ul>
                                <div data-aos="fade-up" className="aos-init aos-animate">
                                    <a href="#" className="btn-grad-4" >learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="xn-about-img-right mb-30 pl-70 wow fadeInRight animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <Image src={about_img_2} alt="theme-pure" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div> 
        </>
    );
};

export default AboutArea;