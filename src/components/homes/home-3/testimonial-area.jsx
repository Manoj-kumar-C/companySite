import Image from 'next/image';
import Slider from 'react-slick';
import React, { useEffect, useRef, useState } from 'react';
import testimonial_img_1 from "@assets/img/testimonial/img1.png";
import testimonial_img_2 from "@assets/img/testimonial/img2.png";
import testimonial_img_3 from "@assets/img/testimonial/img3.png";
import testimonial_img_4 from "@assets/img/testimonial/img4.png";  
const testimonial_img_slider =[testimonial_img_1, testimonial_img_2, testimonial_img_3, testimonial_img_4, testimonial_img_1, testimonial_img_2, testimonial_img_3, testimonial_img_4]

const setting_img = {
    slidesToShow: 3,
    slidesToScroll: 1, 
    dots: false,
    arrows: false, 
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0

}

// testimonial data
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
 

const TestimonialArea = ({style_3, style_4}) => { 
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
            <div className={`${style_4 ? "testimonial-shap-area pb-145" : "testimonial-6-area gray-bg pt-140 pb-140 fix"}`} 
            style={{ backgroundImage : `url(${style_4 ? "/assets/img/bg/test-bg.png" : null})`}}>
                <div className="container">
                    {style_3 && 
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="section-title-pink text-center mb-70">
                                <span>testimonials</span>
                                <h2>Our worldwide happy user says <br />
                                about software</h2>
                            </div>
                        </div>
                    </div>                     
                    }
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <Slider 
                            {...setting_img}  
                            asNavFor={nav2} 
                            ref={slider1} 
                            className="testimonial-nav mb-30">
                                {testimonial_img_slider.map((item, i) => 
                                    <div key={i} className={`testimonial-thumb`}>
                                        <Image src={item} alt="theme-pure" />
                                    </div>                                
                                )} 
                            </Slider>
                            <Slider 
                            {...avatar_setting}  
                            asNavFor={nav1}
                            ref={slider2}
                            // slidesToShow={3}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            className={`testimonia-item-active ${style_3 && "test-3-dot"}`}> 
                                {testimonial_avatar_info.map((info, index) => 
                                    <div key={index} className={`testimonial-item text-center ${style_4 && "mb-30"}`}>
                                        {style_3 && 
                                        <>
                                            <div className="designation mb-30">
                                                <h3>- {info.name} -</h3>
                                                <span>{info.job_title}</span>
                                            </div>
                                            <p>{info.info}</p>                                        
                                        </>                                        
                                        }
                                        {style_4 && 
                                        <>
                                            <p>{info.info}</p>                                        
                                            <div className="designation">
                                                <h3>- {info.name} -</h3>
                                                <span>{info.job_title}</span>
                                            </div>
                                        </>                                        
                                        }
                                    </div>
                                )} 
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialArea;