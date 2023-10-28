import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer";
import TooltipsArea from "./tooltips-area";

const Tooltips = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Elements Tooltips" title="Tooltips" />
        <TooltipsArea />
      </main>
      <Footer />
    </>
  );
};

export default Tooltips;
