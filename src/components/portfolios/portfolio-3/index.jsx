import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import PortfolioThreeArea from "./portfolio-3-area";
import FooterTwo from './../../../layout/footers/footer-2';

const PortfolioThree = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Portfolio Grid 03" title="Portfolio 3" />
        <PortfolioThreeArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default PortfolioThree;
