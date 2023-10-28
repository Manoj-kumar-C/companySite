import React from 'react';
import Image from 'next/image';
// feature img & icons import here
import feature_img_1 from "@assets/img/shape/shape-tri.png";
import feature_img_2 from "@assets/img/shape/shape-zigzag.png";
import feature_img_3 from "@assets/img/bg/fea-img.png";

import feature_icon_1 from "@assets/img/icon/fea-icon-1.png";
import feature_icon_2 from "@assets/img/icon/fea-icon-2.png";
import feature_icon_3 from "@assets/img/icon/fea-icon-3.png";
import feature_icon_4 from "@assets/img/icon/fea-icon-4.png";

// feature data here
const feature_data = [
    {
        id: 1, 
        icon: feature_icon_1,
        title: "Awesome feature",
        info: <>Sometimes the best way to envision <br /> the future is to invent it.</>,
    },
    {
        id: 2, 
        icon: feature_icon_2,
        title: "Multiple Layouts",
        info: <>Nascetur nisi luctus lacinian torque netus praesent proin pede.</>,
    },
    {
        id: 3, 
        icon: feature_icon_3,
        title: "Responsive design",
        info: <>Nascetur nisi luctus lacinian torque netus praesent proin pede.</>,
    },
    {
        id: 4, 
        icon: feature_icon_4,
        title: "Best Supported",
        info: <>Nascetur nisi luctus lacinian torque netus praesent proin pede.</>,
    },
] 


const FeaturesArea = () => {
    return (
        <>
           <section className="features-area pos-relative pt-150 pb-120">
                <div className="shape-slider">
                    <span className="shape shape-circle shape-c-2 "></span>
                    <Image className="shape shape-af-1" src={feature_img_1} alt="theme-pure" />
                    <Image className="shape shape-af-2" src={feature_img_2} alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="section-title-2 text-center mb-70">
                                <span>Awesome feature</span>
                                <h2>Sometimes the best way to envision <br />
                                the future is to invent it.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="features-image wow fadeInLeft animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <Image src={feature_img_3} alt="theme-pure" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="row features-parent pt-90">
                                {feature_data.map((item, i) => 
                                    <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="features-list mb-55">
                                            <div className="fea-icon mb-20">
                                                <span></span>
                                                <Image src={item.icon} alt="theme-pure" />
                                            </div>
                                            <div className="fea-text">
                                                <h3>{item.title}</h3>
                                                <p>{item.info}</p>
                                            </div>
                                        </div>
                                    </div>
                                )} 
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default FeaturesArea;