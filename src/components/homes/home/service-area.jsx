import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// service icon import here
import service_icon_1 from "@assets/img/icon/gea-01.png";
import service_icon_2 from "@assets/img/icon/gea-02.png";
import service_icon_3 from "@assets/img/icon/gea-03.png";
// service data 
const service_data = [
    {
        id: 1, 
        icon: service_icon_1,
        active: "",
        title: "Project Management",
        info: <>Behold living. Creeping gathered give sea third multiply midst winged tree bring wherein living itsmoving our him dry female his lights herb.</>,
    },
    {
        id: 2, 
        icon: service_icon_2,
        active: "active",
        title: "User Analytics",
        info: <>Behold living. Creeping gathered give sea third multiply midst winged tree bring wherein living itsmoving our him dry female his lights herb.</>,
    },
    {
        id: 3, 
        icon: service_icon_3,
        active: "",
        title: "Cloud Service",
        info: <>Behold living. Creeping gathered give sea third multiply midst winged tree bring wherein living itsmoving our him dry female his lights herb.</>,
    },

]

const ServiceArea = ({style_fancy}) => {
    return (
        <>
           <div className="fea-list-4-area pt-140">
                <div className="container">
                    {style_fancy ? "" :
                        <div className="row">
                            <div className="col-xl-8 col-lg-10 offset-lg-1 offset-xl-2">
                                <div className="section-title-2 text-center mb-70">
                                    <h2 className="mb-20">Making Great Things Possible</h2>
                                    <p>Land from day very fill that midst stars one dominion. Itself was let that divided itself god don't subdue wherein let
                                    behold over he whose of sea moved called.</p>
                                </div>
                            </div>
                        </div> 
                    }
                    <div className="row">
                        {service_data.map((item, i)  => 
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className={`feal-list-4-item ${item?.active} mb-30`}>
                                    <div className="fea-list-4-img mb-40">
                                        <Image src={item?.icon} alt="theme-pure" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.info}</p>
                                    <Link href="#">learn more<i className="ti-arrow-right"></i></Link>
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