import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import ProgressbarArea from "./progressbar-area";
import Footer from "@/src/layout/footers/footer";

const ProgressBar = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Elements Progressbar" title="Progressbar" />
        <ProgressbarArea />
      </main>
      <Footer />
    </>
  );
};

export default ProgressBar;
