import Image from 'next/image';
import React from 'react';

import about_us_img from "@assets/img/bg/hw-img.png";
import Link from 'next/link';

const AboutArea = () => {
    return (
        <>
           <div className="features-3-area pt-120 pb-110 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="fea-3-content pt-150">
                                <span>how it works</span>
                                <h2>For the next generation of big businesses</h2>
                                <p>Divide there our divide fifth creepeth second which multiply evening fill so abundantly let upon
                                    there saw light behold he bearing hath morning over lesser image said. Whales and second.</p>
                                <div data-aos="fade-up">
                                    <Link href="#" className="btn-grad"><span>Read more</span></Link>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1">
                            <div className="fea-3-img-right wow fadeInRight animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <Image src={about_us_img} alt="theme-pure" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default AboutArea;