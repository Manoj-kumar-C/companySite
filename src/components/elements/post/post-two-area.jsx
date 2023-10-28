import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import post_1 from "@assets/img/blog/img1.png";
import post_2 from "@assets/img/blog/img2.png";
import shape from "@assets/img/shape/shape-c-2.png";

const post_two_data = [
    {
        id: 1,
        img: post_1,
        category: "creative design",
        date: "27 july, 2019",
        title: "Morning above after bring earth together shall together grass great",
        user: "De Cock",
        comment: "02",
    },
    {
        id: 2,
        img: post_2,
        category: "creative design",
        date: "27 july, 2019",
        title: "And divided be and creepeth one creature fruit in abundantly lights.",
        user: "De Cock",
        comment: "02",
    },
]
const PostTwoArea = () => {
    return (
        <>
           <div className="latest-news-area pos-relative pb-110">
                <div className="shape-slider">
                    <Image className="shape shape-1 shape-5-1 " src={shape} alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row">
                        {post_two_data.map((item, i) => 
                            <div key={i} className="col-lg-6 col-md-6">
                                <div className="news-wrapper mb-30">
                                    <div className="news-img">
                                        <Link href="/blog-details">
                                            <Image src={item.img} alt="theme-pure" />
                                        </Link>
                                    </div>
                                    <div className="news-box">
                                        <div className="news-text">
                                            <div className="blog-meta-top mb-15">
                                                <span> <a href="#">{item.category}</a> </span>
                                                <span>-</span>
                                                <span><Link href="/blog-details">{item.date}</Link></span>
                                            </div>
                                            <h4><Link href="/blog-details">{item.title}</Link></h4>
                                            <div className="news-meta">
                                                <span> <a href="#"><i className="ti-user"></i>{item.user}</a> </span>
                                                <span>
                                                    <Link href="/blog-details"><i className="ti-comment"></i>{item.comment} Comment</Link>
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

export default PostTwoArea;