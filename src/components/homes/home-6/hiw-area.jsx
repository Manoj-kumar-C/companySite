import React from 'react';
import Image from 'next/image';

import hiw_shape_1 from "@assets/img/shape/shape-tr-2.png";
import hiw_shape_2 from "@assets/img/shape/shape-c-1.png";
import hiw_shape_3 from "@assets/img/shape/left-shape.png";
import hiw_img_1 from "@assets/img/bg/hiw-left.png";


import feature_icon_1 from "@assets/img/icon/ma.png";
import feature_icon_2 from "@assets/img/icon/cd.png";

const hiw_content = {
    top_title: "How its work",
    info: <>Midst midst bearing whale first beast saying move</>,
    sm_des: <>Divide Lesser living seas a wherein dominion place fruitful over set spirit kind firmament divide said unto moveth
        creepeth above subdue living morning brough.</>,
    features: [
        {
            id: 1,
            icon: feature_icon_1,
            title: "Market Analysis",
            sub_title: <>It our dry subdue also beginning seasons for don't second above.</>
        },
        {
            id: 2,
            icon: feature_icon_2,
            title: "Creative Design",
            sub_title: <>It our dry subdue also beginning seasons for don't second above.</>
        },
    ]


}
const { top_title, info, sm_des, features } = hiw_content

const HIWArea = () => {
    return (
        <>
            <div className="hiw-area pt-150 pb-120 pos-relative">
                <div className="shape-slider">
                    <Image className="shape shape-1 shape-5-1 " src={hiw_shape_1} alt="theme-pure" />
                    <Image className="shape shape-5 " src={hiw_shape_2} alt="theme-pure" />
                </div>
                <Image className="img-shape hiw-shape d-none d-lg-block" src={hiw_shape_3} alt="theme-pure" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="hiw-img-left mb-30 wow fadeInLeft animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <Image src={hiw_img_1} alt="theme-pure" />
                            </div>
                        </div> 
                        <div className="col-xl-6 col-lg-6">
                            <div className="section-title-2 section-title-4 mb-20">
                                <span>{top_title}</span>
                                <h2>{info}</h2>
                            </div>
                            <div className="hiw-text mb-30">
                                <p>{sm_des}</p>

                                <div className="hiw-list-wrapper mt-40">
                                    {features.map((item, i) =>
                                        <div key={i} className="hiw-list fix mb-40">
                                            <div className="hiw-icon f-left">
                                                <Image src={item.icon} alt="theme-pure" />
                                            </div>
                                            <div className="hiw-list-text fix">
                                                <h4>{item.title}</h4>
                                                <p>{item.sub_title}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HIWArea;