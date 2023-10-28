
  
  const ContactStandardForm = () => {
    return (
        <>
           <form id="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="row">
                <div className="col-lg-6">
                    <input name="name" type="text" placeholder="Full name" />
                </div>
                <div className="col-lg-6">
                    <input name="email" type="email" placeholder="email address" />
                </div>
                <div className="col-lg-12">
                    <input name="subject" type="text" placeholder="subject" />
                </div>
                <div className="col-lg-12">
                    <textarea name="message" cols="30" rows="10" placeholder="write message"></textarea>
                    <button type="submit" className="x-btn btn-black">send message</button>
                </div>
            </div>
        </form> 
        </>
    );
  };
  
  export default ContactStandardForm;