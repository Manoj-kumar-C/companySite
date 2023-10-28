import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import PortfolioTwoArea from "./portfolio-2-area";
import FooterTwo from "@/src/layout/footers/footer-2";

const PortfolioTwo = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Portfolio Grid 02" title="Portfolio 2" />
        <PortfolioTwoArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default PortfolioTwo;
