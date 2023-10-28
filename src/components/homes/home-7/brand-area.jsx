import React from 'react';
import InnerBrandArea from './../../common/inner-brand-area';

const BrandArea = () => {
    return (
        <>
           <section className="brand-area pos-relative pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="brand-active owl-carousel">
                                <InnerBrandArea /> 
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default BrandArea;