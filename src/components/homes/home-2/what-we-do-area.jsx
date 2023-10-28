import React from 'react';
import Image from 'next/image';
import Link from "next/link"
import shape_1 from "@assets/img/shape/shape-sq.png";

import icon_1 from "@assets/img/icon/what-1.png"; 
import icon_2 from "@assets/img/icon/what-2.png"; 
import icon_3 from "@assets/img/icon/what-3.png"; 

const what_do_data = [
    {
        id: 1, 
        icon: icon_1,
        title: "What We Do",
        info: <>In a World of Technology, People <br /> Make the Difference</>
    },
    {
        id: 2, 
        icon: icon_2,
        title: "Creative Design",
        info: <>In a World of Technology, People <br /> Make the Difference</>
    },
    {
        id: 3, 
        icon: icon_3,
        title: "Software Development",
        info: <>In a World of Technology, People <br /> Make the Difference</>
    },
] 
const WhatWeDoArea = ({style_fancy}) => {
    return (
        <>
            <section className={`what-we-do-area pos-relative ${style_fancy && "pt-140"} pb-120`}>
                <div className="shape-slider">
                    <span className="shape shape-circle shape-c-3 "></span>
                    <Image className="shape shape-wh-1" src={shape_1} alt="theme-pure" />
                </div>
                <div className="container">
                    {style_fancy ? null : 
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2">
                                <div className="section-title-2 text-center mb-70">
                                    <span>What We Do</span>
                                    <h2>In a World of Technology, People <br /> Make the Difference</h2>
                                </div>
                            </div>
                        </div>                    
                    }
                    <div className="row">
                        {what_do_data.map((item, i) => 
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="what-do-list text-center mb-30">
                                    <div className="what-icon">
                                        <span></span>
                                        <Image src={item.icon} alt="theme-pure" />
                                    </div>
                                    <div className="what-text pt-35 mt-40">
                                        <h3>{item.title}</h3>
                                        <p>{item.info}</p>
                                        <Link href="#">More about research</Link>
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

export default WhatWeDoArea;