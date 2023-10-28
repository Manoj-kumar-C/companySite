import Link from 'next/link';
import React from 'react';

const PortfolioPagination = ({style_single_2}) => {
    return (
        <>
            <div className={`details-pagination ${style_single_2 && "pb-100"}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <Link href="/portfolio-single-3" className="xn-nav-item ">
                                <div className="et-nav-info">
                                    <h3 className="et-nav-title">Prev</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="col-2 text-center">
                            <Link href="/portfolio" className="et-nav-item et-nav-center" title="Back to portfolio">
                                <span className="et-nav-icon">
                                    <i className="fas fa-grip-horizontal"></i>
                                </span>
                            </Link>
                        </div>
                        <div className="col-5 text-end">
                            <Link href="/portfolio-single-1" className="xn-nav-item">
                                <div className="et-nav-info">
                                    <h3 className="et-nav-title">Next</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioPagination;