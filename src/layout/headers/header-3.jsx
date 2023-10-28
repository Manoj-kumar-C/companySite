import useSticky from '@/src/hooks/use-sticky';
import Link from 'next/link';
import React from 'react';
import NavMenu from './nav-menu';
import MobileMenus from './mobile-menus';


const HeaderThree = ({style_7}) => {
   const {sticky} =   useSticky()

    return (
        <> 
            <header id="header-sticky" className={`${style_7 ? "header-transparent header-green" : "header-normal"}  ${sticky && "sticky-bar"}`}>
            <div className="header-area">
                <div className="container">
                    <div className="position-relative">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo">
                                    <Link href="/"> <img src="assets/img/logo/logo.png" alt="theme-pure" /> </Link>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 position-static">
                                <div className={`main-menu ${style_7 ? "" : "pink-menu"} text-center d-none d-lg-block`}>
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
                            <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                                <div className="header-btn text-right">
                                    <Link href="/register" className={`x-btn btn-border ${style_7 ? "" : "btn-radius"}`}>Sign up</Link>
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

export default HeaderThree;