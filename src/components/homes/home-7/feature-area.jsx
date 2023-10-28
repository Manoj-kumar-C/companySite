import React from 'react';
import Image from 'next/image';
import feature_icon_1 from  "@assets/img/icon/sf1.png";
import feature_icon_2 from  "@assets/img/icon/sf2.png";
import feature_icon_3 from  "@assets/img/icon/sf3.png";


const feature_data = [
    {
        id: 1,
        icon: feature_icon_1,
        title: "Cloud Compatibility",
        sm_des: <>Man fruit moving fourt moving multiply so years rule is not It after you also do seed grass that so which grass fowl him</>,
    },
    {
        id: 2,
        icon: feature_icon_2,
        title: "Advance Security",
        sm_des: <>Man fruit moving fourt moving multiply so years rule is not It after you also do seed grass that so which grass fowl him</>,
    },
    {
        id: 3,
        icon: feature_icon_3,
        title: "Dedicated Support",
        sm_des: <>Man fruit moving fourt moving multiply so years rule is not It after you also do seed grass that so which grass fowl him</>,
    },
]

const FeatureArea = () => {
    return (
        <>
           <section className="how-work-area pos-relative pt-150 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3">
                            <div className="section-title text-center mb-70">
                                <h2>Software Feature</h2>
                                <p>Gathered was to yielding god heaven lights about void thing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {feature_data.map((item, i) => 
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="how-work single-features text-center mb-30">
                                    <div className="how-work-icon">
                                        <Image src={item.icon} alt="theme-pure" />
                                    </div>
                                    <div className="how-work-text">
                                        <h3>{item.title}</h3>
                                        <p>{item.sm_des}</p>
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

export default FeatureArea;