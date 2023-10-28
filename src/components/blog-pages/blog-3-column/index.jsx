import Footer from '@/src/layout/footers/footer';
import HeaderTwo from '@/src/layout/headers/header-2';   
import BlogThreeColumnArea from './blog-3-column-area';
import BreadcrumbFour from '../../common/breadcrumb/breadcrumb-4';

const BlogThreeColumn = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <BreadcrumbFour /> 
                <BlogThreeColumnArea />   
            </main>  
            <Footer />          
        </>
    );
};

export default BlogThreeColumn;