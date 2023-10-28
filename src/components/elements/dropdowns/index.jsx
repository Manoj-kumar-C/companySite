import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import DropdownsArea from "./dropdowns-area";
import Footer from "@/src/layout/footers/footer";

const Dropdowns = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Elements Dropdown" title="Dropdowns" />
        <DropdownsArea />
      </main>
      <Footer />
    </>
  );
};

export default Dropdowns;
