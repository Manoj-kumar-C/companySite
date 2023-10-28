import HeaderTwo from '@/src/layout/headers/header-2';
import BreadcrumbFour from '../../common/breadcrumb/breadcrumb-4';
import BlogDetailsVideoArea from './blog-details-video-area';
import Footer from '@/src/layout/footers/footer';

const BlogDetailsVideo = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <BreadcrumbFour top_title="Blog Details Video" title="Blog Details Video" />
                <BlogDetailsVideoArea />
            </main>
            <Footer />
        </>
    );
};

export default BlogDetailsVideo;