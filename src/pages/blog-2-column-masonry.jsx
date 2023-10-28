import BlogTwoColumnMasonry from '../components/blog-pages/blog-2-column-masonry';
import SEO from '../components/common/seo';
import Wrapper from '../layout/wrapper';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Blog 2 Column Masonry"} />
            <BlogTwoColumnMasonry />
        </Wrapper>
    );
};

export default index;