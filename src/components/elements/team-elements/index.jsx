import TeamArea from "../../team/team-area";
import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "../../common/breadcrumb/breadcrumb"; 
import TeamTwoArea from "../../team-2/team-two-area";
import Footer from "@/src/layout/footers/footer";

const TeamElements = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Elements Tabs" title="Elements Tabs" />
        <TeamArea /> 
        <TeamTwoArea style_elem={true} />
      </main>
      <Footer />
    </>
  );
};

export default TeamElements;
