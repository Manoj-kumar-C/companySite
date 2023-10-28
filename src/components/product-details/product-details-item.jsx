import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../common/social-links";
import { addToCart } from "@/src/redux/features/cart/cartSlice";
import { useDispatch } from 'react-redux';
import { add_to_wishlist } from "@/src/redux/features/wishlist/wishlistSlice";
import CommentsReply from './../blog-pages/blog-details/comments-reply';


const setting = {
    dots: false,
    arrows: false,
    infinite: true, 
    speed: 300,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
}

const ProductDetailsItem = ({sp_item}) => {
    const dispatch = useDispatch()
    const { title, price, old_price, stock,  category, tags, sku, sm_des, slider_imgs,  } = sp_item || {}
    console.log(sp_item)
    
    return (
        <>

        <section className="shop-banner-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="product-details-img mb-30">
                                <Slider {...setting} className="product-large-img">
                                    {slider_imgs?.map((img, i ) => 
                                        <Image key={i} src={img} alt="theme-pure" /> 
                                    )} 
                                </Slider>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="product-details mb-30">
                                <div className="product-details-title mb0">
                                    <div className="ratings mb-10">
                                        <i className="ti-star"></i>
                                        <i className="ti-star"></i>
                                        <i className="ti-star"></i>
                                        <i className="ti-star"></i>
                                    </div>
                                    <h3>{title}</h3>
                                    <div className="price details-price pb-15">
                                        <span>${price}.00</span>
                                        <span className="old-price">${old_price}.00</span>
                                    </div>
                                    <span className="stock">{stock ? "in stock" : "out stock"}</span>
                                </div>  
                                 <p>{sm_des}</p> 
                                <div className="product-cat mt-5 mb0">
                                    <span>Category: </span>
                                    {category?.map((cate, index ) => <Link href="#" key={index}>{cate}</Link>)} 
                                </div>
                                <div className="product-cat mb0">
                                    <span>Tags: </span>
                                    {tags?.map((tag, i) =>  <Link href="#" key={i}>{tag} </Link>)} 
                                </div>
                                <div className="product-cat mb0">
                                    <span>SKU: </span>
                                    <Link href="#">{sku}</Link>
                                </div>
                                <div className="product-details-action mb-45 fix">
                                    <form className="f-left" action="#">
                                        <div className="plus-minus">
                                            <div className="cart-plus-minus"><input type="text" defaultValue="1" /></div>
                                        </div>
                                    </form>
                                    <div className="product-action-list f-left">
                                        <button className="btn-cart" onClick={() => dispatch(addToCart(sp_item))}>add to cart</button>
                                        <button className="action-btn" onClick={() => dispatch(add_to_wishlist(sp_item))}><i className="ti-heart"></i></button> 
                                    </div>
                                </div>
                                <div className="product-social fix">
                                    <SocialLinks />  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="product-desc-area pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bakix-details-tab">
                                <ul className="nav text-center justify-content-center pb-30 mb-30" id="myTab" role="tablist">                           
                                    <li className="nav-item" role="presentation">
                                        <button 
                                            className="nav-link active" 
                                            id="description-tab" 
                                            data-bs-toggle="tab"
                                            data-bs-target="#description-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="description-tab-pane"
                                            aria-selected="true"
                                            tabIndex="-1" 
                                            >
                                                Description
                                            </button>
                                      </li> 
                                        <li className="nav-item" role="presentation">
                                            <button 
                                            className="nav-link" 
                                            id="information-tab" 
                                            data-bs-toggle="tab" 
                                            data-bs-target="#information-tab-pane" 
                                            type="button"
                                            role="tab"  
                                            aria-controls="information-tab-pane"
                                            aria-selected="false" 
                                            tabIndex="-1"
                                            >Additional Information</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button 
                                            className="nav-link" 
                                            id="reviews-tab" 
                                            data-bs-toggle="tab" 
                                            data-bs-target="#reviews-tab-pane" 
                                            type="button"
                                            role="tab"  
                                            aria-controls="reviews-tab-pane"
                                            aria-selected="false" 
                                            tabIndex="-1"
                                            >Reviews(10)</button>
                                        </li>
                                    </ul>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="description-tab-pane" role="tabpanel" aria-labelledby="description-tab">
                                    <div className="event-text mb-40">
                                        <h5>About This Item</h5>
                                        <p>
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                            id est laborum. Sed ut perspiciatis
                                        </p>
                                        <p>
                                        unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                            totam rem aperiam, eaque ipsa quae ab
                                            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                            Nemo enim ipsam voluptatem quia
                                            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                            eos qui ratione voluptatem sequi
                                            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                            consectetur, adipisci velit, sed quia non
                                            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                            voluptatem.
                                        </p>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                            deserunt mollit anim id est laborum. Sed ut
                                            perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                            laudantium, totam rem aperiam, eaque
                                            ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                                            sunt explicabo. Nemo enim ipsam voluptatem
                                            quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                                            dolores eos qui ratione voluptatem sequi
                                            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                            consectetur, adipisci velit, sed quia non
                                            numquam eius modi tempora.</p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="information-tab-pane" role="tabpanel" aria-labelledby="information-tab">
                                    <div className="additional-info">
                                        <div className="table-responsive">
                                            <h4>Additional information</h4>
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <th>Weight</th>
                                                        <td className="product_weight">1.4 oz</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Dimensions</th>
                                                        <td className="product_dimensions">62 × 56 × 12 in</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Size</th>
                                                        <td className="product_dimensions">XL, XXL, LG, SM, MD</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab">
                                    <div className="additional-info">
                                        <div className="event-text mb-40">
                                        <CommentsReply /> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetailsItem;