import Footer from "@/src/layout/footers/footer";
import HeaderTwo from "@/src/layout/headers/header-2"; 
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import NewsletterAreaHomeOne from "../../homes/home/newsletter-area";
import NewsletterAreaHomeSeven from "../../homes/home-7/newsletter-area";
import SubscriptionArea from "../../homes/home-3/subscription-area";

const Subscribe = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Elements Subscribe" title="Subscribe" />
        <NewsletterAreaHomeOne style_subscribe={true} />
        <NewsletterAreaHomeSeven />
        <SubscriptionArea />
      </main>
      <Footer no_style={true} />
    </>
  );
};

export default Subscribe;
