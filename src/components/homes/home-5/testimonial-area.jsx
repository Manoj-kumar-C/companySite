import Image from 'next/image';
import Slider from 'react-slick';
import React, { useEffect, useRef, useState } from 'react';
import testimonial_img_1 from "@assets/img/testimonial/img1.png";
import testimonial_img_2 from "@assets/img/testimonial/img2.png";
import testimonial_img_3 from "@assets/img/testimonial/img3.png";
import testimonial_img_4 from "@assets/img/testimonial/img4.png";
const testimonial_img_slider = [testimonial_img_1, testimonial_img_2, testimonial_img_3, testimonial_img_4]

const setting_img = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0
}

const testimonial_avatar_info = [
    {
        id: 1,
        name: "Salim Rana",
        job_title: "CEO BasicTheme",
        info: <>“ 01 Days for two every wherein green fruitful also fruitful was seasons unto won't the fowl
            light deep more then regular before piece sixth them dominion cattle fish cattle first midst moved greater divided so
            dove nature tree bisapper relan bring Cattle fish cattle first midst moved greater divided so bring.”</>,
    },
    {
        id: 2,
        name: "Masud Hassan",
        job_title: "Designer",
        info: <>“ 02 Fruitful was seasons unto won't the fowl light deep more then regular
            before piece sixth them dominion cattle fish cattle first midst moved greater divided so
            dove nature tree bisapper relan days for two every wherein green fruitful also
            bring Cattle fish cattle first midst moved greater divided so bring.”</>,
    },
    {
        id: 3,
        name: "Jon Doe",
        job_title: "CEO DeerCreative",
        info: <>“ 03 Wherein green fruitful also fruitful was seasons unto won't the fowl light deep more then
            regular before piece sixth them dominion cattle fish cattle first midst moved greater divided so
            dove nature tree bisapper relan bring Cattle fish cattle first midst moved greater divided so bring.Days for two every”</>,
    },
    {
        id: 4,
        name: "Hehedi Hossen",
        job_title: "CEO CoderCredit",
        info: <>“ 04 Days for two every wherein green fruitful also fruitful was seasons unto won't the fowl
            light deep more then regular before piece sixth them dominion cattle fish cattle first midst moved greater divided so
            dove nature tree bisapper relan bring Cattle fish cattle first midst moved greater divided so bring.”</>,
    },
]

const avatar_setting = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: true,
}


// import shapes here 
import shape_1 from "@assets/img/shape/shape2.png";
import shape_2 from "@assets/img/shape/shape-zigzag.png";
import shape_3 from "@assets/img/shape/shape5.png";
import shape_4 from "@assets/img/shape/shape3.png";


const TestimonialArea = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);

    return (
      <> 
        <div className="testimonial-6-area pos-relative gray-bg pt-140 pb-140">
          <div className="shape-slider">
            <Image
              className="shape shape-1 shape-5-1 "
              src={shape_1}
              alt="theme-pure"
            />
            <Image
              className="shape shape-2"
              src={shape_2}
              alt="theme-pure"
            />
            <Image
              className="shape shape-5"
              src={shape_3}
              alt="theme-pure"
            />
            <Image
              className="shape shape-6"
              src={shape_4}
              alt="theme-pure"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <div className="section-title-3 text-center mb-70">
                  <h2 className="mb-20">Whats our client think about us</h2>
                  <p>Him have deep brought life darkness firmament unto move</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-10 offset-xl-1">
                <Slider
                  {...setting_img}
                  asNavFor={nav2}
                  ref={slider1}
                  className="testimonial-nav mb-30"
                >
                  {testimonial_img_slider.map((item, i) => (
                    <div key={i} className={`testimonial-thumb`}>
                      <Image src={item} alt="theme-pure" />
                    </div>
                  ))}
                </Slider>
                <Slider
                  {...avatar_setting}
                  asNavFor={nav1}
                  ref={slider2}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  className="testimonia-item-active testimonia-item-2"
                >
                  {testimonial_avatar_info.map((info, index) => (
                    <div key={index} className="testimonial-item text-center">
                      <div className="designation mb-30">
                        <h3>- {info.name} -</h3>
                        <span>{info.job_title}</span>
                      </div>
                      <p>{info.info}</p>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default TestimonialArea;