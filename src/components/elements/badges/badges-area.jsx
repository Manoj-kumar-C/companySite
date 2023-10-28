import React from 'react';

const BadgesArea = () => {
    return (
        <>
            <div className="elements-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card mb-30">
                                <div className="card-body">
                                    <h4 className="card-title">Example</h4>
                                    <hr />
                                    <h1>Example heading
                                        <span className="badge badge-secondary">New</span>
                                    </h1>
                                    <h2>Example heading
                                        <span className="badge badge-secondary">New</span>
                                    </h2>
                                    <h3>Example heading
                                        <span className="badge badge-secondary">New</span>
                                    </h3>
                                    <h4>Example heading
                                        <span className="badge badge-secondary">New</span>
                                    </h4>
                                    <h5>Example heading
                                        <span className="badge badge-secondary">New</span>
                                    </h5>
                                    <h6>Example heading
                                        <span className="badge badge-secondary">New</span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card mb-30">
                                <div className="card-body">
                                    <h4 className="card-title">Badge Counter</h4>
                                    <hr />
                                    <button type="button" className="btn btn-primary mb-1">
                                        Notifications
                                        <span className="badge badge-light">4</span>
                                    </button>
                                    <button type="button" className="btn btn-secondary mb-1">
                                        Notifications
                                        <span className="badge badge-light">4</span>
                                    </button>
                                    <button type="button" className="btn btn-success mb-1">
                                        Notifications
                                        <span className="badge badge-light">4</span>
                                    </button>
                                    <button type="button" className="btn btn-danger mb-1">
                                        Notifications
                                        <span className="badge badge-light">4</span>
                                    </button>
                                    <button type="button" className="btn btn-warning mb-1">
                                        Notifications
                                        <span className="badge badge-light">4</span>
                                    </button>
                                    <button type="button" className="btn btn-info mb-1">
                                        Notifications
                                        <span className="badge badge-light">4</span>
                                    </button>
                                    <button type="button" className="btn btn-dark">
                                        Notifications
                                        <span className="badge badge-light">4</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card mb-30">
                                <div className="card-body">
                                    <h4 className="card-title">Contextual variations</h4>
                                    <hr />
                                    <span className="badge bg-primary me-1 mb-1">Primary</span>
                                    <span className="badge bg-secondary me-1 mb-1">Secondary</span>
                                    <span className="badge bg-success me-1 mb-1">Success</span>
                                    <span className="badge bg-danger me-1 mb-1">Danger</span>
                                    <span className="badge bg-warning me-1 mb-1">Warning</span>
                                    <span className="badge bg-info me-1 mb-1">Info</span>
                                    <span className="badge bg-light me-1 mb-1">Light</span>
                                    <span className="badge bg-dark me-1 ">Dark</span> 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card mb-30">
                                <div className="card-body">
                                    <h4 className="card-title">Pill badges</h4>
                                    <hr /> 
                                    <span className="badge badge-pill bg-primary me-1 mb-1">Primary</span>
                                    <span className="badge badge-pill bg-secondary me-1 mb-1">Secondary</span>
                                    <span className="badge badge-pill bg-success me-1 mb-1">Success</span>
                                    <span className="badge badge-pill bg-danger me-1 mb-1">Danger</span>
                                    <span className="badge badge-pill bg-warning me-1 mb-1">Warning</span>
                                    <span className="badge badge-pill bg-info me-1 mb-1">Info</span>
                                    <span className="badge badge-pill bg-light me-1 mb-1">Light</span>
                                    <span className="badge badge-pill bg-dark me-1 ">Dark</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card mb-30">
                                <div className="card-body">
                                    <h4 className="card-title">Links</h4>
                                    <hr /> 
                                    <a href="#" className="badge bg-primary me-1">Primary</a>
                                    <a href="#" className="badge bg-secondary me-1">Secondary</a>
                                    <a href="#" className="badge bg-success me-1">Success</a>
                                    <a href="#" className="badge bg-danger me-1">Danger</a>
                                    <a href="#" className="badge bg-warning me-1">Warning</a>
                                    <a href="#" className="badge bg-info me-1">Info</a>
                                    <a href="#" className="badge bg-light me-1">Light</a>
                                    <a href="#" className="badge bg-dark me-1">Dark</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default BadgesArea;