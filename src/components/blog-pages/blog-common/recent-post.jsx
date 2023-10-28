 

 import Image from "next/image";
 import recent_img_1 from "@assets/img/blog/details/img3.jpg";
 import recent_img_2 from "@assets/img/blog/details/img1.jpg";
 import recent_img_3 from "@assets/img/blog/details/img2.jpg";

 const recent_post_data = [
    {
        id: 1,
        img: recent_img_1,
        date: "October 28, 2023",
        title: "Exploring The Latest Web Design Trends."
    },
    {
        id: 2,
        img: recent_img_2,
        date: "October 28, 2023",
        title: "Exploring The Latest Web Design Trends."
    },
    {
        id: 3,
        img: recent_img_3,
        date: "October 28, 2023",
        title: "Exploring The Latest Web Design Trends."
    },
 ]

const RecentPost = () => {
    return (
        <>
            <div className="widget mb-50">
                    <div className="widget-title-box mb-40">
                        <span className="animate-border"></span>
                        <h3 className="widget-title">Recent Post</h3>
                    </div>
                    <ul className="recent-posts">
                        {recent_post_data.map((item, i)  =>
                            <li key={i}>
                                <div className="widget-posts-image">
                                    <a href="#"><Image src={item.img}  alt="theme-pure" /></a>
                                </div>
                                <div className="widget-posts-body">
                                    <div className="widget-posts-meta">{item.date}</div>
                                    <h6 className="widget-posts-title"><a href="#">{item.title}</a></h6>
                                </div>
                            </li>                        
                        )} 
                    </ul>
                </div>
        </>
    );
};

export default RecentPost;