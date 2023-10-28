 import team_data from '@/src/data/team-data';
import Link from 'next/link';
import React from 'react';
import Image  from 'next/image';
 
 const TeamTwoArea = ({style_elem}) => {
    return (
        <>
            <div className={`team-box-area ${style_elem? "" : "pt-150"}pb-110`}>
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
                        {team_data.slice(8, 14).map((item, i) => 
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="team-box-wrapper text-center mb-30">
                                    <div className="team-box-img mb-25">
                                        <Image src={item.avatar} alt="theme-pure" />
                                    </div>
                                    <div className="team-box-text d-flex flex-column align-items-center justify-content-center">
                                        <h4>{item.name}</h4>
                                        <span>{item.job_title}</span>
                                        <div className="team-box-icon">
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
 
 export default TeamTwoArea;