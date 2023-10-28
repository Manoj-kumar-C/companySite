import SEO from '../components/common/seo';
import Tooltips from '../components/elements/tooltips';
import Wrapper from '../layout/wrapper';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Tooltips"} />
            <Tooltips />
        </Wrapper>
    );
};

export default index;