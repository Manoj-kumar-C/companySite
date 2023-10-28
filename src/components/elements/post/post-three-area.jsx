import React from 'react';
import Image from 'next/image';

import post_1 from "@assets/img/blog/b1.jpg";
import post_2 from "@assets/img/blog/b2.jpg";
import Link from 'next/link';

const post_three_data = [
    {
        id: 1, 
        img: post_1,
        user: "Diboli",
        comment: "23",
        title: "Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempor incididunt.",
        sm_des: "There’s a good chance Everyday Health is the most appropriately named blog on this list because it focuses on the health topics that consistently affect a wide range of people. They also get kudos.",
    },
    {
        id: 2, 
        img: post_2,
        user: "Diboli",
        comment: "23",
        title: "Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempor incididunt.",
        sm_des: "There’s a good chance Everyday Health is the most appropriately named blog on this list because it focuses on the health topics that consistently affect a wide range of people. They also get kudos.",
    },
]
const PostThreeArea = () => {
    return (
        <>
            <section className="blog-area pb-120">
                <div className="container">
                    <div className="row">
                        {post_three_data.map((item, i) => 
                            <div key={i} className="col-lg-6 col-md-6">
                                <article className="postbox post format-image mb-40">
                                    <div className="postbox__thumb mb-25">
                                        <a href="#">
                                            <Image src={item.img} alt="blog image" />
                                        </a>
                                    </div>
                                    <div className="postbox__text">
                                        <div className="post-meta mb-15">
                                            <span><a href="#"><i className="far fa-user"></i>{item.user}</a></span>
                                            <span>
                                                <a href="#">
                                                    <i className="far fa-comments"></i>
                                                     {item.comment} Comments
                                                </a>
                                            </span>
                                        </div>
                                        <h3 className="blog-title blog-title-sm">
                                            <a href="#">{item.title}</a>
                                        </h3>
                                        <div className="post-text">
                                            <p>{item.sm_des}</p>
                                        </div>
                                        <div className="read-more-btn">
                                            <Link href="/blog-details" className="read-more">
                                                read more <i className="fas fa-long-arrow-alt-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            </div> 
                        )} 
                    </div>
                </div>
            </section>
        </>
    );
};

export default PostThreeArea;