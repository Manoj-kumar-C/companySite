import Footer from "@/src/layout/footers/footer";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import HeaderTwo from "./../../layout/headers/header-2";
import ContactFormArea from "./contact-form-area";
import ContactMap from "../common/map";
import HeaderThree from "@/src/layout/headers/header-3";

const Contact = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb top_title="Contact us" title="Contact" />
        <ContactFormArea />
        <ContactMap />
      </main>
      <Footer home_2={true} />
    </>
  );
};

export default Contact;
