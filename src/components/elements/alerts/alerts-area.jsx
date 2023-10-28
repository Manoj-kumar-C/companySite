import React from 'react';

const AlertsArea = () => {
    return (
        <>
            <div className="dashboard-area pt-120 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pannel-wrapper white-bg mb-30">
                                <div className="panel-heading heading-border">
                                    <h4>Alert</h4>
                                </div>
                                <div className="panel-body mt-30 pt-0">
                                    <div className="alert alert-primary" role="alert">
                                        A simple primary alert—check it out!
                                    </div>
                                    <div className="alert alert-secondary" role="alert">
                                        A simple secondary alert—check it out!
                                    </div>
                                    <div className="alert alert-success" role="alert">
                                        A simple success alert—check it out!
                                    </div>
                                    <div className="alert alert-danger" role="alert">
                                        A simple danger alert—check it out!
                                    </div>
                                    <div className="alert alert-warning" role="alert">
                                        A simple warning alert—check it out!
                                    </div>
                                    <div className="alert alert-info" role="alert">
                                        A simple info alert—check it out!
                                    </div>
                                    <div className="alert alert-light" role="alert">
                                        A simple light alert—check it out!
                                    </div>
                                    <div className="alert alert-dark" role="alert">
                                        A simple dark alert—check it out!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="pannel-wrapper white-bg mb-30">
                                <div className="panel-heading heading-border">
                                    <h4 className="m-0">Alert Dismissing</h4>
                                </div>
                                <div className="panel-body mt-30 pt-0">
                                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <div className="alert alert-primary alert-dismissible fade show" role="alert">
                                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                         <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                         <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <div className="alert alert-dark alert-dismissible fade show" role="alert">
                                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                         <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <div className="alert alert-light alert-dismissible fade show" role="alert">
                                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                         <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <div className="alert alert-info alert-dismissible fade show" role="alert">
                                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                         <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="pannel-wrapper white-bg mb-30">
                                <div className="panel-heading heading-border">
                                    <h4>Link color Alert</h4>
                                </div>
                                <div className="panel-body mt-30 pt-0">
                                    <div className="alert alert-primary" role="alert">
                                        A simple primary alert with
                                        <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                    <div className="alert alert-secondary" role="alert">
                                        A simple secondary alert with
                                        <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                    <div className="alert alert-success" role="alert">
                                        A simple success alert with
                                        <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                    <div className="alert alert-danger" role="alert">
                                        A simple danger alert with
                                        <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                    <div className="alert alert-warning" role="alert">
                                        A simple warning alert with
                                        <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                    <div className="alert alert-info" role="alert">
                                        A simple info alert with
                                        <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                    <div className="alert alert-light" role="alert">
                                        A simple light alert with
                                        <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                    <div className="alert alert-dark" role="alert">
                                        A simple dark alert with
                                        <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AlertsArea;