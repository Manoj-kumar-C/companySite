import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import PortfolioGridFullArea from "./portfolio-grid-full-area";
import FooterTwo from "@/src/layout/footers/footer-2";

const PortfolioGridFull = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Portfolio Grid Full" title="Portfolio Grid" />
        <PortfolioGridFullArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default PortfolioGridFull;
