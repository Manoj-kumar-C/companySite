import React from 'react';
import Image from 'next/image';
import shape from "@assets/img/shape/shape5.png";

const NewsletterArea = () => {
    return (
        <>
           <section className="newsletter-area pos-relative pb-100">
                <div className="shape-section">
                    <Image className="shape shape-sr " src={shape} alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="section-title text-center mb-70">
                                <h2>Experience the most simple way to manage business</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 offset-lg-1 offset-xl-2">
                            <div className="newsletter">
                                <form onClick={(e) => e.preventDefault()}>
                                    <input type="email" placeholder="Enter your email" />
                                    <button type="submit">free trial</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default NewsletterArea;