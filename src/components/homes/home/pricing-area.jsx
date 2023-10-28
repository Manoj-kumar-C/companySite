import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import standard_icon from "@assets/img/icon/pi1.png";
import professional_icon from "@assets/img/icon/pi2.png";
import business_icon from "@assets/img/icon/pi3.png";



const pricing_data_home_1 = [
    // monthly price 
    {
        id: 1,
        active: "show active",
        tab_id: "monthly-tab-pane",
        aria_labelledby: "monthly-tab",
        price_inner: [
            {
                id:1,
                icon: standard_icon,
                category: "Standard",
                price: 32.50,
                features: ["Unlimited products", "Discount code", "2GB file storage", "24/7 Support"],             
            },
            {
                id:2,
                icon: professional_icon,
                category: "Professional",
                price: 42.50,
                features: ["Unlimited products", "Discount code", "2GB file storage", "24/7 Support"],             
            },
            {
                id:3,
                category: "Business",
                icon: business_icon,
                price: 59.50,
                features: ["Unlimited products", "Discount code", "2GB file storage", "24/7 Support"],             
            },
        ], 
    }, 
    // annual price 
    {
        id: 2,
        active: "",
        tab_id: "annual-tab-pane",
        aria_labelledby: "annual-tab",
        price_inner: [
            {
                id:1,
                icon: standard_icon,
                category: "Standard",
                price: 79.50,
                features: ["Unlimited products", "Discount code", "2GB file storage", "24/7 Support"],             
            },
            {
                id:2,
                icon: professional_icon,
                category: "Professional",
                price: 89.50,
                features: ["Unlimited products", "Discount code", "2GB file storage", "24/7 Support"],             
            },
            {
                id:3,
                category: "Business",
                icon: business_icon,
                price: 99.50,
                features: ["Unlimited products", "Discount code", "2GB file storage", "24/7 Support"],             
            },
        ], 
    },  
]



const PricingArea = () => {
    return (
        <> 
             <section className="pricing-area pt-100 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 offset-lg-1 offset-xl-2">
                            <div className="section-title-2 text-center mb-70">
                                <h2 className="mb-20">Choose Your Plan</h2>
                                <p>Land from day very fill that midst stars one dominion. Itself was let that divided itself god don't
                                    subdue wherein let behold over he whose of sea moved called.</p>
                            </div>
                        </div>
                    </div>
                    <div className="price-tab">
                        <ul className="nav price-tab-4-menu text-center" id="myTab" role="tablist">                            
                            <li className="nav-item" role="presentation">
                                <button 
                                    className="nav-link active" 
                                    id="monthly-tab" 
                                    data-bs-toggle="tab"
                                    data-bs-target="#monthly-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="monthly-tab-pane"
                                    aria-selected="true"
                                    tabIndex="-1" 
                                    >
                                        Monthly
                                    </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button 
                                className="nav-link" 
                                id="annual-tab" 
                                data-bs-toggle="tab" 
                                data-bs-target="#annual-tab-pane" 
                                type="button"
                                role="tab"  
                                aria-controls="annual-tab-pane"
                                aria-selected="false" 
                                tabIndex="-1"
                                >Annual</button>
                            </li>
                        </ul> 

                        <div className="tab-content" id="myTabContent" >
                            {pricing_data_home_1.map((item, i) => 
                                <div key={i}
                                    className={`tab-pane fade ${item.active}`} 
                                    id={item.tab_id} 
                                    role="tabpanel" 
                                    aria-labelledby={item.aria_labelledby}>
                                    <div className="row">
                                        {item.price_inner && 
                                        item.price_inner?.map((features, index) => 
                                            <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                                                <div className="pricing-tab pricing-tab-4 text-center mb-30">
                                                    <div className="price-img-4 pb-50">
                                                        <Image src={features.icon} alt="theme-pure" />
                                                    </div>
                                                    <div className="price-value mb-30">
                                                        <h3>{features.category}</h3>
                                                        <h5>${features.price}</h5>
                                                    </div>
                                                    <ul>
                                                        {features.features?.map((feature, ind) => <li key={ind}>{feature}</li>)} 
                                                    </ul>
                                                    <Link href="#" className="btn-grad-4"><span>Buy Now</span></Link>
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

export default PricingArea;