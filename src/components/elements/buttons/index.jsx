import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import ButtonsArea from "./buttons-area";
import Footer from '@/src/layout/footers/footer';

const Buttons = () => {
    return (
        <>
        <HeaderTwo />
        <main>
            <Breadcrumb top_title="Elements Buttons"  title="Buttons" />    
            <ButtonsArea />
        </main>    
        <Footer />        
        </>
    );
};

export default Buttons;