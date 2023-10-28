import React from 'react';
import Link from "next/link";
import Image from "next/image";
// pricing icons import here
import pricing_icon_1 from "@assets/img/price/price-01.png";
import pricing_icon_2 from "@assets/img/price/price-02.png";
import pricing_icon_3 from "@assets/img/price/price-03.png";
// priceing data here
const pricing_data = [
    {
        id: 1, 
        icon: pricing_icon_1,
        price: "32.50",
        category: "Professional",
        info: <>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</>
    },
    {
        id: 2, 
        icon: pricing_icon_2,
        price: "54.50",
        category: "Business",
        info: <>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</>
    },
    {
        id: 3, 
        icon: pricing_icon_3,
        price: "65.50",
        category: "Ultimate",
        info: <>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</>
    },
]

const PricingAreaHomeFour = ({style_price}) => {
    return (
        <>                  
                                {/* pricing-area pb-120 */}
            <section className={`pricing-area ${style_price ? "" : "pt-140"} pb-120`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                            <div className="section-title-2 text-center mb-70">
                                <span>Pricing plan</span>
                                <h2>No Extra Charges! Choose your Plan.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="price-tab">
                        <div className="row">
                            {pricing_data.map((item, i)  => 
                                <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="pricing-tab text-center mb-30">
                                        <div className="price-img pb-50 mb-40">
                                            <Image src={item.icon} alt="theme-pure" />
                                        </div>
                                        <div className="price-value mb-25">
                                            <h2>${item.price}</h2>
                                            <span>{item.category}</span>
                                        </div>
                                        <p>{item.info}</p>
                                        <Link href="/price" className="x-btn btn-border btn-orange">get package</Link>
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

export default PricingAreaHomeFour;