import HeaderTwo from '@/src/layout/headers/header-2'; 
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import FooterThree from '@/src/layout/footers/footer-3';
import Footer from '@/src/layout/footers/footer';
import FooterTwo from "@/src/layout/footers/footer-2";
import FooterOne from '@/src/layout/footers/footer';


const FooterElement = () => {
    return (
        <>
          <HeaderTwo />
          <main>
            <Breadcrumb top_title="Elements Footer"  title="Footer" />  
            <FooterThree style_footer_el={true} />
            <Footer home_2={true} footer_bg={true} style_footer_el={true}/> 
            <FooterTwo />
            <FooterOne />
          </main>  
        </>
    );
};

export default FooterElement;