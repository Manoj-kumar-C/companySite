import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import LoginArea from "./login-area";
import Footer from "@/src/layout/footers/footer";

const Login = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Login" title="Login" />
        <LoginArea />
      </main>
      <Footer />
    </>
  );
};

export default Login;
