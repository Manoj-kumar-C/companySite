import React, { useState } from 'react';
import Image from "next/image";
import circle_img from "@assets/img/slider/circle.png";
import hero_img from "@assets/img/slider/slide-7.png";
import VideoPopup from '@/src/modals/video-popup';
import Link from 'next/link';

const HeroArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
           <section className="slider-area fix">
                <div className="shape-slider">
                    <span className="shape shape-circle shape-c5-1 "></span>
                    <span className="shape shape-circle shape-c6-2 "></span>
                    <span className="shape shape-circle shape-c5-3 shape-c6-3 "></span>
                </div>
                <Image className="img-shape main-image-shape wow fadeInRight animated" 
                    src={circle_img} alt="" data-wow-duration="2s" data-wow-delay="2s" />
                <div className="single-slider slider-height-3 slider-height-6-1 pt-230">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="slider-text slider-text-3 pt-60">
                                    <h2 className="wow fadeInUp animated" data-wow-delay="0.4s">
                                        Statics software for your business
                                    </h2>
                                    <p className="wow fadeInUp animated" data-wow-delay="0.9s">
                                        You of above creature may winged. Behold meat form day sea you male above void itself had our
                                        fourth let moving it was every air itself dominion, upon seed sea.</p>
                                    <div className="slider-btn wow fadeInUp animated" data-wow-delay="1.3s">
                                        <Link href="#" className="x-btn btn-squ btn-red"><span>try it free</span></Link>
                                        <div className="sl-video sl-video-6  d-inline">
                                            <span>Demo video</span> 
                                            <a className="popup-video"  
                                            onClick={() => setIsVideoOpen(true)}
                                            ><i className="far fa-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="slider-img slider-img-6 wow fadeInRight animated" data-wow-duration="2.5s" data-wow-delay="3.5s">
                                    <Image src={hero_img} alt="theme-pure" />
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
                videoId={"pbiEfJd2Hpw"}
            />
            {/* video modal end */}
        </>
    );
};

export default HeroArea;