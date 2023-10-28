import React from "react";


const FaqForm = () => {

  // const [name, setName]  = useState('')

  return (
    <>
      <form onClick={(e) => e.preventDefault()}>
        <div className="row">
          <div className="col-md-6">
            <div className="faq-form-grp">
              <i className="fal fa-user"></i>
              <input type="text" placeholder="Your Name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="faq-form-grp">
              <i className="fal fa-envelope-open"></i>
              <input type="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="col-md-12">
            <div className="faq-form-grp">
              <i className="fal fa-arrow-alt-down"></i>
              <input type="text" placeholder="Your Subject" />
            </div>
          </div>
        </div>
        <div className="faq-form-grp">
          <i className="fal fa-pencil-alt"></i>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Write Message"
          ></textarea>
        </div>
        <button type="submit" className="login-btn mb-10">
          Send Comments
        </button>
      </form>
    </>
  );
};

export default FaqForm;
