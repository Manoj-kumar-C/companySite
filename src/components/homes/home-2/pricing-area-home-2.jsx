import React from 'react';
import Image from "next/image";
import Link from "next/link";

import standard_icon from "@assets/img/price/price-tab1.png";
import professional_icon from "@assets/img/price/price-tab2.png";
import business_icon from "@assets/img/price/price-tab3.png";

const pricing_data_home_2 = [
    // monthly price 
    {
        id: 1,
        active: "show active",
        tab_id: "monthly-tab-pane-2",
        aria_labelledby: "monthly-tab-2",
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
            {
                id:3,
                category: "Business",
                icon: business_icon,
                price: 65.50,
                info: <>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</>,             
            },
        ], 
    }, 
    // annual price 
    {
        id: 2,
        active: "",
        tab_id: "annual-tab-pane-2",
        aria_labelledby: "annual-tab-2",
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
            {
                id:3,
                category: "Business",
                icon: business_icon,
                price: 99.50,
                info: <>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</>,             
            },
        ], 
    },  
]



const PricingAreaHomeTwo = ({style_price}) => {
    return (
        <> 
            <section className={`${style_price ? "" : "pricing-area pt-140 pos-relative pb-120"}`}>
                <div className="shape-slider">
                    <img className="shape shape-pr-1" src="assets/img/shape/shape-c-1.png" alt="theme-pure" />
                    <img className="shape shape-pr-2" src="assets/img/shape/shape-c-2.png" alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3">
                            <div className="section-title-2 text-center mb-70">
                                <span>Pricing plan</span>
                                <h2>No Extra Charges! Choose
                                your Plan.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="price-tab">
                        <ul className="nav price-tab-menu price-tab-menu-3 text-center" id="myTab" role="tablist">                           
                            <li className="nav-item" role="presentation">
                                <button 
                                    className="nav-link active" 
                                    id="monthly-tab-2" 
                                    data-bs-toggle="tab"
                                    data-bs-target="#monthly-tab-pane-2"
                                    type="button"
                                    role="tab"
                                    aria-controls="monthly-tab-pane-2"
                                    aria-selected="true"
                                    tabIndex="-1" 
                                    >
                                        Monthly
                                    </button>
                            </li> 
                            <li className="nav-item" role="presentation">
                                <button 
                                className="nav-link" 
                                id="annual-tab-2" 
                                data-bs-toggle="tab" 
                                data-bs-target="#annual-tab-pane-2" 
                                type="button"
                                role="tab"  
                                aria-controls="annual-tab-pane-2"
                                aria-selected="false" 
                                tabIndex="-1"
                                >Annual</button>
                            </li>
                        </ul>

                        <div className="tab-content" id="myTabContent">

                            {pricing_data_home_2.map((item, i)  => 
                                <div key={i} 
                                className={`tab-pane fade ${item.active}`} 
                                id={item.tab_id} 
                                role="tabpanel" 
                                aria-labelledby={item.aria_labelledby}>
                                    <div className="row">
                                        {item.price_inner && 
                                        item.price_inner?.map((feature, index) => 
                                            <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                                                <div className="pricing-tab text-center mb-30">
                                                    <div className="price-img pb-50 mb-40">
                                                        <Image src={feature.icon} alt="theme-pure" />
                                                    </div>
                                                    <div className="price-value mb-25">
                                                        <h2>${feature.price}</h2>
                                                        <span>{feature.category}</span>
                                                    </div>
                                                    <p>{feature.info}</p>
                                                    <Link href="#" className="x-btn btn-border btn-squ">learn more</Link>
                                                </div>
                                            </div>                                        
                                        )} 
                                    </div>
                                </div>  
                            )} 
                        </div> 
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingAreaHomeTwo;