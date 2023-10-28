import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import ShopList from '../components/shop-list';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Shop List"} />    
            <ShopList />        
        </Wrapper>
    );
};

export default index;