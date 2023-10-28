import Tags from './tags';
import Link from 'next/link';
import Image from 'next/image';
import RecentPost from './recent-post';
import SocialProfile from './social-profile';
import CategoriesArea from './categories-area';
import InstagramFeeds from './instagram-feeds';
import banner from "@assets/img/blog/details/banner.jpg";

const BlogSideArea = () => {
    return (
        <>
            <div className="col-lg-4">
                <div className="widget mb-50">
                    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Search your keyword..." />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>
                <RecentPost /> 
                <CategoriesArea />
                <SocialProfile /> 
                <InstagramFeeds /> 
                <Tags /> 
                <div className="widget mb-50 p-0 b-0">
                    <div className="banner-widget">
                        <Link href="#"><Image src={banner}  alt="theme-pure" /></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSideArea;