import HeaderTwo from '@/src/layout/headers/header-2'; 
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ServiceDetailsArea from './service-details-area';
import Footer from '@/src/layout/footers/footer';

const ServiceDetails = () => {
    return (
        <>
        <HeaderTwo />
        <main>
            <Breadcrumb top_title="Service Details" title="Service Details" /> 
            <ServiceDetailsArea />   
        </main> 
        <Footer />           
        </>
    );
};

export default ServiceDetails;