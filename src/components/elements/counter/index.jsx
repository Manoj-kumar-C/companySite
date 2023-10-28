import HeaderTwo from '@/src/layout/headers/header-2'; 
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import CounterArea from './counter-area';
import Footer from '@/src/layout/footers/footer';

const Counter = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb top_title="Elements Counter"  title="Counter" />
                <CounterArea />
                <CounterArea style_count={true} />
            </main>
            <Footer />
        </>
    );
};

export default Counter;