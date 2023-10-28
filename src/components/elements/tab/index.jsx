import HeaderTwo from '@/src/layout/headers/header-2'; 
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import TabArea from './tab-area';
import Footer from '@/src/layout/footers/footer';

const Tab = () => {
    return (
        <>
        <HeaderTwo />
        <main>
            <Breadcrumb top_title="Elements Tabs"  title="Tabs" /> 
            <TabArea />      
        </main>    
        <Footer />        
        </>
    );
};

export default Tab;