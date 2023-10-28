import Image from 'next/image';
import React from 'react';

import shape_right from "@assets/img/shape/right-shape.png";
import right_img from "@assets/img/bg/hiw-right.png";

import feature_icon_1 from "@assets/img/icon/ma.png";
import feature_icon_2 from "@assets/img/icon/cd.png";
const hiw_content_2 = {
    top_title: "How its work",
    info: <>Whales female had days blessed together</>,
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
const { top_title, info, sm_des, features } = hiw_content_2


const HIWAreaTwo = () => {
    return (
        <>
           <div className="hiw-area pt-150 pb-120 pos-relative fix">
                <Image className="img-shape hiw-shape-right d-none d-lg-block" src={shape_right} alt="theme-pure" />
                <div className="container">
                    <div className="row">
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
                        <div className="col-xl-6 col-lg-6">
                            <div className="hiw-img-right mb-30 wow fadeInRight animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <Image src={right_img} alt="theme-pure" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default HIWAreaTwo;