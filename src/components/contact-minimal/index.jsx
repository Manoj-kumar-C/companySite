 import HeaderTwo from '@/src/layout/headers/header-2'; 
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ContactMinimalFormArea from './contact-minimal-form-area';
import ContactMap from '../common/map';
import Footer from '@/src/layout/footers/footer';
import HeaderThree from '@/src/layout/headers/header-3';
 
 const ContactMinimal = () => {
    return (
        <>
            <HeaderThree />
            <main>
                <Breadcrumb top_title="Contact Us Minimal"  title="Contact Minimal" />
                <ContactMinimalFormArea />
                <ContactMap />
            </main>
            <Footer home_2={true} />
        </>
    );
 };
 
 export default ContactMinimal;