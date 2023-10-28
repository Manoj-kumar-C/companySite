import React from "react";
import Link from "next/link";
import Image from "next/image";

import access_shape_1 from "@assets/img/shape/shape6.png";
import access_img from "@assets/img/bg/social-bg.png";
import access_icon from "@assets/img/icon/access-icon.png";

const access_content = {
  title: <> Easy To <br /> Access All Platform </>,
  sm_des: <>  Make fly forth also won't. Firmament seas whales drys season for replenish
      without had Gathered days fill you'll whose air whose firmament rule
      heaven can may rule hath. All of unto beginni ad Light. Were blessed plant
    </> ,
};
const { title, sm_des } = access_content;

const AccessArea = () => {
  return (
    <>
      <section className="access-area pos-relative">
        <div className="shape-section">
          <Image
            className="shape shape-a "
            src={access_shape_1}
            alt="theme-pure"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-12">
              <div
                className="access-img wow fadeInLeft animated"
                data-wow-duration="1.5s"
                data-wow-delay=".5s"
              >
                <Image src={access_img} alt="theme-pure" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="acces-text pt-35">
                <Image src={access_icon} alt="theme-pure" />
                <h3>{title}</h3>
                <p>{sm_des}</p>
                <div data-aos="fade-up">
                  <Link href="#" className="x-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessArea;
