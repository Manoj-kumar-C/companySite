import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import shape_img from "@assets/img/shape/shape-tri.png";

// price data
const price_data = [
    {
        id: 1, 
        price: 25,
        active: "",
        title: "Standard",
        price_plan_list: [
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
        price: 35,
        active: "active",
        title: "Professional",
        price_plan_list: [
            "25GB Cloud Storage",
            "Unlimited Account",
            "25GB Storage",
            "Sale After Service",
            "5 Host Domain Service",
            "24/7 Support",
        ],
    },
    {
        id: 3, 
        price: 45,
        active: "",
        title: "Business",
        price_plan_list: [
            "35GB Cloud Storage",
            "Unlimited Account",
            "30GB Storage",
            "Sale After Service",
            "7 Host Domain Service",
            "24/7 Support",
        ],
    },
    {
        id: 4, 
        price: 65,
        active: "",
        title: "Ultimate",
        price_plan_list: [
            "100GB Cloud Storage",
            "Unlimited Account",
            "50GB Storage",
            "Sale After Service",
            "10 Host Domain Service",
            "24/7 Support",
        ],
    },
]

const PriceAreaHomeFive = ({style_price}) => {
    return (
        <>
            <section className={`price-area pos-relative ${style_price ? "" : "pt-150"} pb-120`}>
                <div className="shape-slider">
                    <Image className="shape shape-1 shape-5-1 " src={shape_img} alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="section-title-3 text-center mb-70">
                                <h2 className="mb-20">No hidden charge, Affordable plan</h2>
                                <p>Him have deep brought life darkness firmament unto move</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {price_data.map((item, i)  => 
                            <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                                <div className={`price-box ${item.active } text-center mb-30`}>
                                    <div className="price-header price-header-3 mb-35">
                                        <h3>{item.title}</h3>
                                        <div className="price-text">
                                            <h4>${item.price}/<span>month</span></h4>
                                        </div>
                                    </div>
                                    <div className="price-plan-list">
                                        <ul>
                                            {item.price_plan_list.map((list, index) => 
                                             <li key={index}>{list}</li>                                            
                                            )} 
                                        </ul>
                                    </div>
                                    <div className="price-link price-link-2">
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

export default PriceAreaHomeFive;