import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import breadcrumb_shape_1 from "@assets/img/shape/shape2.png";
import breadcrumb_shape_2 from "@assets/img/shape/shape3.png";
import breadcrumb_shape_3 from "@assets/img/shape/shape-sq.png";
import breadcrumb_shape_4 from "@assets/img/shape/shape-c-2.png";

const Breadcrumb = ({top_title="About This Page", title= "title"}) => {
    return (
        <>
        <div className="page-title-area pos-relative gray-bg pt-90 pb-60 fix" 
                style={{backgroundImage: `url(/assets/img/bg/page-title-bg.jpg)`}}>
                <div className="shape-slider">
                    <Image className="shape shape-2" src={breadcrumb_shape_1} alt="theme-pure" />
                    <Image className="shape shape-4" src={breadcrumb_shape_2} alt="theme-pure" />
                    <Image className="shape shape-5" src={breadcrumb_shape_3} alt="theme-pure" />
                    <Image className="shape shape-6" src={breadcrumb_shape_4} alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="page-title mb-30">
                                <h3>{top_title}</h3>
                                <p>Go fifth signs dry light sea created greater</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="breadcrumb-list text-left text-lg-end mb-30">
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li>{title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default Breadcrumb;