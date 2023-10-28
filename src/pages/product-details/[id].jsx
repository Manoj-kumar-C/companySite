import { useRouter } from 'next/router';
import shop_data from './../../data/shop-data';
import ProductDetailsArea from "../../components/product-details/index";
import Wrapper from '@/src/layout/wrapper';
import SEO from '@/src/components/common/seo';

const DynamicProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const product_item = shop_data.find(item => Number(item.id) === Number(id))
  
    return (
        <Wrapper>
            <SEO pageTitle="Dynamic Product Details" />
             <ProductDetailsArea product={product_item} />
        </Wrapper>
    );
};

export default DynamicProductDetails;