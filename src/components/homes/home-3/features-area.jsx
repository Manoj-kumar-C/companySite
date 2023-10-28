import React from "react";
import  feature_img from '@assets/img/bg/fea-3.png';
import Image from "next/image";
import Link from "next/link";

const feature_content = {
    title: "For the next generation of big businesses",
    info: <>Divide there our divide fifth creepeth second which multiply
    evening fill so abundantly let upon there saw light behold he
    bearing hath morning over lesser image said. Whales and
    second.</>,
}
const {title, info} = feature_content

const FeaturesArea = () => {
  return (
    <>
      <div className="features-3-area features-3-area-top pb-110 fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 ">
              <div
                className="fea-3-img mb-30 wow fadeInLeft animated"
                data-wow-duration="1.5s"
                data-wow-delay=".5s"
              >
                <Image src={feature_img} alt="theme-pure" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 offset-xl-1">
              <div className="fea-3-content mb-30 pt-150">
                <span>about us</span>
                <h2>{title}</h2>
                <p>{info}</p>
                <div className="mb-10"></div>
                <div data-aos="fade-up">
                  <Link href="#" className="btn-grad">
                    <span>Read more</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesArea;
