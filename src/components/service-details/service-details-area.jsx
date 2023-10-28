import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import shape_line from "@assets/img/shape/line.png";
import service_banner from "@assets/img/service/banner.jpg";
import service_thumb from "@assets/img/service/service-details.jpg";
import service_blog_img_1 from "@assets/img/blog/img1.png";
import service_blog_img_2 from "@assets/img/blog/img2.png";

const s_details = {
    services_link: [
        {title: "Business Opportunity" , link: "#",},
        {title: "Creative Design" , link: "#",},
        {title: "Infinite Colors" , link: "#",},
        {title: "Pixel Precision" , link: "#",},
        {title: "Online Support" , link: "#",},
        {title: "Easy Customize" , link: "#",},
    ],
    title: "Digital Marketing",
    sm_des_1: <>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incidid labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullam laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Ut enim ad minim veniam, quis nostrud exercitation ullam laboris nisi ut aliquip exeas commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</>,
    sm_des_2: <>But we must ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</>,
    sm_des_3: <>Quis nostrud exercitation ullam laboris nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Ut enim ad minim veniam, quis
    nostrud exercitation ullam laboris nisi ut aliquip exeas commodo consequat. Duis aute
    irure dolor in reprehenderit in voluptate</>,
    features: [
        "Design must be functional",
        "Futionality must translated into",
        "Aenean pellentesque elit vitae",
        "Mattis effic iturut magna",
        "Lusce enim nulla mollis",
        "Phasellus eget purus id felis",
    ],
    sm_des_4: <>Pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual
    teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids
    pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter
    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of
    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some</>,
}
const {services_link, title, sm_des_1, sm_des_2, sm_des_3, features, sm_des_4} = s_details


const ServiceDetailsArea = () => {
    return (
        <>
            <section className="how-work-area pos-relative pt-150 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-30">
                            <div className="services-sidebar mb-40">
                                <div className="services-title">
                                    <h2>Services</h2>
                                    <div className="servicest-t-img mb-20">
                                        <Image src={shape_line} alt="theme-pure" />
                                    </div>
                                </div>
                                <ul className="services-link">
                                    {services_link.map((item, i) => 
                                        <li key={i}>
                                            <Link href={item.link}>
                                                <i className="fas fa-angle-right"></i>
                                                 {item.title}
                                            </Link>
                                        </li>                                    
                                    )} 
                                </ul>
                                <div></div>
                            </div>
                            <div className="services-banner">
                                <Link href="#"><Image src={service_banner} alt="theme-pure" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="service-images mb-30">
                                <Image className="img-fluid w-100" src={service_thumb} alt="theme-pure" />
                            </div>
                            <div className="service-details mt-4">
                                <h2 className="mb-25">{title}</h2>
                                <p>{sm_des_1}</p>
                                <p>{sm_des_2}</p>
                                <p>{sm_des_3}</p>
                                <ul className="custom-li list-unstyled list-icon-2 mt-15 mb-10">
                                    {features.map((feature, index) => 
                                        <li key={index}>{feature}</li>
                                    )} 
                                </ul>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="s-d-img mb-30">
                                            <Image src={service_blog_img_1} alt="theme-pure" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="s-d-img mb-30">
                                            <Image src={service_blog_img_2} alt="theme-pure" />
                                        </div>
                                    </div>
                                </div>
                                <p>{sm_des_4}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetailsArea;