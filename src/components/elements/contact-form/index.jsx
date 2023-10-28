import HeaderTwo from '@/src/layout/headers/header-2';
import React from 'react';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import ContactFormArea from '../../contact/contact-form-area';
import ContactMinimalFormArea from '../../contact-minimal/contact-minimal-form-area';
import Footer from '@/src/layout/footers/footer';

const ContactForm = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb top_title="Elements Contact Forms" title="Contact Forms" />
                <ContactFormArea />
                <ContactMinimalFormArea style_element={true} />
            </main>
            <Footer />
        </>
    );
};

export default ContactForm;