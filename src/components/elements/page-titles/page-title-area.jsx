import React from 'react';

const PageTitleArea = () => {
    return (
        <>
            {/* <!-- page-title-area start --> */}
            <div className="page-title-area pos-relative gray-bg pt-150 pb-120 fix mb-50"
                style={{backgroundImage: `url(/assets/img/bg/page-title-bg-2.jpg)`}}>
                <div className="page-title-bar-overlay"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="page-title title-white-text mb-30 pos-relative">
                                <h3>Contact</h3>
                                <p>Go fifth signs dry light sea created greater</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="breadcrumb-list list-white text-left text-lg-end mb-30">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- page-title-area end --> */}
            {/* <!-- page-title-area start --> */}
            <div className="page-title-area pos-relative gray-bg  fix mb-50" 
            style={{backgroundImage: `url(/assets/img/bg/page-banner.jpg)`}}>
                <div className="page-title-bar-overlay"></div>
                <div className="page-title-inner page-title-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title page-title-white text-center mb-30 pos-relative">
                                    <h3>Blog Details</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-breadcrumb-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-list breadcrumb-list-white text-center">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li>Blog Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- page-title-area end --> */}
            {/* <!-- page-title-area start --> */}
            <div className="page-title-area pos-relative gray-bg pt-150 pb-150 fix mb-50"
                style={{backgroundImage: `url(/assets/img/bg/page-title-bg-2.jpg)`}}>
                <div className="page-title-bar-overlay"></div>
                <div className="shape-slider">
                    <img className="shape shape-2" src="assets/img/shape/shape2.png" alt="theme-pure" />
                    <img className="shape shape-4" src="assets/img/shape/shape3.png" alt="theme-pure" />
                    <img className="shape shape-5" src="assets/img/shape/shape-sq.png" alt="theme-pure" />
                    <img className="shape shape-6" src="assets/img/shape/shape-c-2.png" alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <div className="page-title title-white-text mb-20 pos-relative">
                                <h3>Contact</h3>
                            </div>
                            <div className="breadcrumb-list list-white list-cneter">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- page-title-area end --> */} 
        </>
    );
};

export default PageTitleArea;