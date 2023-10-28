 import team_data from '@/src/data/team-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
 
 const TeamArea = () => {
    return (
        <>
            <div className="team-area pt-150 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="section-title-4 text-center mb-70">
                                <h2>Experienced Team Member</h2>
                                <p>Him have deep brought life darkness firmament unto move</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {team_data.slice(0, 8).map((item, i) => 
                            <div key={i} className="col-xl-3 col-lg-3 col-md-6">
                                <div className="team-wrapper text-center mb-30">
                                    <div className="team-img mb-25">
                                        <Image src={item.avatar} alt="theme-pure" />
                                    </div>
                                    <div className="team-text">
                                        <h4>{item.name}</h4>
                                        <span>{item.job_title}</span>
                                        <div className="team-icon">
                                            <Link href="#"><i className="ti-google"></i></Link>
                                            <Link href="#"><i className="ti-instagram"></i></Link>
                                            <Link href="#"><i className="ti-twitter"></i></Link>
                                            <Link href="#"><i className="ti-tumblr"></i></Link>
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