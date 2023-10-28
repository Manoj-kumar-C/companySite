import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import shape_img from "@assets/img/shape/shape-c-2.png";

import blog_img_1 from "@assets/img/blog/img1.png";
import blog_img_2 from "@assets/img/blog/img2.png"; 
 

const blog_data = [
    {
        id: 1, 
        img: blog_img_1,
        category: "creative design",
        time: "27 july, 2023", 
        title: <>Morning above after bring earth together shall together grass great</>,
        post_by: "De Cock",
        comments: "04",    
    },
    {
        id: 2, 
        img: blog_img_2,
        category: "creative design",
        time: "17 May, 2023", 
        title: <>And divided be and creepeth one creature fruit in abundantly lights.</>,
        post_by: "De Cock",
        comments: "02",    
    }, 

]


const LatestNewsArea = () => {
    return (
        <>
           <div className="latest-news-area pos-relative pb-110">
                <div className="shape-slider">
                    <Image className="shape shape-1 shape-5-1 " src={shape_img} alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title-2 section-title-4 mb-70">
                                <span>reecent story</span>
                                <h2>Our latest & update news
                                from blog page</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {blog_data.map((item, i) => 
                            <div key={i} className="col-lg-6 col-md-6">
                                <div className="news-wrapper mb-30">
                                    <div className="news-img">
                                        <Link href="/blog-details"><Image src={item.img} alt="theme-pure" /></Link>
                                    </div>
                                    <div className="news-box">
                                        <div className="news-text">
                                            <div className="blog-meta-top mb-15">
                                                <span> <a href="#">{item.category}</a> </span>
                                                <span>-</span>
                                                <span><Link href="/blog-details">{item.time}</Link></span>
                                            </div>
                                            <h4><Link href="/blog-details">{item.title}</Link></h4>
                                            <div className="news-meta">
                                                <span> <a href="#"><i className="ti-user"></i> {item.post_by}</a> </span>
                                                <span>
                                                    <Link href="/blog-details">
                                                        <i className="ti-comment"></i> {item.comments} Comment
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        )} 
                    </div>
                </div>
            </div> 
        </>
    );
};

export default LatestNewsArea;