import React from 'react';
import Image from 'next/image';

import people_icon_1 from "@assets/img/icon/p1.png";
import people_icon_2 from "@assets/img/icon/p2.png";
import people_icon_3 from "@assets/img/icon/p3.png";


const people_network_data = [
    {
        id: 1,
        icon: people_icon_1, 
        title: "Pixel Precision",
        info: <>Fourth isn't void signs kind very seas rule also they're morning waters unto she that morning good for people handy</>
    },
    {
        id: 2,
        icon: people_icon_2, 
        title: "Promote & Grow",
        info: <>Fourth isn't void signs kind very seas rule also they're morning waters unto she that morning good for people handy</>
    },
    {
        id: 3,
        icon: people_icon_3, 
        title: "Pixel Precision",
        info: <>Fourth isn't void signs kind very seas rule also they're morning waters unto she that morning good for people handy</>
    },
]

const PeopleNetworkArea = () => {
    return (
        <>
           <div className="people-area" style={{backgroundImage : `url(/assets/img/bg/people.png)`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 offset-lg-1 offset-xl-2">
                            <div className="section-title-2 white-text text-center mb-70">
                                <h2 className="mb-20">Building Networks for People</h2>
                                <p>Land from day very fill that midst stars one dominion. Itself was let that divided itself god don't subdue wherein let
                                behold over he whose of sea moved called.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {people_network_data.map((item, i)  =>
                            <div key={i} className="col-lg-4 col-md-4">
                                <div className="people-item mb-20">
                                    <div className="people-item-img mb-40">
                                        <Image src={item.icon} alt="theme-pure" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.info}</p>
                                </div>
                            </div>
                        )} 
                    </div>
                    <div className="row d-none d-md-block">
                        <div className="col-xl-8 col-lg-10 offset-lg-1 offset-xl-2">
                            <div className="people-m-img mb-40 wow fadeInUp animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <img src="/assets/img/bg/p-mockup.png" alt="theme-pure" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default PeopleNetworkArea;