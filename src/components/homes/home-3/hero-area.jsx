import React, { useState } from 'react';
import Image from 'next/image';

import moc_up from "@assets/img/slider/mocup.png";
import VideoPopup from '@/src/modals/video-popup';


const hero_content ={
    discount: "30% off for 14 days",
     title: "Powerfull software for your local business",
     info: <>You of above creature may winged. Behold meat form day sea you male above void itself had our fourth let moving it was every air itself dominion, upon seed sea creature may winged. </>,

}
const {discount, title, info}  = hero_content

const HeroArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <section className="slider-area fix">
                <div className="shape-slider">
                    <span className="shape shape-circle shape-c3-1 "></span>
                    <span className="shape shape-circle shape-c3-2 "></span>
                    <span className="shape shape-circle shape-c3-3 "></span>
                </div>
                <div className="single-slider slider-height-3 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="slider-text slider-text-3">
                                    <span className="d-block wow fadeInUp animated" data-wow-delay="0.2s">
                                        {discount}
                                    </span>
                                    <h2 className="wow fadeInUp animated" data-wow-delay="0.4s">{title}</h2>
                                    <p className="wow fadeInUp animated" data-wow-delay="0.9s">{info}</p>
                                    <div className="slider-btn wow fadeInUp animated" data-wow-delay="1.3s">
                                        <a href="#" className="btn-grad"><span>Free trial</span></a>
                                        <div className="sl-video d-inline">
                                            <span>Demo video</span> 
                                            <a className="popup-video" 
                                            onClick={() => setIsVideoOpen(true)}
                                            ><i className="far fa-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="slider-img slider-img-3 wow fadeInRight animated" data-wow-duration="2.5s">
                                    <Image src={moc_up} alt="theme-pure" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* video modal start */}
             <VideoPopup 
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"olboi3ttUi8"}
            />
            {/* video modal end */}
        </>
    );
};

export default HeroArea;