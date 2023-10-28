import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import RegisterArea from "./register-area";
import Footer from "@/src/layout/footers/footer";

const Register = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Register" title="Register" />
        <RegisterArea />
      </main>
      <Footer />
    </>
  );
};

export default Register;
