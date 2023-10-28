import Image from 'next/image';
import Slider from 'react-slick';
import React, {useRef} from 'react';


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

const SubscriptionArea = ({style_service}) => {

    const sliderRef = useRef(null)
    return (
        <>
            <section className="brand-3-area pb-150" style={{backgroundImage: `url(/assets/img/bg/subs-bg.png)`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                            <div className="section-title-pink text-center mb-70">
                                <span>{style_service? "subscription" : "Permanent Clients"}</span>
                                <h2>
                                  {style_service ? 
                                  "Subscribe our weekly newsletter, get update anywhere" 
                                  :
                                  "Worldwide 100+ clients using our service."
                                  }
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                            <div className={`newsletter newsletter-3 ${style_service ? "newsletter-5" : ""} mb-140 fix`}>
                                <form onClick={(e) => e.preventDefault()}>
                                    <input type="email" placeholder="Enter your email" />
                                    <button type="submit">SUBSCRIBE NOW</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <Slider {...setting}  ref={sliderRef} className="brand-active owl-carousel">
                                {slider_img.map((item, i)  => 
                                    <div key={i} className="single-brand">
                                        <Image src={item} alt="theme-pure" />
                                    </div>
                                )} 
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SubscriptionArea;