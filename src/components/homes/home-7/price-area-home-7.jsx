import React from 'react';
import Image from "next/image";
import  Link from 'next/link'
import price_icon from "@assets/img/icon/price-icon.png";

const pricing_data = [
    {
        id: 1,
        active: "",
        category: "Standard",
        price: 20,
        features: [
            "15GB Cloud Storage",
            "Unlimited Account",
            "15GB Storage",
            "Sale After Service",
            "3 Host Domain Service",
            "24/7 Support",
        ],
    },
    {
        id: 2,
        active: "active",
        category: "Professional",
        price: 30,
        features: [
            "25GB Cloud Storage",
            "Unlimited Account",
            "15GB Storage",
            "Sale After Service",
            "3 Host Domain Service",
            "24/7 Support",
        ],
    },
    {
        id: 3,
        active: "",
        category: "Business",
        price: 40,
        features: [
            "35GB Cloud Storage",
            "Unlimited Account",
            "15GB Storage",
            "Sale After Service",
            "3 Host Domain Service",
            "24/7 Support",
        ],
    },
    {
        id: 4,
        active: "",
        category: "Ultimate",
        price: 100,
        features: [
            "100GB Cloud Storage",
            "Unlimited Account",
            "15GB Storage",
            "Sale After Service",
            "3 Host Domain Service",
            "24/7 Support",
        ],
    },
]

const PriceAreaHomeSeven = ({style_price}) => {
    return (
        <>
            <section className={`price-area pos-relative ${style_price ? "" : "pt-150"} pb-120`}>
                <div className="shape-section">
                    <img className="shape shape-p " src="assets/img/shape/shape-f-1.png" alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3">
                            <div className="section-title text-center mb-70">
                                <h2>Pricing Plan</h2>
                                <p>Gathered was to yielding god heaven lights about void thing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {pricing_data.map((item, i) => 
                            <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                                <div className={`price-box ${item.active} text-center mb-30`}>
                                    <div className="price-header mb-35">
                                        <Image src={price_icon} alt="theme-pure" />
                                        <h3>{item.category}</h3>
                                        <div className="price-text">
                                            <h4>${item.price}/<span>month</span></h4>
                                        </div>
                                    </div>
                                    <div className="price-plan-list">
                                        <ul>
                                            {item.features.map((feature, index) => 
                                                <li key={index}>{feature}</li>
                                            )} 
                                        </ul>
                                    </div>
                                    <div className="price-link">
                                        <Link href="/price">Purchase Now</Link>
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

export default PriceAreaHomeSeven;