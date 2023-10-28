import React from 'react';

const NewsletterArea = ({style_subscribe}) => {
    return (
        <> 
            <section className={`newsletter-area ${style_subscribe && "pt-140"} pb-150`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 offset-lg-1 offset-xl-2">
                            <div className="section-title-2 text-center mb-70">
                                <h2 className="mb-20">Experience the most simple way
                                to manage business</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 offset-lg-1 offset-xl-2">
                            <div className="newsletter newsletter-4">
                                <form onClick={(e) => e.preventDefault()}>
                                    <input type="email" placeholder="Enter your email" />
                                    <button type="submit">free trial</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsletterArea;