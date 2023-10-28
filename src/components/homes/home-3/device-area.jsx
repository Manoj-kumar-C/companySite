import React from 'react';
import Link from "next/link"
import Image from 'next/image';
import device_img from "@assets/img/bg/rd-img.png";

const DeviceArea = ({style_service}) => {
    return (
        <>
            <div className="features-3-area pt-150 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="fea-3-img mb-30 wow fadeInLeft animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <Image src={device_img} alt="theme-pure" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 offset-xl-1">
                            <div className="fea-3-content pt-100 mb-30">
                                <span>responsive device</span>
                                <h2>Responsive all device
                                and user friendly</h2>
                                <p>Divide there our divide fifth creepeth second which multiply evening fill so abundantly let upon
                                    there saw light behold he bearing hath morning over lesser image said. Whales and second.</p>
                                <div data-aos="fade-up">
                                    <Link href="#" className="btn-grad" ><span>Read more</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeviceArea;