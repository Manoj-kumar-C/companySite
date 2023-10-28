import React from 'react';
import FaqForm from '../forms/faq-form';
import Image from "next/image";

import faq_img from "@assets/img/bg/faq_banner.jpg";

const FaqFormArea = () => {
    return (
        <>
            <section className="faq-form-area pb-130">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="section-title-4 mb-55">
                                <span>Contact us</span>
                                <h2>Do You Have Any <br /> Questions</h2>
                            </div>
                            <div className="faq-form">
                                <FaqForm /> 
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="faq-add-banner">
                                <Image src={faq_img} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FaqFormArea;