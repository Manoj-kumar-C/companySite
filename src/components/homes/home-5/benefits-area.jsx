import React from 'react';
import Image from "next/image"; 
// import shapes here 
import shape_1 from "@assets/img/shape/shape-sq.png";
import shape_2 from "@assets/img/shape/shape2.png";
import shape_3 from "@assets/img/shape/shape3.png";
import shape_4 from "@assets/img/shape/shape4.png";
import shape_5 from "@assets/img/shape/shape5.png";
import shape_6 from "@assets/img/shape/shape6.png"; 

import benefits_img_1 from "@assets/img/icon/light.png";
import benefits_img_2 from "@assets/img/icon/bar.png";
import benefits_img_3 from "@assets/img/icon/finish.png";
import data_img from "@assets/img/bg/data.png";
import pro_img from "@assets/img/bg/pro.png";
import res_img from "@assets/img/bg/res.png";
// benefits content 
const benefits_content = {
    top_title: <>Better benifit experience for all</>,
    sub_title: <>Him have deep brought life darkness firmament unto move</>,

    title_1: <>Data Collection</>,
    info_1: <>Behold in third kind light you'll moving day the female soulger green said us beginning appear i creing likeness inunto
    also darkness female light won't thes dominion whose all favorite beautiful plitum doret us.</>,

    title_2: <>Data Processing</>,
    info_2: <>Behold in third kind light you'll moving day the female soulger green said us beginning appear i creing
    likeness inunto also darkness female light won't thes dominion whose all favorite beautiful plitum doret us.</>,

    title_3: <>Finished Result</>,
    info_3: <>Behold in third kind light you'll moving day the female soulger green said us beginning appear i creing
    likeness inunto
    also darkness female light won't thes dominion whose all favorite beautiful plitum doret us.</>,
}
const {top_title, sub_title, title_1, info_1, title_2, info_2, title_3, info_3}  = benefits_content 
const BenefitsArea = ({style_service}) => {
    return (
        <> 
        {/* benifit-area pos-relative fix */}
           <div className={`benifit-area ${style_service && "benifit-area-service"} pos-relative fix`}>
                <div className="shape-slider">
                    <Image className="shape shape-1 shape-5-1 " src={shape_1} alt="theme-pure" />
                    <Image className="shape shape-2" src={shape_2} alt="theme-pure" />
                    <Image className="shape shape-3" src={shape_3} alt="theme-pure" />
                    <Image className="shape shape-4" src={shape_4} alt="theme-pure" />
                    <Image className="shape shape-5" src={shape_5} alt="theme-pure" />
                    <Image className="shape shape-6" src={shape_6} alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className={`${style_service ? "section-title-4" : "section-title-3"} text-center mb-70`}>
                                <h2 className="mb-20">{top_title}</h2>
                                <p>{sub_title}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mb-120">
                        <div className="col-xl-5 col-lg-6 offset-xl-1">
                            <div className="single-benifit mb-30">
                                <Image src={benefits_img_1} alt="theme-pure" />
                                <h3>{title_1}</h3>
                                <p>{info_1}</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1">
                            <div className="benifit-img mb-30 wow fadeInRight animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <Image src={data_img} alt="theme-pure" />
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mb-120">
                        <div className="col-xl-5 col-lg-6 offset-xl-1">
                            <div className="benifit-img mb-30 wow fadeInLeft animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <Image src={pro_img} alt="theme-pure" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1">
                            <div className="single-benifit mb-30">
                                <Image src={benefits_img_2} alt="theme-pure" />
                                <h3>{title_2}</h3>
                                <p>{info_2}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mb-120">
                        <div className="col-xl-5 col-lg-6 offset-xl-1">
                            <div className="single-benifit mb-30">
                                <Image src={benefits_img_3} alt="theme-pure" />
                                <h3>{title_3}</h3>
                                <p>{info_3}</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1">
                            <div className="benifit-img mb-30 wow fadeInRight animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <Image src={res_img} alt="theme-pure" />
                            </div>
                        </div>
                    </div>

                </div>
            </div> 
        </>
    );
};

export default BenefitsArea;