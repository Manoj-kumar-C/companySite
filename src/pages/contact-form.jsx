import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import ContactForm from '../components/elements/contact-form';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Contact Form"} />
            <ContactForm />
        </Wrapper>
    );
};

export default index;