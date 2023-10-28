import Wrapper from '@/src/layout/wrapper';
import shop_data from '@/src/data/shop-data';
import SEO from '@/src/components/common/seo';
import ProductDetailsArea from '@/src/components/product-details'; 

const product_item = shop_data[2]

const ProductDetails = () => {

    return (
        <Wrapper>
            <SEO pageTitle="Dynamic Product Details" />
            <ProductDetailsArea product={product_item}  />            
        </Wrapper>
    );
};

export default ProductDetails;