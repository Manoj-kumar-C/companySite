import HeaderTwo from '@/src/layout/headers/header-2'; 
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import Footer from '@/src/layout/footers/footer';
import BlogNoSidebarArea from './blog-no-sidebar-area';

const BlogNoSidebar = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb top_title='Blog No Sidebar'  title='Blog No Sidebar' />
                <BlogNoSidebarArea />
            </main>
            <Footer />
        </>
    );
};

export default BlogNoSidebar;