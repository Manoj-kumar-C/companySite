import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import BlogDetails from '../components/blog-pages/blog-details';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Blog Details"} />
            <BlogDetails />
        </Wrapper>
    );
};

export default index;