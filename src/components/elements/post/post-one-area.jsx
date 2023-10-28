import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import post_1 from "@assets/img/blog/s1.jpg";
import post_2 from "@assets/img/blog/s2.jpg";
import post_3 from "@assets/img/blog/s3.jpg";

const post_one_data = [
    {
        id: 1,
        img: post_1,
        category: "creative design",
        date: "27 july, 2019",
        title: "Greater to days had creature our fifth male years Appear.",
        user: "De Cock",
        comment: "02",       
    },
    {
        id: 2,
        img: post_2,
        category: "creative design",
        date: "27 july, 2019",
        title: "There which appear you god above evening was seasons.",
        user: "De Cock",
        comment: "04",       
    },
    {
        id: 3,
        img: post_3,
        category: "creative design",
        date: "27 july, 2019",
        title: "Greater to days had creature our fifth male years Appear.",
        user: "De Cock",
        comment: "05",       
    },
]
const PostOneArea = () => {
    return (
        <>
            <div className="latest-news-area pt-140 pb-110">
                <div className="container">
                    <div className="row">
                        {post_one_data.map((item, i) => 
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="news-wrapper mb-30">
                                    <div className="news-img mb-25">
                                        <Link href="/blog-details"><Image src={item.img} alt="theme-pure" /></Link>
                                    </div>
                                    <div className="news-text">
                                        <div className="blog-meta-top mb-15">
                                            <span> <a href="#">{item.category}</a> </span>
                                            <span>-</span>
                                            <span><Link href="/blog-details">{item.date}</Link></span>
                                        </div>
                                        <h4><Link href="/blog-details">{item.title}</Link></h4>
                                        <div className="news-meta">
                                            <span> <a href="#"><i className="ti-user"></i>{item.user}</a> </span>
                                            <span><Link href="/blog-details">
                                                <i className="ti-comment"></i>{item.comment} Comment</Link>
                                            </span>
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

export default PostOneArea;