import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import NavMenu from './nav-menu';
import MobileMenus from './mobile-menus';
import useSticky from '@/src/hooks/use-sticky';
import logo_img  from "../../../public/assets/img/logo/logo-white.png";

const HeaderFour = () => {
    const {sticky} = useSticky()

    return (
        <>
        <header id="header-sticky" className={`header-transparent header-text-white header-shop ${sticky && "sticky-bar"}`}>
            <div className="header-area">
                <div className="container">
                    <div className="position-relative">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-4">
                                <div className="logo">
                                    <Link href="/"> <Image src={logo_img} alt="theme-pure" /> </Link>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-8 position-static">
                                <div className="header-right-info f-right d-none d-md-block">
                                    <div className="header-btn text-right f-right pl-25 ">
                                        <a href="#" className="x-btn btn-border btn-squ x-btn-white">Sign up </a>
                                    </div>
                                    <div className="mini-cart-icon f-right mt-10">
                                        <div className="d-inline pos-relative">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <span>2</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-menu white-menu f-right d-none d-lg-block">
                                    <nav id="mobile-menu">
                                    <NavMenu />  
                                    </nav>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile-menu mean-container d-lg-none">
                                <div className="mean-push"></div>
                                    <div className="mean-bar">
                                     <MobileMenus />
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

export default HeaderFour;