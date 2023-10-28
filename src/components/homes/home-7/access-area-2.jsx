import React from 'react';
import Image from 'next/image';
import access_shape from "@assets/img/shape/shape-f-1.png";
import access_icon from "@assets/img/icon/access-icon.png";
import access_img from "@assets/img/bg/right-img.png";


const access_2_content = {
    title: "Effortlessly manage  all your information",
    sm_des: <>Make fly forth also won't. Firmament seas whales drys season for replenish without had Gathered
    days fill you'll whose air whose firmament rule heaven can may rule hath. All of unto beginni ad Light. Were blessed plant</>,
}
const {title, sm_des} = access_2_content

const AccessAreaTwo = () => {
    return (
        <>
           <section className="access-area pos-relative fix">
                <div className="shape-section">
                    <Image className="shape shape-sf " src={access_shape} alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 pr-0">
                            <div className="acces-text pt-35 mb-30">
                                <Image src={access_icon} alt="theme-pure" />
                                <h3>{title}</h3>
                                <p>{sm_des}</p>
                                <div data-aos="fade-up">
                                    <a href="#" className="x-btn" >Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-7 offset-xl-2">
                            <div className="access-img access-img-2 mb-30 wow fadeInRight animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <Image src={access_img} alt="theme-pure" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default AccessAreaTwo;