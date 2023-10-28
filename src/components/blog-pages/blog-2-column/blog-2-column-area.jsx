import two_column_data from '@/src/data/two-column-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogTwoColumnArea = () => {
    return (
        <>
             <div className="blog-area pos-relative pt-130 pb-130">
                <div className="container">
                    <div className="row">
                        {two_column_data.map((item, i) => 
                            <div key={i} className="col-lg-6 col-md-6">
                                <div className="news-wrapper mb-60">
                                    <div className="news-img">
                                        <Link href="/blog-details">
                                            <Image src={item.img} alt="theme-pure" />
                                        </Link>
                                    </div>
                                    <div className="news-box">
                                        <div className="news-text">
                                            <div className="blog-meta-top mb-15">
                                                <span> <a href="#">creative design</a> </span>
                                                <span>-</span>
                                                <span><a href="blog-details.html">27 july, 2019</a></span>
                                            </div>
                                            <h4><a href="blog-details.html">Morning above after bring earth together
                                                    shall together grass great</a></h4>
                                            <div className="news-meta">
                                                <span> <a href="#"><i className="ti-user"></i> De Cock</a> </span>
                                                <span><a href="blog-details.html"><i className="ti-comment"></i> 02 Comment</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        )} 
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="basic-pagination basic-pagination-2 text-center mt-20">
                                <ul>
                                    <li><a href="#"><i className="fas fa-angle-double-left"></i></a></li>
                                    <li><a href="#">01</a></li>
                                    <li className="active"><a href="#">02</a></li>
                                    <li><a href="#">03</a></li>
                                    <li><a href="#"><i className="fas fa-ellipsis-h"></i></a></li>
                                    <li><a href="#"><i className="fas fa-angle-double-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogTwoColumnArea;