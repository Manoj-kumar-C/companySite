import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import CallToActionOne from "./cta-1";
import CallToActionTwo from "./cra-2";
import Footer from "@/src/layout/footers/footer";

const CallToAction = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Elements Call To Action" title="Call To Action" />
        <CallToActionOne />
        <CallToActionTwo />
      </main>
      <Footer /> 
    </>
  );
};

export default CallToAction;
