import FaqArea from './faq-area';
import HeaderTwo from '@/src/layout/headers/header-2';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FaqFormArea from './faq-form-area';
import Footer from '@/src/layout/footers/footer';

const Faq = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb top_title="Frequently Ask Question" title="FAQ" />
                <FaqArea />
                <FaqFormArea />
            </main>
            <Footer />
        </>
    );
};

export default Faq;