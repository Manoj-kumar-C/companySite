import React from 'react';
import Link from 'next/link';
import Image from "next/image";

// service icons import here
import service_icon_1 from "@assets/img/icon/exf1.png";
import service_icon_2 from "@assets/img/icon/exf2.png";
import service_icon_3 from "@assets/img/icon/exf3.png";
// service data 
const service_data = [
    {
        id: 1,
        icon: service_icon_1,
        title: "User Analytics",
        info: <>Behold living. Creeping gathered give sea third multiply midst winged tree bring wherein living
            itsmoving our him dry female his lights herb.</>
    },
    {
        id: 2,
        icon: service_icon_2,
        title: "Export Presets",
        info: <>Behold living. Creeping gathered give sea third multiply midst winged tree bring wherein living
            itsmoving our him dry female his lights herb.</>
    },
    {
        id: 3,
        icon: service_icon_3,
        title: "Cloud Service",
        info: <>Behold living. Creeping gathered give sea third multiply midst winged tree bring wherein living
            itsmoving our him dry female his lights herb.</>
    },
] 
const ServiceArea = ({style_fancy}) => {
    return (
        <>
            <div className={`fea-list-4-area pos-relative ${style_fancy ? "pb-110" : "pt-140"}`}>
                <div className="container">
                    {style_fancy ? null : 
                        <div className="row">
                            <div className="col-xl-7 col-lg-8">
                                <div className="section-title-2 section-title-4 mb-70">
                                    <span>excellent feature</span>
                                    <h2>We are building software to help people manage business.</h2>
                                </div>
                            </div>
                        </div>                    
                    }
                    <div className="row">
                        {service_data.map((item, i) =>
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="feal-list-4-item feal-list-5-item mb-30">
                                    <div className="fea-list-4-img mb-40">
                                        <Image src={item.icon} alt="theme-pure" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.info}</p>
                                    <Link href="/service-details">learn more <i className="ti-arrow-right"></i></Link>
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