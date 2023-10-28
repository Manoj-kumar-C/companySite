import React from "react";
import Image from "next/image";
import slide_thumb from "@assets/img/slider/slide-thumb.png";

const HeroArea = () => {
  return (
    <>
      <section className="slider-area fix">
        <div
          className="single-slider slider-height-6 d-flex align-items-center text-center"
          style={{ backgroundImage: `url(/assets/img/slider/slide-6.jpg)`}}>
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                <div className="slider-text-4 slider-text-6 pt-60">
                  <h2 className="wow fadeInUp animated" data-wow-delay="0.4s">
                    Powerfull software for your local business
                  </h2>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="slider-img-6-1 pt-50 wow fadeInUp animated" data-wow-duration="1.5s">
                  <Image src={slide_thumb} alt="theme-pure" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroArea;
