import React from "react";
import Image from "next/image";
import InnerBrandArea from "../../common/inner-brand-area";

import shape_img_1 from "@assets/img/shape/shape-tr-2.png";
import shape_img_2 from "@assets/img/shape/shape-c-1.png";

const BrandArea = () => {
  return (
    <>
      <div className="brand-area pos-relative pb-145">
        <div className="shape-slider">
          <Image
            className="shape shape-1 shape-5-1"
            src={shape_img_1}
            alt="theme-pure"
          />
          <Image className="shape shape-5" src={shape_img_2} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="section-title-3 text-center mb-70">
                <h2 className="mb-20">Trusted over 100+ companies</h2>
                <p>Him have deep brought life darkness firmament unto move</p>
              </div>
            </div>
          </div>
          <div className="row brand-active-2">
            <InnerBrandArea />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandArea;
