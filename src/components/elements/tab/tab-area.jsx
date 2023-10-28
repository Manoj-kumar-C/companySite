import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

import VideoPopup from "@/src/modals/video-popup";
// tab thumb import here
import thumb_img_1 from "@assets/img/bg/tab1.png";
import thumb_img_2 from "@assets/img/bg/tab2.png";
import thumb_img_3 from "@assets/img/bg/tab3.png";
import thumb_img_4 from "@assets/img/bg/tab4.png";
// tab data 
const tab_data = [
    {
        id: 1,
        active: "show active",
        img: thumb_img_1,
        tab_id: "home-tab-pane",
        aria_labelledby: "home-tab",
        videoId: "uk2HnY0aqTk",
        title: "We’re available for 8 hours a day!",
        sm_des: <>We’re available for 8 hours a day! <br /> Contact to require a detailed analysis and assessment of your plan.</>,
        features: [
            "IT Consultancy",
            "Software Engineering",
            "Desktop Computing",
            "IT Design",
        ]
    },
    {
        id: 2,
        active: "",
        img: thumb_img_2,
        tab_id: "profile-tab-pane",
        aria_labelledby: "profile-tab",
        videoId: "uk2HnY0aqTk",
        title: "We’re available for 8 hours a day!",
        sm_des: <>We’re available for 8 hours a day! <br /> Contact to require a detailed analysis and assessment of your plan.</>,
        features: [
            "IT Consultancy",
            "Software Engineering",
            "Desktop Computing",
            "IT Design",
        ]
    },
    {
        id: 3,
        active: "",
        img: thumb_img_3,
        tab_id: "contact-tab-pane",
        aria_labelledby: "contact-tab",
        videoId: "uk2HnY0aqTk",
        title: "We’re available for 8 hours a day!",
        sm_des: <>We’re available for 8 hours a day! <br /> Contact to require a detailed analysis and assessment of your plan.</>,
        features: [
            "IT Consultancy",
            "Software Engineering",
            "Desktop Computing",
            "IT Design",
        ]
    },
    {
        id: 4,
        active: "",
        img: thumb_img_4,
        tab_id: "contact-tab1-pane",
        aria_labelledby: "contact-tab1",
        videoId: "uk2HnY0aqTk",
        title: "We’re available for 8 hours a day!",
        sm_des: <>We’re available for 8 hours a day! <br /> Contact to require a detailed analysis and assessment of your plan.</>,
        features: [
            "IT Consultancy",
            "Software Engineering",
            "Desktop Computing",
            "IT Design",
        ]
    },
]
function TabArea() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    return (
        <>
            <div className="elements-area pt-120 pb-50">
                <div className="container mb-70">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="section-title-2 text-center mb-70">
                                <span>Awesome feature</span>
                                <h2>Sometimes the best way to envision <br />
                                    the future is to invent it.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav x-tabs justify-content-center mb-50" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="home-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#home-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="home-tab-pane"
                                        aria-selected="true"
                                        tabIndex="-1"
                                    >Our mission
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="profile-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#profile-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="profile-tab-pane"
                                        aria-selected="false"
                                        tabIndex="-1"
                                    >Our services</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="contact-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#contact-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="contact-tab-pane"
                                        aria-selected="false"
                                        tabIndex="-1"
                                    >Technology</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="contact-tab1"
                                        data-bs-toggle="tab"
                                        data-bs-target="#contact-tab1-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="contact-tab1-pane"
                                        aria-selected="false"
                                        tabIndex="-1"
                                    >Our awards</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                {tab_data.map((item, i) => <div key={i} className={`tab-pane fade ${item.active}`}
                                    id={item.tab_id}
                                    role="tabpanel"
                                    aria-labelledby={item.aria_labelledby}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="tab-img mb-30">
                                                <Image src={item.img} alt="theme-pure" />
                                                <a className="popup-video"
                                                    onClick={() => setIsVideoOpen(true)}
                                                    style={{ cursor: "pointer" }}
                                                ><i className="far fa-play"></i></a>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 offset-lg-1">
                                            <div className="tab-wrapper mb-30">
                                                <p>{item.sm_des}</p>
                                                <ul>
                                                    {item.features.map((feature, index) => <li key={index}>{feature}</li>
                                                    )}
                                                </ul>
                                                <Link href="#">Let's get started <i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* video modal start */}
            <VideoPopup
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"g1u2_-Xz8qw"} />
            {/* video modal end */}
        </>
    );
}

export default TabArea;