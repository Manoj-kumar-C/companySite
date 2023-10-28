import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer";
import PageTitleArea from "./page-title-area";

const PageTitles = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Elements Page Titles" title="Page Titles" />
        <PageTitleArea />
      </main>
      <Footer />
    </>
  );
};

export default PageTitles;
