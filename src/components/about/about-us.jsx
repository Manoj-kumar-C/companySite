import React from 'react';
import Image from 'next/image';
import about_img from "@assets/img/bg/fea-3.png";

const about_content = {
    sub_title: "our history",
    title: "For the next generation of big businesses",
    sm_des_1: <>Divide there our divide fifth creepeth second which multiply evening fill so abundantly let upon
    there saw light behold he bearing hath morning over lesser image said. Whales and second.</>,
    sm_des_2: <>Divide there our divide fifth creepeth second which multiply so evening fill abundantly let upon there saw light behold
    he bearing inhath morning on lesser image said. Whales and second. Divide man poe there our divide fifh creepeth second
    which multiply evening</>,
}
const {sub_title, title, sm_des_1, sm_des_2} = about_content

const AboutUs = () => {
    return (
        <>
             <div className="features-3-area features-3-area-top pt-150 pb-100 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 ">
                            <div className="fea-3-img mb-30 wow fadeInLeft animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <Image src={about_img} alt="theme-pure" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 offset-xl-1">
                            <div className="fea-3-content mb-30 pt-150">
                                <span className="theme-color-sub">{sub_title}</span>
                                <h2>{title}</h2>
                                <p>{sm_des_1}</p>
                                <p>{sm_des_2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;