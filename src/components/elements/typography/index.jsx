import HeaderTwo from '@/src/layout/headers/header-2';
import React from 'react';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import TypographyArea from './typography-area';
import Footer from '@/src/layout/footers/footer';

const Typography = () => {
    return (
        <>
        <HeaderTwo />
        <main>
            <Breadcrumb top_title="Elements Typography" title="Typography" />    
            <TypographyArea />
        </main> 
        <Footer />           
        </>
    );
};

export default Typography;