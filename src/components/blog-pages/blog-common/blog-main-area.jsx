import Image from 'next/image'; 
import Slider from 'react-slick'; 
import React, { useRef, useState } from 'react';


import blog_thumb_1 from "@assets/img/blog/b1.jpg" 
import blog_thumb_2 from "@assets/img/blog/b6.jpg" 

import blog_slider_1 from "@assets/img/blog/b5.jpg" 
import blog_slider_2 from "@assets/img/blog/b6.jpg" 
import blog_slider_3 from "@assets/img/blog/b7.jpg" 
import VideoPopup from '@/src/modals/video-popup';
import Link from 'next/link';

// main blog data 
const main_blog_contents = [
    {
        id: 1, 
        cls: "format-image",
        just_thumb: true,
        img: blog_thumb_1,
        date: "September 15, 2023",
        post_by: "Diboli B. Joly",
        comments: "23",
        title: "Inspired Design Decisions: Bea Feitler, An Unst Oppable Creative Force.",
        sm_des: <>There’s a good chance Everyday Health is the most appropriately named blog on this list
        because it focuses on the health topics that consistently affect a wide range of people. They also get kudos for
        addressing the emotional challenges folks face when managing conditions.</>,
    },
    {
        id: 2, 
        cls: "format-video",
        video: true,
        videoID: "Y6MlVop80y0",
        img_thumb: blog_thumb_2,
        date: "September 15, 2023",
        post_by: "Diboli B. Joly",
        comments: "23",
        title: "When Do We Need A Design System? An Interview With Brad Frost.",
        sm_des: <>There’s a good chance Everyday Health is the most appropriately named blog on this list
        because it focuses on the health topics that consistently affect a wide range of people. They also get kudos for
        addressing the emotional challenges folks face when managing conditions.</>,
    },
    {
        id: 3, 
        cls: "format-gallery", 
        slider: true,
        slider_img: [
            blog_slider_1,
            blog_slider_2,
            blog_slider_3,
        ],
        date: "September 15, 2023",
        post_by: "Diboli B. Joly",
        comments: "23",
        title: "Exploring The Latest Web Design Trends Together With Be Theme?.",
        sm_des: <>There’s a good chance Everyday Health is the most appropriately named blog on this list
        because it focuses on the health topics that consistently affect a wide range of people. They also get kudos for
        addressing the emotional challenges folks face when managing conditions.</>,
    },
    {
        id: 4, 
        cls: "format-audio",
        audio: true,
        audioID: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/698760694&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        img_thumb: blog_thumb_2,
        date: "September 15, 2023",
        post_by: "Diboli B. Joly",
        comments: "23",
        title: "If you find yourself constantly bookmarking health sections on news.",
        sm_des: <>There’s a good chance Everyday Health is the most appropriately named blog on this list
        because it focuses on the health topics that consistently affect a wide range of people. They also get kudos for
        addressing the emotional challenges folks face when managing conditions.</>,
    },

]

// slider setting 
const setting = {
    dots: false,
    arrows: false,
    infinite: true, 
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
	responsive: [
		{
            breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}

		},
		{

			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]

}
 
  
 
const BlogMainArea = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const sliderRef  = useRef(null)

    return (
        <>
            {/* <div className="col-lg-8"> */}
                {main_blog_contents.map((item, i) => 
                    <article key={i} className={`postbox post ${item.cls} mb-50`}>
                        {item?.just_thumb && 
                            <div className="postbox__thumb mb-30">
                                <Link href="#">
                                    <Image src={item.img}  alt="theme-pure" />
                                </Link>
                            </div> 
                        }
                        {item?.video && 
                            <div className="postbox__video mb-30">
                                <Image src={item.img_thumb}  alt="theme-pure" />
                                <button className="popup-video video-btn" 
                                    onClick={() => setIsVideoOpen(true)}
                                    style={{ cursor: "pointer" }}>
                                    <i className="fas fa-play"></i>
                                </button>
                            </div>   
                        }
                        {item?.slider && 
                            <div className="postbox__gallery mb-30 slick-slider"> 
                                <button type="button" className="slick-prev slick-arrow" onClick={() => sliderRef.current.slickPrev()}>
                                        <i className="far fa-long-arrow-left"></i>
                                    </button>
                                    <button type="button" className="slick-next slick-arrow" onClick={() => sliderRef.current.slickNext()}>
                                        <i className="far fa-long-arrow-right"></i>
                                    </button>
                                <Slider {...setting} ref={sliderRef}>
                                    {item.slider_img.map((sl_img, index) =>
                                        <Image key={index} src={sl_img}  alt="theme-pure" /> 
                                    )}
                                </Slider> 
                            </div>
                        }
                        {item?.audio && 
                            <div className="postbox__audio embed-responsive embed-responsive-16by9 mb-30">
                                <iframe src={item.audioID}></iframe>
                            </div>
                        }
                        <div className="postbox__text">
                            <div className="post-meta mb-15">
                                <span><i className="far fa-calendar-check"></i> {item.date}</span>
                                <span><a href="#"><i className="far fa-user"></i>{item.post_by}</a></span>
                                <span><a href="#"><i className="far fa-comments"></i> {item.comments} Comments</a></span>
                            </div>
                            <h3 className="blog-title">
                                <a href="#">{item.title}</a>
                            </h3>
                            <div className="post-text mb-20">
                                <p>{item.sm_des}</p>
                            </div>
                            <div className="read-more mt-30">
                                <a href="#" className="x-btn theme-btn">read more</a>
                            </div>
                        </div>
                    </article>   
                )}
                    <article className="postbox post format-quote mb-40">
                        <div className="post-text">
                            <blockquote>
                                <p>This health blog from NPR takes a fairly broad look at the medical world.</p>
                                <footer>- Rosalina Pong</footer>
                            </blockquote>
                        </div>
                    </article>
 
                <div className="basic-pagination basic-pagination-2 mb-40">
                    <ul>
                        <li><a href="#"><i className="fas fa-angle-double-left"></i></a></li>
                        <li className="active"><a href="#">01</a></li>
                        <li><a href="#">02</a></li>
                        <li><a href="#">03</a></li>
                        <li><a href="#"><i className="fas fa-ellipsis-h"></i></a></li>
                        <li><a href="#"><i className="fas fa-angle-double-right"></i></a></li>
                    </ul>
                </div>
            {/* </div> */}

            {/* video modal start */}
            <VideoPopup
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"g1u2_-Xz8qw"} />
            {/* video modal end */}
        </>
    );
};

export default BlogMainArea;