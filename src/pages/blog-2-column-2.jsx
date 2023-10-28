import BlogTwoColumnTwo from '../components/blog-pages/blog-2-column-2';
import SEO from '../components/common/seo';
import Wrapper from '../layout/wrapper';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Blog 2 Column 2"} />
            <BlogTwoColumnTwo />
        </Wrapper>
    );
};

export default index;