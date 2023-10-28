import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import BadgesArea from "./badges-area";
import Footer from "@/src/layout/footers/footer";

const Badges = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Elements Badges" title="Badges" />
        <BadgesArea />
      </main>
      <Footer />
    </>
  );
};

export default Badges;
