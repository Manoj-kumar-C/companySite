import React from 'react';
import Image from 'next/image';
import team_data from '@/src/data/team-data';

const TeamArea = () => {
    return (
        <>
            <div className="team-area pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="section-title-pink text-center mb-70">
                                <span>team member</span>
                                <h2>Our young, tallent and experienced <br />
                                team member</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {team_data.slice(0, 4).map((item, i)  => 
                            <div key={i} className="col-xl-3 col-lg-3 col-md-6">
                                <div className="team-wrapper text-center mb-30">
                                    <div className="team-img mb-25">
                                        <Image src={item.avatar} alt="theme-pure" />
                                    </div>
                                    <div className="team-text">
                                        <h4>{item.name}</h4>
                                        <span>{item.job_title}</span>
                                        <div className="team-icon"> 
                                            <a href="#"><i className="ti-google"></i></a>
                                            <a href="#"><i className="ti-instagram"></i></a>
                                            <a href="#"><i className="ti-twitter"></i></a>
                                            <a href="#"><i className="ti-tumblr"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )} 
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamArea;