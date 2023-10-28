import Link from 'next/link'; 
import Image from 'next/image';

import shape_1 from "@assets/img/shape/shape2.png"    ;
import shape_2 from "@assets/img/shape/shape3.png"    ;
import shape_3 from "@assets/img/shape/shape-sq.png"  ;
import shape_4 from "@assets/img/shape/shape-c-2.png" ;

const BreadcrumbSix = () => {
    return (
        <>
            <div className="page-title-area pos-relative  fix" style={{backgroundImage : `url(/assets/img/bg/page-title-bg-3.jpg)`}}>
                <div className="shape-slider">
                    <Image className="shape shape-2" src={shape_1} alt="theme-pure" />
                    <Image className="shape shape-4" src={shape_2} alt="theme-pure" />
                    <Image className="shape shape-5" src={shape_3} alt="theme-pure" />
                    <Image className="shape shape-6" src={shape_4} alt="theme-pure" />
                </div>
                <div className="page-title-bar-overlay"></div>
                <div className="page-title-inner page-title-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title page-title-white text-center mb-30 pos-relative">
                                    <h3>Blog Details Gallery</h3>
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
                                        <li><Link href="/">Home</Link></li>
                                        <li>Blog Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BreadcrumbSix;