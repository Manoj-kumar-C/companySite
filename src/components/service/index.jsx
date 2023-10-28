import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import OurService from "./our-service";
import BenefitsArea from "../homes/home-5/benefits-area";  
import SubscriptionArea from "../homes/home-3/subscription-area";
import Footer from "@/src/layout/footers/footer";
import HeaderThree from "@/src/layout/headers/header-3";
import SixFew from "./sixFew";


// Images

import excellent_img_1 from "@assets/img/icon/ex1.png";
import excellent_img_2 from "@assets/img/icon/ex2.png";
import excellent_img_3 from "@assets/img/icon/ex3.png";
import excellent_img_4 from "@assets/img/icon/ex4.png";
import excellent_img_5 from "@assets/img/icon/ex5.png";
import excellent_img_6 from "@assets/img/icon/ex6.png"; 
import Benef from "./Benef";

const six_few_data = [
  {
      id: 1, 
      icon: excellent_img_1,
      title: "Business Opportunity",
      des: <>Given stars herb olive eghts you and earth bea you fourt earth second an multip made thats were upon an form</>,
  },
  {
      id: 2, 
      icon: excellent_img_2,
      title: "Infinite Colors",
      des: <>Given stars herb olive eghts you and earth bea you fourt earth second an multip made thats were upon an form</>,
  },
  {
      id: 3, 
      icon: excellent_img_3,
      title: "Pixel Precision",
      des: <>Given stars herb olive eghts you and earth bea you fourt earth second an multip made thats were upon an form</>,
  },
  {
      id: 4, 
      icon: excellent_img_4,
      title: "Creative Design",
      des: <>Given stars herb olive eghts you and earth bea you fourt earth second an multip made thats were upon an form</>,
  },
  {
      id: 5, 
      icon: excellent_img_5,
      title: "Online Support",
      des: <>Given stars herb olive eghts you and earth bea you fourt earth second an multip made thats were upon an form</>,
  },
  {
      id: 6, 
      icon: excellent_img_6,
      title: "Easy Customize",
      des: <>Given stars herb olive eghts you and earth bea you fourt earth second an multip made thats were upon an form</>,
  },
]




/// this contains the data of the 3 image System   



const Service = () => {

  const shapeImages = [
    "@assets/img/shape/shape-sq.png",
    "@assets/img/shape/shape2.png",
    "@assets/img/shape/shape3.png",
    "@assets/img/shape/shape4.png",
    "@assets/img/shape/shape5.png",
    "@assets/img/shape/shape6.png",
  ];

  const benefitsImages = [
    "@assets/img/icon/light.png",
    "@assets/img/icon/bar.png",
    "@assets/img/icon/finish.png",
    "@assets/img/bg/data.png",
    "@assets/img/bg/pro.png",
    "@assets/img/bg/res.png",
  ];

  const data = {
    top_title: <>Better benefit experience for all</>,
    sub_title: <>Him have deep brought life darkness firmament unto move</>,
    title_1: <>Data Collection</>,
    info_1: <>Behold in third kind light you'll moving day the female soulger green said us beginning appear i creing likeness inunto also darkness female light won't thes dominion whose all favorite beautiful plitum doret us.</>,
    title_2: <>Data Processing</>,
    info_2: <>Behold in third kind light you'll moving day the female soulger green said us beginning appear i creing likeness inunto also darkness female light won't thes dominion whose all favorite beautiful plitum doret us.</>,
    title_3: <>Finished Result</>,
    info_3: <>Behold in third kind light you'll moving day the female soulger green said us beginning appear i creing likeness inunto also darkness female light won't thes dominion whose all favorite beautiful plitum doret us.</>,
  };


  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb top_title="Service Style 01"  title="Service"/>
        <br />
        <Benef style_service={true} benefContent={data}  />
        <SixFew style_service_2={true} data={six_few_data} />
        {/* <SubscriptionArea style_service={true} /> */}
        
      </main>
      <Footer home_2={true} />
    </>
  );
};

export default Service;
