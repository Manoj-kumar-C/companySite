import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import advance_img from "@assets/img/bg/add.png";


const AdvanceFeature = () => {
    return (
        <>
            <div className="xn-about-area pt-60 pb-100 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="xn-about-content xn-about-5 mb-30 pt-70 pr-40">
                                <span className="d-block mb-15">Advance feature</span>
                                <h2>Easy and perfect solution for your app</h2>
                                <p>Firmament after it our female herb so greatful signs days saw that fry stars after open form given thing good.</p>
                                <div className="mb-20"></div>
                                <p>Spirit beginning gathering, given us esser land saying god under said fill grass whales made female second darkness
                                bring, to from open grass you sea above moving herb cant</p>
                                <div className="mb-30"></div>
                                <div data-aos="fade-up">
                                    <Link href="/about" className="x-btn btn-border btn-orange" >About more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="xn-about-img-2-right mb-30 wow fadeInRight animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <Image src={advance_img} alt="theme-pure" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdvanceFeature;