import React from 'react';
import Link from 'next/link';
import useSticky from '@/src/hooks/use-sticky';

import logo_1 from "@assets/img/logo/logo.png";
import logo_2 from "@assets/img/logo/logo-white.png";
import Image from 'next/image';
import NavMenu from './nav-menu';
import { useSelector } from 'react-redux';
import MobileMenus from './mobile-menus';

const HeaderTwo = ({style_5}) => {
  const productItem = useSelector((state) => state.cart.cart); 
  const wishlistItem = useSelector((state) => state.wishlist.wishlist); 

    const {sticky} = useSticky()
    return (
        <>
        
            <header id="header-sticky" 
            className={`${style_5 ? "header-transparent header-text-white header-shop header-5" : "header-normal"} ${sticky && "sticky-bar"}`}>
            <div className="header-area">
                <div className="container">
                    <div className="position-relative">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-1">
                                <div className="logo">
                                    <Link href="/"> <Image src={style_5 ? logo_2 : logo_1} alt="theme-pure" /> </Link>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-8 position-static"> 
                                <div className={`main-menu ${style_5 ? "white-menu f-right" : "red-menu text-center"} d-none d-lg-block`}>
                                    <nav id="mobile-menu">
                                        <NavMenu /> 
                                    </nav>
                                </div>
                                <div className="mobile-menu mean-container d-lg-none">
                                <div className="mean-push"></div>
                                    <div className="mean-bar">
                                     <MobileMenus />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div className="header-btn header_btn_style text-end">  
                                   <div>
                                   <Link href="/wishlist">
                                        <i className="ti-heart">
                                        <span> {wishlistItem.length}</span> 
                                        </i>
                                    </Link>
                                    <Link href="/shopping-bag" className="px-3">
                                        <i className="ti-bag"><span className='wishlist_length'>{productItem.length}</span> </i>
                                    </Link> 
                                   </div>
                                   <div>
                                    <Link href="/register" className={`${style_5? "btn x-btn-white" : "x-btn"} btn-border btn-squ`}>Sign up</Link>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
};

export default HeaderTwo;