import Image from "next/image"

import about_icon from "@assets/img/icon/fea-list.png";
import about_right_img from "@assets/img/bg/fea-list-right-img.png";
import about_left_img from "@assets/img/bg/fea-list-left-img.png";
import Link from "next/link";

const about_content = {
    title_1: <>Runs faster, Costs less And never breaks</>,
    info_1: <>Binged do forth have their which void in above moved all brought is prese the mode ken him together</>,
    info_2: <>There evening days two forth let fruitful wherein yielding dry for one waters of and over all divide over place, abundantly Upon dominion i image seed gathered you</>,
    title_2: <>Setting the Standard in Device Programming</>,

}
const {title_1, info_1, info_2, title_2}  = about_content  


const AboutArea = ()  => {
    return (
        <>
        <section className="features-list-area pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5">
                            <div className="fea-content-list mb-30">
                                <div className="fea-list-icon mb-25">
                                    <Image src={about_icon}  alt="theme-pure" />
                                </div>
                                <h2>{title_1}</h2>
                                <span> {info_1}</span>
                                <p>{info_2}</p>
                                <div data-aos="fade-up">
                                    <Link href="#" className="x-btn btn-border btn-squ">learn more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="fea-list-right-img pl-70 mb-30 wow fadeInRight animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <Image src={about_right_img}  alt="theme-pure" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            <section className="features-list-area pos-relative">
                <div className="shape-slider">
                    <span className="shape shape-circle shape-c-4 "></span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-7">
                            <div className="fea-list-left-img wow fadeInLeft animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <Image src={about_left_img}  alt="theme-pure" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 offset-xl-1">
                            <div className="fea-content-list">
                                <div className="fea-list-icon mb-25">
                                    <Image src={about_icon}  alt="theme-pure" />
                                </div>
                                <h2>{title_2}</h2>
                                <span>{info_1}</span>
                                <p>{info_2}</p>
                                <div data-aos="fade-up">
                                    <Link href="#" className="x-btn btn-border btn-squ">learn more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutArea 