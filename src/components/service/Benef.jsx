import React from 'react';
import Image from "next/image";
// Importing of the images 

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



const Benef = ({ style_service, benefContent }) => {
  // Extract data from benefitsContent prop
  const {
    top_title,
    sub_title,
    title_1,
    info_1,
    title_2,
    info_2,
    title_3,
    info_3,
  } = benefContent;

  return (
    <>
      {/* benifit-area pos-relative fix */}
      <div className={`benefit-area ${style_service && "benefit-area-service"} pos-relative fix`}>
        <div className="shape-slider">
          {/* Your shape images */}
        </div>
        <div className="container" >
          <div className="row" data-aos="fade-up">
            <div className="col-xl-8 offset-xl-2">
              <div className={`${style_service ? "section-title-4" : "section-title-3"} text-center mb-70`}>
                <h2 className="mb-20">{top_title}</h2>
                <p>{sub_title}</p>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-120" data-aos="fade-up">
            <div className="col-xl-5 col-lg-6 offset-xl-1">
              <div className="single-benefit mb-30">
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

                    <div className="row align-items-center mb-120" data-aos="fade-up">
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

                    <div className="row align-items-center mb-120" data-aos="fade-up">
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

export default Benef;
