
import shop_data from '@/src/data/shop-data';
import { addToCart } from '@/src/redux/features/cart/cartSlice'; 
import { add_to_wishlist } from '@/src/redux/features/wishlist/wishlistSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';

const ShopArea = ({shop_list}) => {
    const dispatch = useDispatch()
    return (
        <>
            <section className="shop-banner-area pt-140 pb-140">
                <div className="container">
                    <div className="row mt-20">
                        <div className="col-xl-4 col-lg-5 col-md-6">
                            <div className="product-showing mb-40">
                                <p>Showing 1–22 of 32 results</p>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 col-md-6">
                            <div className="shop-tab f-right mb-40">
                                <ul className="nav text-center" id="myTab" role="tablist"> 
                                    <li className="nav-item" role="presentation">
                                    <a className={`nav-link ${shop_list ? "" : "active"}`}
                                        id="grid-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#grid-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="grid-tab-pane"
                                        aria-selected="true"
                                        tabIndex="-1"> 
                                            <i className="ti-layout-grid2"></i>                                        
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className={`nav-link ${shop_list ? "active" : ""}`}
                                        id="menu-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#menu-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="menu-tab-pane"
                                        aria-selected="false"
                                        tabIndex="-1">
                                           <i className="ti-menu-alt"></i>
                                    </a>
                                </li>
                                </ul>
                            </div>
                            <div className="pro-filter d-flex align-items-center justify-content-end f-right mb-40">
                                <h5>Sort by</h5>
                                <form  onSubmit={(e) => e.preventDefault()}>
                                    <select name="pro-filter" id="pro-filter">
                                        <option className='inner_option' value="1">A to Z Product </option>
                                        <option className='inner_option' value="2">Top Sales </option>
                                        <option className='inner_option' value="3">New Product </option>
                                        <option className='inner_option' value="4">Shop By</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="tab-content" id="myTabContent">
                                
                                <div className={`tab-pane fade ${shop_list ? "" : "show active"}`} id="grid-tab-pane" role="tabpanel" aria-labelledby="grid-tab">
                                    <div className="row">
                                        {shop_data.map((item, i) => {
                                            const {id, img, title, price, old_price} = item || {}
                                            return( <div key={i} className="col-lg-4 col-md-6">
                                                <div className="product mb-40">
                                                    <div className="product__img">
                                                        <Link href={`/product-details/${id}`}>
                                                            <Image src={img} object-fit="cover" alt="theme-pure" />
                                                        </Link>
                                                        <div className="product-action text-center">
                                                            <button onClick={() => dispatch(add_to_wishlist(item))}><i className="ti-heart"></i></button>
                                                            <button onClick={() => dispatch(addToCart(item))}><i className="ti-bag"></i></button>
                                                            <Link href={`/product-details/${id}`}><i className="ti-eye"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="product__content text-center pt-30">
                                                        <h4 className="pro-title">
                                                            <Link href={`/product-details/${id}`}>{title}</Link>
                                                        </h4>
                                                        <div className="price">
                                                            <span>${price}</span>
                                                            <span className="old-price">${old_price}</span>
                                                        </div>
                                                        <div className="ratings mt-10">
                                                            <i className="ti-star"></i>
                                                            <i className="ti-star"></i>
                                                            <i className="ti-star"></i>
                                                            <i className="ti-star"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        )})}
                                    </div>
                                </div>

                                <div className={`tab-pane fade ${shop_list ? "show active" : ""}`} id="menu-tab-pane" role="tabpanel" aria-labelledby="menu-tab">
                                    {shop_data.map((item, i) => {
                                        const {id, img, title, price, old_price, sm_des} = item || {}
                                        return  (<div key={i} className="row list_style">
                                            <div className="col-lg-3 col-md-6 list_style">
                                                <div className="product mb-30">
                                                    <div className="product__img menu_tab_img">
                                                        <Link href={`/product-details/${id}`}>
                                                            <Image src={img} object-fit="cover" alt="theme-pure" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-9 border_style mb-30">
                                                <div className="product-list-content pt-10">
                                                    <div className="product__content mb-20">
                                                        <div className="ratings mb-10">
                                                            <i className="ti-star"></i>
                                                            <i className="ti-star"></i>
                                                            <i className="ti-star"></i>
                                                            <i className="ti-star"></i>
                                                        </div>
                                                        <h4 className="pro-title">
                                                            <Link href={`/product-details/${id}`}>{title}</Link>
                                                        </h4>
                                                        <div className="price">
                                                            <span>${price}</span>
                                                            <span className="old-price">${old_price}</span>
                                                        </div>
                                                    </div>
                                                    <p>{sm_des}</p>
                                                    <div className="product-action-list pt-15">
                                                        <button className="btn-cart" onClick={() => dispatch(addToCart(item))}>add to cart</button>
                                                        <button className="action-btn" onClick={() => dispatch(add_to_wishlist(item))}><i className="ti-heart"></i></button>
                                                        <Link className="action-btn" href={`/product-details/${id}`}>
                                                            <i className="ti-eye"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>  
                                        )})}
                                    
                                </div>
                            </div>
                        </div>
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
            </section>
        </>
    );
};

export default ShopArea;