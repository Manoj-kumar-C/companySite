import React from 'react';
import Image from "next/image";

import shape_line_img from "@assets/img/shape/line.png";
import work_img_1 from "@assets/img/icon/hw-1.png";
import work_img_2 from "@assets/img/icon/hw-2.png";
import work_img_3 from "@assets/img/icon/hw-3.png";
import work_img_4 from "@assets/img/icon/hw-4.png"; 

const work_data = [
    {
        id: 1, 
        icon: work_img_1, 
        title: "Market Research",
        description: <>Days for two every where does dreen fruitful also fruitful seasons un won the fowl light deep sixth dominion.</>,
    },
    {
        id: 2, 
        icon: work_img_2, 
        title: "Create Wireframe",
        description: <>Days for two every where does dreen fruitful also fruitful seasons un won the fowl light deep sixth dominion.</>,
    },
    {
        id: 3, 
        icon: work_img_3, 
        title: "Creative Design",
        description: <>Days for two every where does dreen fruitful also fruitful seasons un won the fowl light deep sixth dominion.</>,
    },
    {
        id: 4, 
        icon: work_img_4, 
        title: "Creative Design",
        description: <>Days for two every where does dreen fruitful also fruitful seasons un won the fowl light deep sixth dominion.</>,
    },

]
const HWArea = ({style_service_2, process, style_fancy}) => {
    return (
        <>                    
            <div className={`${style_service_2 ? "hw-area-2 mb-120" : process ? "hw-area pt-145 pb-120" : style_fancy? "hw-area" : "hw-area hw-position"} fix`}>
                <div className="container">
                    {style_fancy ? null :
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2">
                                <div className="section-title-2 text-center mb-70">
                                    <span className="st-sub">How we works</span>
                                    <h2 className="mb-20 f-600">Easy Working Process</h2>
                                    <Image src={shape_line_img} alt="theme-pure" />
                                </div>
                            </div>
                        </div>                    
                    }
                    <div className="row">
                        {work_data.map((item, i)  =>
                            <div key={i} className="col-lg-3 col-md-6">
                                <div className="hw-list text-center mb-30">
                                    <div className="ex-fea-img hw-list-img mb-30">
                                        <Image src={item.icon} alt="theme-pure" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>                        
                        )} 
                    </div>
                </div>
            </div>
        </>
    );
};

export default HWArea;