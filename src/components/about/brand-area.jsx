import Link from "next/link";
import Image from "next/image";
import shape_1 from "@assets/img/shape/shape-tr-2.png";
import shape_2 from "@assets/img/shape/shape-c-1.png";

import brand_img_1 from "@assets/img/brand/01.png";
import brand_img_2 from "@assets/img/brand/02.png";
import brand_img_3 from "@assets/img/brand/03.png";
import brand_img_4 from "@assets/img/brand/04.png";
import brand_img_5 from "@assets/img/brand/05.png";
const brands = [brand_img_1, brand_img_2, brand_img_3, brand_img_4, brand_img_5, brand_img_1, brand_img_4, brand_img_5, brand_img_1]

const BrandArea = ({team}) => {
    return (
        <> 
           <div className={`brand-area pos-relative ${team? "" : "pt-145"} pb-90`}>
                <div className="shape-slider">
                    <Image className="shape shape-1 shape-5-1 "src={shape_1} alt="theme-pure" />
                    <Image className="shape shape-5" src={shape_2} alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="section-title-2 text-center mb-70">
                                <h2 className="mb-20">Trusted over 100+ companies</h2>
                                <p>Him have deep brought life darkness firmament unto move</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {brands.map((item, i) => 
                            <div key={i} className="logo-brand-item">
                                <div className="brand-img">
                                    <Link href="#"><Image src={item} alt="theme-pure" /></Link>
                                </div>
                            </div>                        
                        )} 
                    </div>
                </div>
            </div> 
        </>
    );
};

export default BrandArea;