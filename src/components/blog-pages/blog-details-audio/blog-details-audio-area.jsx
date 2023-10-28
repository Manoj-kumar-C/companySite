import Link from 'next/link';
import Image from 'next/image'; 

import PostComment from '../../forms/post-comment';
import BlogSideArea from './../blog-common/blog-side-area';
import CommentsReply from '../blog-details/comments-reply';
import two_column_data_two from '@/src/data/two-column-data-2';

const BlogDetailsAudioArea = () => {
    return (
        <>
            <section className="blog-area pt-120 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <article className="postbox post format-image mb-40">
                                <div className="postbox__audio embed-responsive embed-responsive-16by9 mb-30">
                                    <iframe 
                                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/698760694&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"> 
                                    </iframe>
                                </div>
                                <div className="postbox__text bg-none">
                                    <div className="post-meta mb-15">
                                        <span><i className="far fa-calendar-check"></i> September 15, 2018 </span>
                                        <span><Link href="#"><i className="far fa-user"></i> Diboli B. Joly</Link></span>
                                        <span><Link href="#"><i className="far fa-comments"></i> 23 Comments</Link></span>
                                    </div>
                                    <h3 className="blog-title">
                                        If you find yourself constantly bookmarking health sections on news.
                                    </h3>
                                    <div className="post-text mb-20">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo.</p>
                                        <p>Bccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                            laborum. Sed ut perspiciatis
                                            unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                            aperiam, eaque ipsa quae ab
                                            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                            enim ipsam voluptatem quia
                                            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi
                                            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                            adipisci velit, sed quia non
                                            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                            voluptatem.</p>
                                        <blockquote>
                                            <p>This health blog from NPR takes a fairly broad look at the medical world,.</p>
                                            <footer>- Rosalina Pong</footer>
                                        </blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                            nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>

                                        <div className="blog-inner-img mb-30 mt-30">
                                            <img src="assets/img/blog/b6.jpg" alt="theme-pure" />
                                        </div>

                                        <div className="inner-content">
                                            <h4>Together made firmament third male greater</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat.
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                                fugiat nulla pariatur. Excepteur
                                                sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                                        </div>
                                        <div className="inner-content">
                                            <h4>Setting the mood with incense</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat.
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                                fugiat nulla pariatur. Excepteur
                                                sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                                        </div>
                                    </div>
                                    <div className="row mt-50">
                                        <div className="col-xl-8 col-lg-8 col-md-8 mb-15">
                                            <div className="blog-post-tag">
                                                <span>Releted Tags</span>
                                                <Link href="#">organic</Link>
                                                <Link href="#">Foods</Link>
                                                <Link href="#">tasty</Link>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 mb-15">
                                            <div className="blog-share-icon text-left text-md-right">
                                                <span>Share: </span>
                                                <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                                <Link href="#"><i className="fab fa-twitter"></i></Link>
                                                <Link href="#"><i className="fab fa-instagram"></i></Link>
                                                <Link href="#"><i className="fab fa-google-plus-g"></i></Link>
                                                <Link href="#"><i className="fab fa-vimeo-v"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="navigation-border pt-50 mt-40"></div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="bakix-navigation b-next-post text-left mb-30">
                                                <span><Link href="#">Prev Post</Link></span>
                                                <h4><Link href="#">Tips on Minimalist</Link></h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="bakix-navigation b-next-post text-left text-md-right  mb-30">
                                                <span><Link href="#">Next Post</Link></span>
                                                <h4><Link href="#">Tips on Minimalist</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="author mt-80 mb-40">
                                    <div className="author-img text-center">
                                        <img src="assets/img/blog/details/author.png" alt="theme-pure" />
                                    </div>
                                    <div className="author-text text-center">
                                        <h3>MD. Salim Rana</h3>
                                        <div className="author-icon">
                                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-behance-square"></i></Link>
                                            <Link href="#"><i className="fab fa-youtube"></i></Link>
                                            <Link href="#"><i className="fab fa-vimeo-v"></i></Link>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex
                                            ea commodo consequa aute irure dolor. </p>
                                    </div>
                                </div>
                                <div className="post-comments">
                                    <div className="blog-coment-title mb-30">
                                        <h2>Related Post</h2>
                                    </div>
                                    <div className="row">
                                    {two_column_data_two.slice(4, 6).map((item, i) => 
                                            <div key={i} className="col-md-6">
                                                <article className="postbox post format-image mb-40">
                                                    <div className="postbox__thumb mb-25">
                                                        <Link href="#">
                                                            <Image src={item.img} alt="theme-pure" />
                                                        </Link>
                                                    </div>
                                                    <div className="postbox__text ">
                                                        <div className="post-meta mb-10">
                                                            <span><Link href="#"><i className="far fa-user"></i>{item.user}</Link></span>
                                                            <span><Link href="#"><i className="far fa-comments"></i> {item.comment} Comments</Link></span>
                                                        </div>
                                                        <h3 className="blog-title blog-title-sm">
                                                            <Link href="#">{item.title}</Link>
                                                        </h3>
                                                        <div className="post-text">
                                                            <p>{item.sm_des}</p>
                                                        </div>
                                                        <div className="read-more-btn">
                                                            <Link href="#" className="read-more">
                                                                read more <i className="fas fa-long-arrow-alt-right"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>                                         
                                        )}  
                                    </div>
                                </div>
                                <div className="post-comments">
                                    <div className="blog-coment-title mb-30">
                                        <h2>03 Comments</h2>
                                    </div>
                                    <div className="latest-comments">
                                        <CommentsReply /> 
                                    </div>
                                </div>
                                <div className="post-comments-form">
                                    <div className="post-comments-title">
                                        <h2>Post Comments</h2>
                                    </div>
                                     <PostComment />
                                </div>
                            </article>
                        </div>
                        
                        <BlogSideArea /> 
                    </div>
                </div>
            </section> 
        </>
    );
};

export default BlogDetailsAudioArea;