import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import single_img from "@assets/img/portfolio/portfolio-details.jpg";


const PortfolioSingleTwoArea = () => {
    return (
        <>
            <div className="portfolio-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-details-thumb single_two mb-35">
                                <Image src={single_img} alt="theme-pure" />
                            </div>
                            <div className="portfolio-info-list portfolio-info-list-inline mb-30">
                                <ul>
                                    <li>
                                        <div className="xn-list-heading"><h5>Client</h5></div>
                                        <div className="xn-list-cont"><p>Futura</p></div>
                                    </li>
                                    <li>
                                        <div className="xn-list-heading"><h5>Year</h5></div>
                                        <div className="xn-list-cont"><p>2019</p></div>
                                    </li>
                                    <li>
                                        <div className="xn-list-heading"><h5>Services</h5></div>
                                        <div className="xn-list-cont"><p>Branding</p></div>
                                    </li>
                                    <li>
                                        <div className="xn-list-heading"><h5>Website</h5></div>
                                        <div className="xn-list-cont">
                                            <Link href="https://themeforest.net/user/basictheme/portfolio" target="_blank"> 
                                                themeforest.net
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="xn-p-details mb-30">
                                <h2>Limited Edition</h2>
                                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.The
                                attributed some to an unknown typesetter in the 15th century eu who is thought to have scrambled parts of Cicero'sDe
                                lorem.

                                Malorum for use in a type specimen book. Ionsectetur adipiscing elit.Nullam posuere elementum orci, vel sagittis ante. Donec a congue eros. Ut sem arcu, convallis in varius nec,
                                bibendum eget libero. Suspendisse lobortis luctus orci,</p>
                                <p>Behold living. Creeping gathered give sea third multiply midst winged tree bring wherein living itsmoving our him dry
                                female his lights herb. in viverra ante sagittis vel. Fusce sit amet
                                    facilisis lorem, eget pellentesque turpis. Aliquam placerat elit urna, vel sagittis velit condimentum.</p>
                            </div>
                            <div className="social-buttons">
                                <div className="mb-20 d-inline-block pr-20">
                                    <h5>Share</h5>
                                </div>
                                <div className="social-share d-inline-block">
                                    <Link href="#" className="btn-social" title="Share on Facebook"><i className="fab fa-facebook-f"></i></Link>
                                    <Link href="#" className="btn-social" title="Share on Twitter"><i className="fab fa-twitter"></i></Link>
                                    <Link href="#" className="btn-social" title="Share on Pinterest"><i className="fab fa-pinterest"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioSingleTwoArea;