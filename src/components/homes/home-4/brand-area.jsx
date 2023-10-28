import React from 'react';
import InnerBrandArea from '../../common/inner-brand-area';

const BrandArea = ({style_brands}) => {
    return (
        <>
            <div className={`brand-area pb-145 ${style_brands ? "pos-relative pb-120 pt-120" : ""}`}>
                <div className="container">
                    <div className="row brand-active-2">
                        <InnerBrandArea /> 
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandArea;