import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import service_data from '@/src/data/service-data';
 
const ServiceArea = ({style_fancy}) => {
    return (
        <>
            <div className={`fea-list-area fix ${style_fancy && "pb-120"}`}>
                <div className="container">
                    {style_fancy ? null : 
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2">
                                <div className="section-title-pink text-center mb-70">
                                    <span>Awesome feature</span>
                                    <h2>Committed to People Committed <br /> to the Future</h2>
                                </div>
                            </div>
                        </div>                    
                    }
                    <div className="row fea-pr">
                        {service_data.map((item, i) => 
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="feal-list-item text-center mb-30">
                                    <div className="fea-list-img">
                                        <Image src={item.icon} alt="theme-pure" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <Link href="/service-details">see more details</Link>
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