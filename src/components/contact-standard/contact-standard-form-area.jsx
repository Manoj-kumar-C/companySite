import React from 'react';
import ContactStandardForm from '../forms/contact-standard-form';

const ContactStandardFormArea = () => {
    return (
        <>
            <div className="contact-form-area pt-140 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 offset-lg-1 offset-xl-2">
                            <div className="section-title-2 text-center mb-70">
                                <h2 className="mb-20">Do you have any query, contact us</h2>
                                <p>Him have deep brought life darkness firmament unto move</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form mb-30">
                        <ContactStandardForm /> 
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactStandardFormArea;