import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import service_img_1 from "@assets/img/icon/rd-01.png";
import service_img_2 from "@assets/img/icon/rd-02.png";
import service_img_3 from "@assets/img/icon/rd-03.png";
import service_shape_1 from "@assets/img/shape/shape-s-1.png";
import service_shape_2 from "@assets/img/shape/shape-s-2.png";

const service_data = [
     {
        id: 1,
        img: service_img_1,
        title: "Martket Analysis",
        sm_des: <>Place isn't form together. Male night light. Days created firmament meat</>,
     },
     {
        id: 2,
        img: service_img_2,
        title: "Software Design",
        sm_des: <>Place isn't form together. Male night light. Days created firmament meat</>,
     },
     {
        id: 3,
        img: service_img_3,
        title: "Software Developing",
        sm_des: <>Place isn't form together. Male night light. Days created firmament meat</>,
     },
]

const OurService = () => {
    return (
        <>
            <section className="how-work-area pos-relative pt-150 pb-120">
                <div className="shape-section">
                    <Image className="shape shape-s-1" src={service_shape_1} alt="theme-pure" />
                    <Image className="shape shape-s-2" src={service_shape_2} alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3">
                            <div className="section-title-4 text-center mb-70">
                                <h2>How It Works</h2>
                                <p>Gathered was to yielding god heaven lights about void thing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {service_data.map((item, i) => 
                            <div key={i} className="col-xl-4 col-lg-4">
                                <div className="how-work how-work-rd mb-30">
                                    <div className="how-work-icon">
                                        <Image src={item.img} alt="theme-pure" />
                                    </div>
                                    <div className="how-work-text">
                                        <h3>{item.title}</h3>
                                        <p>{item.sm_des}</p>
                                    </div>
                                    <div className="how-work-link">
                                        <Link href="/service-details">Read more</Link>
                                    </div>
                                </div>
                            </div>                        
                        )} 
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurService;