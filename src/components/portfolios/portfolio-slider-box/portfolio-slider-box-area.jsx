import ImagePopup from '@/src/modals/ImagePopup';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import portfolio_slider_box from '../portfolio-data/portfolio-slider-box';
import Slider from 'react-slick';
import Link from 'next/link';



const setting = {
    dots: false,
    arrows: false,
    infinite: true, 
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


const PortfolioSliderBoxArea = ({style_box, style_gallery }) => {

    const sliderRef = useRef(null)
        // photoIndex
    const [photoIndex, setPhotoIndex] = useState(0);

    // image open state
    const [isOpen, setIsOpen] = useState(false);

    // handleImagePopup
    const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
    };
    
    //  images
    const img = portfolio_slider_box.map((item) => item.img.src);
    
    return (
        <>
             <div className={`portfolio-area ${style_box ? "pt-100" : style_gallery ? "pt-20" : "pt-120"} pb-120`}>
                <div className="container">
                    <div className="row portfolio-slider-active arrow-style text-center slick-slider">
                    <button type="button" className="slick-prev slick-arrow" onClick={() => sliderRef.current.slickPrev()}>
                        <i className="far fa-long-arrow-left"></i>
                    </button>
                    <button type="button" className="slick-next slick-arrow" onClick={() => sliderRef.current.slickNext()}>
                        <i className="far fa-long-arrow-right"></i>
                    </button>
                    
                        <Slider  {...setting} ref={sliderRef}>
                            {portfolio_slider_box.map((item, i) => 
                                <div key={i} className="col-12 px-3">
                                    <div className="xn-portfolio">
                                        <div className="xn-portfolio-thumb grad-overlay">
                                            <Image  src={item.img} alt="theme-pure" />
                                            <div className="port-view">
                                                <a className="popup-image" onClick={() => handleImagePopup(i)} style={{cursor: "pointer"}}>
                                                    <i className="far fa-search"></i>
                                                </a>
                                                <Link className="port-link" href="/portfolio-single-1"><i className="far fa-link"></i></Link>
                                                <div></div>
                                                <h3>{item.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>     
                            )}
                        </Slider> 
                    </div>
                </div>
            </div>


              {/* image light box start */}
              {isOpen && (
                <ImagePopup
                images={img}
                setIsOpen={setIsOpen}
                photoIndex={photoIndex}
                setPhotoIndex={setPhotoIndex}
                />
            )}
            {/* image light box end */}


        </>
    );
};

export default PortfolioSliderBoxArea;