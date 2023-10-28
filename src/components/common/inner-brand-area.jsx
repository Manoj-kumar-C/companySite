import Image from 'next/image';
import Slider from 'react-slick';
import React, { useRef } from 'react';


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

const InnerBrandArea = () => {
  const sliderRef = useRef(null);
  return (
    <>
      <Slider
        {...setting}
        ref={sliderRef}
        className="brand-active owl-carousel brand-active-2">
        {slider_img.map((item, i) => (
          <div key={i} className="single-brand">
            <Image src={item} alt="theme-pure" />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default InnerBrandArea;
