import Link from "next/link";
import Image from "next/image";

 import shape_1 from "@assets/img/shape/shape2.png";
 import shape_2 from "@assets/img/shape/shape3.png";
 import shape_3 from "@assets/img/shape/shape-sq.png";
 import shape_4 from "@assets/img/shape/shape-c-2.png";

const BreadcrumbThree = () => {
    return (
        <>
            <div className="page-title-area pos-relative gray-bg pt-150 pb-150 fix"
                style={{backgroundImage: `url(/assets/img/bg/page-title-bg-2.jpg)`}}>
                <div className="page-title-bar-overlay"></div>
                <div className="shape-slider">
                    <Image className="shape shape-2" src={shape_1}  alt="theme-pure" />
                    <Image className="shape shape-4" src={shape_2}  alt="theme-pure" />
                    <Image className="shape shape-5" src={shape_3}  alt="theme-pure" />
                    <Image className="shape shape-6" src={shape_4}  alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <div className="page-title title-white-text mb-20 pos-relative">
                                <h3>Blog 2 Columns</h3>
                            </div>
                            <div className="breadcrumb-list list-white list-cneter">
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li>Blog Page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BreadcrumbThree;