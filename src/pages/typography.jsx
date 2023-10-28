import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import Typography from '../components/elements/typography';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"typography"} />
            <Typography />            
        </Wrapper>
    );
};

export default index;