import Link from 'next/link'; 

const CallToActionTwo = () => {
    return (
        <>
            <div className="cta-area pt-180 pb-160" style={{backgroundImage: `url(/assets/img/bg/cta.jpg)`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <div className="cta-content mb-30">
                                <h1>Learn Any Information For IT Solutions</h1>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                                    totam rem aperiam eaque ipsa </p>
                                <div className="cta-2-button">
                                    <Link className="x-btn x-btn-white" href="/contact">
                                        <span className="btn-text">contact us 
                                        <i className="far fa-long-arrow-right"></i></span> 
                                    </Link>
                                    <Link className="x-btn btn-border btn-radius btn-border-white" href="#">
                                        <span className="btn-text">get started
                                         <i className="far fa-long-arrow-right"></i></span> 
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="ctas-info mb-30">
                                <h3>+812 (345) 6789</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CallToActionTwo;