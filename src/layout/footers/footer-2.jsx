import React from 'react';
import { CopyRight } from '@/src/components/common/social-links';
import Link from 'next/link';


const footer_content = {
    footer_links: [
        {
            id: 1, 
            title: "Quick Links",
            links: [
                { title: "Store Hours", link: "#"},
                { title: "Brand Assets", link: "#"},
                { title: "Investor Relations", link: "#"},
                { title: "Terms of Service", link: "#"},
                { title: "Privacy & Policy", link: "#"},
            ]
        },
        {
            id: 2, 
            title: "My Account",
            links: [
                { title: "Press Inquiries", link: "#"},
                { title: "Media Directories", link: "#"},
                { title: "Investor Relations", link: "#"},
                { title: "Terms of Service", link: "#"},
                { title: "Speaker Request", link: "#"},
            ]
        },
        {
            id: 3, 
            title: "Resources",
            links: [
                { title: "Application Security", link: "#"},
                { title: "Software Policy", link: "#"},
                { title: "Supply Chain", link: "#"},
                { title: "Agencies Relation", link: "#"},
                { title: "Manage Reputation", link: "#"},
            ]
        },
    ],
    address: "Justice Street, Suite 15, Road Apt New York, USA",
    phone: "+ 01 ( 320) 365 2654",
    email: "info@xiesenred.com",
    footer_info: "And herb over image place asfemale green seasons rule herb hath To gon rule third upon fish.",


}
const {footer_links, address, phone, email, footer_info} = footer_content

const FooterTwo = () => {
    return (
        <>
            <footer className="footer-5-bg footer-5">
                <div className="footer-area pt-100 pb-60">
                    <div className="container">
                        <div className="row">
                            {footer_links.map((item, i) =>
                                <div key={i} className="col-xl-2 col-lg-4 col-md-4">
                                    <div className="footer-widget mb-40">
                                        <h3>{item.title}</h3>
                                        <ul>
                                            {item.links.map((link, index) => 
                                                <li key={index}><Link href={link.link}>{link.title}</Link></li>
                                            )} 
                                        </ul>
                                    </div>
                                </div>
                            
                            )} 

                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="footer-widget mb-40">
                                    <h3>Contact Info</h3>
                                    <div className="footer-contact">
                                        <ul>
                                            <li>
                                                <i className="far fa-map-marked-alt"></i>
                                                <p>{address}</p>
                                            </li>
                                            <li>
                                                <i className="far fa-phone"></i>
                                                <p>{phone}</p>
                                            </li>
                                            <li>
                                                <i className="fal fa-envelope-open"></i>
                                                <p>{email}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="footer-widget mb-40">
                                    <h3>Newsletter</h3>
                                    <div className="footer-text mb-25 pr-0">
                                        <p>{footer_info}</p>
                                    </div>
                                    <div className="footer-form">
                                        <form onClick={(e) => e.preventDefault()}>
                                            <input type="text" placeholder="Enter email" />
                                            <button type="submit"><i className="fal fa-paper-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area cop-sep pt-20 pb-20">
                    <div className="container">
                        <div className="copyright-border-none">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="copyright">
                                        <p><CopyRight /></p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="footer-menu text-left text-md-end">
                                        <ul>
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">Tips & Tricks</a></li>
                                            <li><a href="#">Service</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterTwo;