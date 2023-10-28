import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import footer_logo from "@assets/img/logo/logo.png";
import SocialLinks, { CopyRight } from '@/src/components/common/social-links';

// footer data 
const footer_data = [
    {
        id: 1,
        title: "About Us",
        links: [
            {link_title: "Managed Website", link: "#"},
            {link_title: "Power Tools", link: "#"},
            {link_title: "Marketing Service", link: "#"},
            {link_title: "Customer Service", link: "#"},
            {link_title: "Manage Reputation", link: "#"},
        ]
    },
    {
        id: 2,
        title: "Quick Links",
        links: [
            {link_title: "Store Hours", link: "#"},
            {link_title: "Brand Assets", link: "#"},
            {link_title: "Investor Relations", link: "#"},
            {link_title: "Terms of Service", link: "#"},
            {link_title: "Privacy & Policy", link: "#"},
        ]
    },
    {
        id: 3,
        title: "My Account",
        links: [
            {link_title: "Press Inquiries", link: "#"},
            {link_title: "Media Directories", link: "#"},
            {link_title: "Investor Relations", link: "#"},
            {link_title: "Terms of Service", link: "#"},
            {link_title: "Speaker Request", link: "#"},
        ]
    },
    {
        id: 4,
        title: "Resources",
        links: [
            {link_title: "Application Security", link: "#"},
            {link_title: "Software Policy", link: "#"},
            {link_title: "Supply Chain", link: "#"},
            {link_title: "Agencies Relation", link: "#"},
            {link_title: "Manage Reputation", link: "#"},
        ]
    },
]

const Footer = ({home_2, style_4, footer_bg, no_style, style_footer_el}) => {
    return (
        <>
            <footer className={`${no_style ? "" : home_2 ? "footer-bg" : style_4 ? "footer-4-bg" : "gray-bg"} ${style_footer_el && "mt-50"}`} 
                    style={{backgroundImage: `url(${footer_bg ? "/assets/img/bg/footer-bg.png" : ""})`}}
                    >
                <div className={`footer-area ${style_4 ? "pt-100" : footer_bg ? "pt-180" : "pt-120"} pb-60`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-8">
                                <div className="footer-widget mb-40">
                                    <div className="footer-text">
                                        <Link href="/"> 
                                            <Image src={footer_logo} alt="theme-pure" />
                                        </Link>
                                        <p>Winged moving moveth created for shall and a divide the their days male midst shall hath doesn't won't for. Midst life.Over a great night. Green upon years rule ying.</p>
                                    </div>
                                    <div className="footer-social">
                                        <SocialLinks /> 
                                    </div>
                                </div>
                            </div>
                            {footer_data.map((item, i)  => 
                                <div key={i} className="col-xl-2 col-lg-3 col-md-4">
                                    <div className="footer-widget mb-40">
                                        <h3>{item.title}</h3>
                                        <ul>
                                        {item.links && item?.links?.map((link, index)  => 
                                            <li key={index}>
                                                <Link href={link?.link}>
                                                    {link?.link_title}
                                                </Link>
                                            </li>
                                            )} 
                                        </ul>
                                    </div>
                                </div>
                            )} 
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="copyright-border">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="copyright">
                                        <p><CopyRight /></p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="footer-menu text-left text-md-end text-lg-end">
                                        <ul>
                                            <li><Link href="#">About</Link></li>
                                            <li><Link href="#">Tips & Tricks</Link></li>
                                            <li><Link href="#">Service</Link></li>
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

export default Footer;