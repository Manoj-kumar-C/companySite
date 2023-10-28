import React from 'react';
import Image from "next/image";
// service icons import here
import service_icon_1 from "@assets/img/icon/ss-01.png";
import service_icon_2 from "@assets/img/icon/ss-02.png";
import service_icon_3 from "@assets/img/icon/ss-03.png";
// service data here 
const service_data = [
    {
        id: 1,
        icon: service_icon_1,
        title: "Unlimited Content",
        description: <>Stars air over land bring life female stars dry be abundantly may green te which fill after our behold very god spir.</>,
    },
    {
        id: 2,
        icon: service_icon_2,
        title: "Easy To Access",
        description: <>Stars air over land bring life female stars dry be abundantly may green te which fill after our behold very god spir.</>,
    },
    {
        id: 3,
        icon: service_icon_3,
        title: "Save Your Time",
        description: <>Stars air over land bring life female stars dry be abundantly may green te which fill after our behold very god spir.</>,
    },
] 
const ServiceArea = ({about, style_fancy}) => {
    return (
        <>
            <div className={`soft-area pos-relative ${about ? "" : "pt-140"} pb-115`}>
                <div className="shape-slider">
                    <span className="shape shape-circle shape-c5-1"></span>
                    <span className="shape shape-circle shape-c5-2"></span>
                    <span className="shape shape-circle shape-c5-3"></span>
                </div>
                <div className="container">
                    {style_fancy ? null :
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2">
                                <div className="section-title-3 text-center mb-70">
                                    <h2 className="mb-20">Improve the Software stability</h2>
                                    <p>Him have deep brought life darkness firmament unto move</p>
                                </div>
                            </div>
                        </div>                    
                    }
                    <div className="row">
                        {service_data.map((item, i) => 
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="soft-fea-list text-center mb-30">
                                    <div className="soft-fea-list-img mb-35">
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

export default ServiceArea;