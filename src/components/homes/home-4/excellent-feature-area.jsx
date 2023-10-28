import Image from 'next/image';
import React from 'react';
import shape_line from "@assets/img/shape/line.png";

import excellent_img_1 from "@assets/img/icon/ex1.png";
import excellent_img_2 from "@assets/img/icon/ex2.png";
import excellent_img_3 from "@assets/img/icon/ex3.png";
import excellent_img_4 from "@assets/img/icon/ex4.png";
import excellent_img_5 from "@assets/img/icon/ex5.png";
import excellent_img_6 from "@assets/img/icon/ex6.png"; 


const excellent_feature_data = [
    {
        id: 1, 
        icon: excellent_img_1,
        title: "Business Opportunity",
        des: <>Given stars herb olive eghts you and earth bea you fourt earth second an multip made thats were upon an form</>,
    },
    {
        id: 2, 
        icon: excellent_img_2,
        title: "Infinite Colors",
        des: <>Given stars herb olive eghts you and earth bea you fourt earth second an multip made thats were upon an form</>,
    },
    {
        id: 3, 
        icon: excellent_img_3,
        title: "Pixel Precision",
        des: <>Given stars herb olive eghts you and earth bea you fourt earth second an multip made thats were upon an form</>,
    },
    {
        id: 4, 
        icon: excellent_img_4,
        title: "Creative Design",
        des: <>Given stars herb olive eghts you and earth bea you fourt earth second an multip made thats were upon an form</>,
    },
    {
        id: 5, 
        icon: excellent_img_5,
        title: "Online Support",
        des: <>Given stars herb olive eghts you and earth bea you fourt earth second an multip made thats were upon an form</>,
    },
    {
        id: 6, 
        icon: excellent_img_6,
        title: "Easy Customize",
        des: <>Given stars herb olive eghts you and earth bea you fourt earth second an multip made thats were upon an form</>,
    },
]

const ExcellentFeatureArea = ({style_service_2}) => {
    return (
        <> 
           <div className={`excellent-feature-area ${style_service_2 && "pt-150"} fix`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="section-title-2 text-center mb-70">
                                <span className="st-sub">Excellent feature</span>
                                <h2 className="mb-20 f-600">Success with every solution</h2>
                                <Image src={shape_line} alt="theme-pure" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {excellent_feature_data.map((item, i) => 
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="ex-fea-list mb-60">
                                    <div className="ex-fea-img mb-30">
                                        <Image src={item.icon} alt="theme-pure" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.des}</p>
                                </div>
                            </div>
                        )} 
                    </div>
                </div>
            </div> 
        </>
    );
};

export default ExcellentFeatureArea;