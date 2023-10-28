import useSticky from '@/src/hooks/use-sticky';
import Link from 'next/link';
import React from 'react';
import NavMenu from './nav-menu';
import Image from 'next/image';

import logo_img from "../../../public/assets/img/logo/logo.png";
import MobileMenus from './mobile-menus';

const HeaderFive = () => {
   const {sticky} =   useSticky()

    return (
        <>
          <header id="header-sticky" className={`header-normal header-transparent header-full ${sticky && "sticky-bar"}`}>
            <div className="header-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2">
                            <div className="logo">
                                <Link href="/"> <Image src={logo_img} alt="theme-pure" /> </Link>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7">
                            <div className="main-menu red-menu text-left d-none d-lg-block">
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
                        <div className="col-xl-2 col-lg-3 d-none d-lg-block">
                            <div className="header-btn text-right">
                                <Link href="/register" className="x-btn btn-border btn-squ x-btn-white">15 days free trial</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>  
        </>
    );
};

export default HeaderFive;