import HeaderTwo from '@/src/layout/headers/header-2';
import React from 'react';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import AccordionArea from './accordion-area';
import Footer from '@/src/layout/footers/footer';

const Accordion = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb top_title="Elements Accordion" title="Elements Accordion" />
                <AccordionArea />
            </main>
            <Footer />
        </>
    );
};

export default Accordion;