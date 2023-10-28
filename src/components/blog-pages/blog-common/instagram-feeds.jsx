import Link from "next/link";
import Image from "next/image";

import img_1 from "@assets/img/instagram/img1.jpg";
import img_2 from "@assets/img/instagram/img2.jpg";
import img_3 from "@assets/img/instagram/img3.jpg";
import img_4 from "@assets/img/instagram/img4.jpg";
import img_5 from "@assets/img/instagram/img5.jpg";
import img_6 from "@assets/img/instagram/img6.jpg";
import img_7 from "@assets/img/instagram/img7.jpg";
import img_8 from "@assets/img/instagram/img8.jpg";
import img_9 from "@assets/img/instagram/img9.jpg";

const instagram_feeds_data = [
    {img: img_1}, {img: img_2}, {img: img_3}, {img: img_4}, {img: img_5}, {img: img_6}, {img: img_7}, {img: img_8},{img: img_9},
]

const InstagramFeeds = () => {
    return (
        <>
            <div className="widget mb-50">
                <div className="widget-title-box mb-40">
                    <span className="animate-border"></span>
                    <h3 className="widget-title">Instagram Feeds</h3>
                </div>
                <ul id="Instafeed">
                    {instagram_feeds_data.map((img, i) => 
                        <li key={i}><Link href="#"><Image src={img.img}  alt="theme-pure" /></Link></li>                    
                    )} 
                </ul>
            </div>
        </>
    );
};

export default InstagramFeeds;