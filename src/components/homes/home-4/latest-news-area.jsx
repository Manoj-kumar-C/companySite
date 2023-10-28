import blog_data from '@/src/data/blog-data';
import Link from 'next/link';
import React from 'react';
import  Image from "next/image"

const LatestNewsArea = () => {
    return (
        <>
            <div className="latest-news-area pb-110">
                <div className="container">
                    <div className="row">
                        {blog_data.map((item, i)  => 
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="news-wrapper mb-30">
                                    <div className="news-img mb-25">
                                        <Link href="/blog-details">
                                            <Image src={item.img} alt="theme-pure" />
                                        </Link>
                                    </div>
                                    <div className="news-text">
                                        <div className="blog-meta-top mb-15">
                                            <span> <Link href="/blog-details">{item.category}</Link> </span>
                                            <span>-</span>
                                            <span><Link href="/blog-details">{item.time}</Link></span>
                                        </div>
                                        <h4><Link href="/blog-details">{item.title}</Link></h4>
                                        <div className="news-meta">
                                            <span> <Link href="#"><i className="ti-user"></i> De Cock</Link> </span>
                                            <span>
                                                <Link href="/blog-details"><i className="ti-comment"></i> 
                                                   {item.comments} Comments
                                                </Link>
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

export default LatestNewsArea;