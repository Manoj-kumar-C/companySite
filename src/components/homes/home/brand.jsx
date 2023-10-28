import Image from "next/image";
import Slider from "react-slick";
import React, { useRef } from "react";
import shape_brand  from "@assets/img/shape/shape-sq.png";
// import slider img here
import brand_img_1 from "@assets/img/brand/01.png";
import brand_img_2 from "@assets/img/brand/02.png";
import brand_img_3 from "@assets/img/brand/03.png";
import brand_img_4 from "@assets/img/brand/04.png";
import brand_img_5 from "@assets/img/brand/05.png";
// slider img
const slider_img = [
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
];
// slider setting 
const setting = {
  arrows: false,
  infinite: false,
  // arrows: false,
  autoplay: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const Brand = ({style, style_brands}) => {
  const sliderRef = useRef(null);
  return (
    <>
      <div className={`brand-area ${style ? "brn-md-pt-0 pt-150 pos-relative pb-150 fix" : "brand-4-area"} ${style_brands && "pt-120 pb-120"} `}>
        {style && 
          <div className="shape-slider">
              <Image className="shape shape-5 " src={shape_brand} alt="theme-pure" />
          </div>
        }
        <div className="container">
          {style_brands ? null :
            <div className="row">
              <div className="col-xl-6 offset-xl-3">
                <div className={`section-title-2 text-center ${style ? "section-title-4 mb-60" : "mb-70"}`}>       
                  <h2>{style ? "Trusted over 100+ companies" : "Our worldwide clients"}</h2>
                </div>
              </div>
            </div>    
          }
          <div
            className="brand-pattern" style={{ backgroundImage: `url(/assets/img/bg/brand-bg.png)` }}>
            <Slider {...setting} ref={sliderRef} className="row brand-active-2">
              {slider_img.map((item, i) => (
                <div key={i} className="col-12">
                  <div className="brand-img">
                    <Image src={item} alt="theme-pure" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
