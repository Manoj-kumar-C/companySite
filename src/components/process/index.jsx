import HeaderTwo from '@/src/layout/headers/header-2'; 
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import HWArea from '../homes/home-4/hw-area'; 
import SubscriptionArea from '../homes/home-3/subscription-area';
import Footer from '@/src/layout/footers/footer';

const Process = () => {
    return (
        <>
        <HeaderTwo />
        <main>
            <Breadcrumb  top_title="Process"  title="Process" /> 
            <HWArea process={true} />   
            <SubscriptionArea style_service={true} />
        </main>    
        <Footer no_style={true} />        
        </>
    );
};

export default Process;