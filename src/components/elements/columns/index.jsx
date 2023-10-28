import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import ColumnsArea from "./columns-area";
import Footer from "@/src/layout/footers/footer";

const Columns = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Elements Columns" title="Columns" />
        <ColumnsArea />
      </main>
      <Footer />
    </>
  );
};

export default Columns;
