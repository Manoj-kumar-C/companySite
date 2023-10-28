import InnerBrandArea from '../../common/inner-brand-area';

const BrandArea = () => { 
    return (
        <>
           <section className="brand-area soft-pink pt-150 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3">
                            <div className="section-title-2 text-center mb-70">
                                <span>Permanent Clients</span>
                                <h2>Worldwide 100+ clients using
                                our service.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                          <InnerBrandArea /> 
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default BrandArea;