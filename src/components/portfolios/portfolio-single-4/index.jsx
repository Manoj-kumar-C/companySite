import HeaderTwo from '@/src/layout/headers/header-2';
import React from 'react';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import PortfolioSingleFourArea from './portfolio-single-4-area';
import PortfolioPagination from '../portfolio-single/portfolio-pagination';
import PortfolioSliderFullArea from '../portfolio-slider-full/portfolio-slider-full-area';
import FooterTwo from '@/src/layout/footers/footer-2';

const PortfolioSingleFour= () => {
    return (
        <>
          <HeaderTwo />
          <main> 
            <Breadcrumb top_title="Portfolio Single 04"  title="Portfolio Single 04" />  
            <PortfolioSingleFourArea />
            <PortfolioPagination style_single_2={true} />
            <PortfolioSliderFullArea />
          </main>  
          <FooterTwo />
        </>
    );
};

export default PortfolioSingleFour