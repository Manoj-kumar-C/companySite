import HeaderTwo from '@/src/layout/headers/header-2'; 
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import BreadcrumbsArea from './breadcrumbs-area';
import Footer from '@/src/layout/footers/footer';

const Breadcrumbs = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb top_title="Elements Breadcrumb"  title="Breadcrumb" />
                <BreadcrumbsArea />
            </main>
            <Footer />
        </>
    );
};

export default Breadcrumbs;