import Link from 'next/link';
import  Image  from 'next/image';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import two_column_masonry_data from '@/src/data/two-column-masonry-data';



const BlogTwoColumnMasonryArea = () => {
    return (
        <>
            <section className="blog-area pt-120 pb-120">
                <div className="container">
                    <div className="row blog-masonry">
                        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 768: 2, 992: 2, 1200: 2, 1400:2 }} >
                            <Masonry gutter="25px" >
                                {two_column_masonry_data.map((item, i) => 
                                    <div key={i} className="grid-item">
                                        <article className="postbox post format-image mb-40">
                                            <div className="postbox__thumb mb-25">
                                                <Link href="#">
                                                    <Image src={item.img} alt="theme-pure" />
                                                </Link>
                                            </div>
                                            <div className="postbox__text">
                                                <div className="post-meta mb-15">
                                                    <span><Link href="#">
                                                        <i className="far fa-user"></i>{item.user}</Link>
                                                    </span>
                                                    <span><Link href="#">
                                                        <i className="far fa-comments"></i>{item.comment} Comments</Link>
                                                    </span>
                                                </div>
                                                <h3 className="blog-title blog-title-sm">
                                                    <a href="#">{item.title}</a>
                                                </h3>
                                                <div className="post-text">
                                                    <p>{item.sm_des}</p>
                                                </div>
                                                <div className="read-more-btn">
                                                    <Link href="/blog-details" className="read-more">read more 
                                                    <i className="fas fa-long-arrow-alt-right"></i></Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>                            
                                )} 
                            </Masonry>
                        </ResponsiveMasonry> 
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="basic-pagination basic-pagination-2 text-center">
                                <ul>
                                    <li><Link href="#"><i className="fas fa-angle-double-left"></i></Link></li>
                                    <li><Link href="#">01</Link></li>
                                    <li className="active"><Link href="#">02</Link></li>
                                    <li><Link href="#">03</Link></li>
                                    <li><Link href="#"><i className="fas fa-ellipsis-h"></i></Link></li>
                                    <li><Link href="#"><i className="fas fa-angle-double-right"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogTwoColumnMasonryArea;