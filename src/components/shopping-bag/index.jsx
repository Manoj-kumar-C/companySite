import HeaderTwo from '@/src/layout/headers/header-2'; 
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ShoppingBagArea from './shopping-bag-area';
import Footer from '@/src/layout/footers/footer';

const ShoppingBag = () => {
    return (
        <>
        <HeaderTwo />
        <main>
            <Breadcrumb top_title="Your Shopping Bag" title="Shopping Bag" />
            <ShoppingBagArea />
        </main>
        <Footer />
            
        </>
    );
};

export default ShoppingBag;