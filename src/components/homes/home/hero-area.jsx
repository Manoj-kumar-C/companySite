import React from 'react';

// import 
const HeroArea = () => {
    return (
        <>
           <section className="slider-area fix">
                <div className="single-slider slider-height-2 slider-height-4 pt-280" 
                   style={{ backgroundImage: `url(/assets/img/slider/blue-bg.png)` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-10">
                                <div className="slider-text-4 pt-0">
                                    <h2 className="wow fadeInUp animated" data-wow-delay="0.4s">Conduct more customer
                                        in a better way</h2>
                                    <p className="wow fadeInUp animated" data-wow-delay="0.9s">
                                        Fly to you're one, abundantly grass a there form them upon rule won't brought god. Without seas a male unto void was and living the Seas have lights forth earth it together.
                                    </p>
                                    <div className="hero-form wow fadeInUp animated" data-wow-delay="1.3s">
                                        <form onClick={(e) => e.preventDefault()}>
                                            <input type="text" placeholder="Enter your email" />
                                            <button type="submit">Get started</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                                <div className="slider-img-2 wow fadeInRight animated" data-wow-duration="2.5s">
                                    <img src="/assets/img/slider/01_Home.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default HeroArea;