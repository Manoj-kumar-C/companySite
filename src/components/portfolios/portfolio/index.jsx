import HeaderTwo from '@/src/layout/headers/header-2';
import React from 'react';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import PortfolioArea from './portfolio-area';
import FooterTwo from '@/src/layout/footers/footer-2'; 

const Portfolio = () => {
    return (
        <>
           <HeaderTwo />
           <main>
                <Breadcrumb top_title='Portfolio Grid 01' title='Portfolio' />
                <PortfolioArea />
            </main> 
            <FooterTwo />
        </>
    );
};

export default Portfolio;