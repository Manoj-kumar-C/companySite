import HeaderTwo from "@/src/layout/headers/header-2"; 
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import ContactStandardArea from "./contact-standard-area";
import ContactMap from "../common/map";
import ContactStandardFormArea from "./contact-standard-form-area";
import FooterTwo from "@/src/layout/footers/footer-2";

const ContactStandard = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Contact Us Standard" title="Contact Standard" />
        <ContactStandardArea />
        <ContactMap />
        <ContactStandardFormArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default ContactStandard;
