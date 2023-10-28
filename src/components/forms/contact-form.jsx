import React from 'react';

const ContactForm = () => {
    return (
        <>
            <form id="contact-form" onSubmit={e => e.preventDefault()}>
                <input name="name" type="text" placeholder="Full name" />
                <input name="email" type="email" placeholder="email address" />
                <input name="subject" type="text" placeholder="subject" />
                <textarea name="message" cols="30" rows="10" placeholder="write message"></textarea>
                <button type="submit" className="x-btn btn-black">send message</button>
            </form>
        </>
    );
};

export default ContactForm;