import HeaderTwo from '@/src/layout/headers/header-2'; 
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import AlertsArea from './alerts-area';
import Footer from '@/src/layout/footers/footer';

const Alerts = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb top_title="Elements Alerts" title="Alerts" />
                <AlertsArea />
            </main>
            <Footer />
        </>
    );
};

export default Alerts;