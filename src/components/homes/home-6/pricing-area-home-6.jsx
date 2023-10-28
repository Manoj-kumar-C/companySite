import React from 'react';
import Image from "next/image";
import Link from "next/link";



import standard_icon from "@assets/img/price/p1.png";
import professional_icon from "@assets/img/price/p2.png"; 

const pricing_data_home_6 = [
    // monthly price 
    {
        id: 1,
        active: "show active",
        tab_id: "monthly-tab-pane-3",
        aria_labelledby: "monthly-tab-3",
        price_inner: [
            {
                id:1,
                icon: standard_icon,
                category: "Standard",
                price: 32.50,
                info: <>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</>,             
            },
            {
                id:2,
                icon: professional_icon,
                category: "Professional",
                price: 45.50,
                info: <>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</>,             
            }, 
        ], 
    }, 
    // annual price 
    {
        id: 2,
        active: "",
        tab_id: "annual-tab-pane-3",
        aria_labelledby: "annual-tab-3",
        price_inner: [
            {
                id:1,
                icon: standard_icon,
                category: "Standard",
                price: 79.50,
                info: <>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</>,             
            },
            {
                id:2,
                icon: professional_icon,
                category: "Professional",
                price: 89.50,
                info: <>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</>,             
            }, 
        ], 
    },  
]





const PricingAreaHomeSix = () => {
    return (
        <>
           <section className="pricing-area pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="section-title-2 section-title-4 mb-70">
                                <span>Pricing plan</span>
                                <h2>No extra charges!
                                choose your plan</h2>
                                <div className="mb-30"></div>
                                <p>Gathering creepeth good divide yielding living lesser signs itseld Sea made isn't together be have yielding after light
                                which days there minion isn't spirit to</p>
                                <div className="mb-30"></div>
                                <ul className="nav price-tab-menu price-tab-menu-2 d-block " id="myTab" role="tablist">  
                                <li className="nav-item" role="presentation">
                                <button 
                                    className="nav-link active" 
                                    id="monthly-tab-3" 
                                    data-bs-toggle="tab"
                                    data-bs-target="#monthly-tab-pane-3"
                                    type="button"
                                    role="tab"
                                    aria-controls="monthly-tab-pane-3"
                                    aria-selected="true"
                                    tabIndex="-1" 
                                    >
                                        Monthly
                                    </button>
                                </li> 
                            <   li className="nav-item" role="presentation">
                                    <button 
                                    className="nav-link" 
                                    id="annual-tab-3" 
                                    data-bs-toggle="tab" 
                                    data-bs-target="#annual-tab-pane-3" 
                                    type="button"
                                    role="tab"  
                                    aria-controls="annual-tab-pane-3"
                                    aria-selected="false" 
                                    tabIndex="-1"
                                    >Annual</button>
                                </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="price-tab">
                                <div className="tab-content" id="myTabContent">
                                    {pricing_data_home_6.map((item, i)  => 
                                        <div key={i} 
                                        className={`tab-pane fade ${item.active}`} 
                                        id={item.tab_id}
                                        role="tabpanel" 
                                        aria-labelledby={item.aria_labelledby}>
                                            <div className="row">
                                                {item.price_inner && 
                                                item.price_inner?.map((feature, index) => 
                                                    <div key={index} className="col-md-6">
                                                        <div className="pricing-tab text-center mb-30">
                                                            <div className="price-img pb-50 mb-40">
                                                                <Image src={feature.icon} alt="theme-pure" />
                                                            </div>
                                                            <div className="price-value mb-25">
                                                                <h2>${feature.price}</h2>
                                                                <span>{feature.category}</span>
                                                            </div>
                                                            <p>{feature.info}</p>
                                                            <Link href="#" className="x-btn btn-border btn-squ btn-red-hover">get package</Link>
                                                        </div>
                                                    </div>                                                 
                                                )}
                                            </div>
                                        </div>   
                                    )}  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default PricingAreaHomeSix;