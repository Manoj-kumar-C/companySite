import React from 'react';

const ButtonsArea = () => {
    return (
        <>
            <div className="elements-area pt-120 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-70">
                            <h4 className="sidebar-title mb-30">Default buttons</h4>
                            <div>
                                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                                <button type="button" className="me-2 btn btn-primary mb5">Primary</button>

                                {/* <!-- Secondary, outline button --> */}
                                <button type="button" className="me-2 btn btn-secondary mb5">Secondary</button>

                                {/* <!-- Indicates a successful or positive action --> */}
                                <button type="button" className="me-2 btn btn-success mb5">Success</button>

                                {/* <!-- Contextual button for informational alert messages --> */}
                                <button type="button" className="me-2 btn btn-info mb5">Info</button>

                                {/* <!-- Indicates caution should be taken with this action --> */}
                                <button type="button" className="me-2 btn btn-warning mb5">Warning</button>

                                {/* <!-- Indicates a dangerous or potentially negative action --> */}
                                <button type="button" className="me-2 btn btn-danger mb5">Danger</button>

                                {/* <!-- Deemphasize a button by making it look like a link while maintaining button behavior --> */}
                                <button type="button" className="me-2 btn btn-link mb5">Link</button>
                            </div>
                        </div>
                        <div className="col-md-6 mb-70">
                            <h4 className="sidebar-title mb-30">Outline buttons</h4>
                            <div>
                                <button type="button" className="me-2 btn btn-outline-primary mb5">Primary</button>
                                <button type="button" className="me-2 btn btn-outline-secondary mb5">Secondary</button>
                                <button type="button" className="me-2 btn btn-outline-success mb5">Success</button>
                                <button type="button" className="me-2 btn btn-outline-info mb5">Info</button>
                                <button type="button" className="me-2 btn btn-outline-warning mb5">Warning</button>
                                <button type="button" className="me-2 btn btn-outline-danger mb5">Danger</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-70">
                            <h4 className="sidebar-title mb-30">Rounded buttons</h4>
                            <div>
                                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                                <button type="button" className="me-2 btn btn-primary mb5 btn-rounded">Primary</button>

                                {/* <!-- Secondary, outline button --> */}
                                <button type="button" className="me-2 btn btn-secondary mb5 btn-rounded">Secondary</button>

                                {/* <!-- Indicates a successful or positive action --> */}
                                <button type="button" className="me-2 btn btn-success mb5 btn-rounded">Success</button>

                                {/* <!-- Contextual button for informational alert messages --> */}
                                <button type="button" className="me-2 btn btn-info mb5 btn-rounded">Info</button>

                                {/* <!-- Indicates caution should be taken with this action --> */}
                                <button type="button" className="me-2 btn btn-warning mb5 btn-rounded">Warning</button>

                                {/* <!-- Indicates a dangerous or potentially negative action --> */}
                                <button type="button" className="me-2 btn btn-danger mb5 btn-rounded">Danger</button>

                                {/* <!-- Deemphasize a button by making it look like a link while maintaining button behavior --> */}
                                <button type="button" className="me-2 btn btn-link mb5 btn-rounded">Link</button>
                            </div>
                        </div>
                        <div className="col-md-6 mb-70">
                            <h4 className="sidebar-title mb-30">Rounded Outline buttons</h4>
                            <div>
                                <button type="button" className="me-2 btn btn-outline-primary mb5 btn-rounded">Primary</button>
                                <button type="button" className="me-2 btn btn-outline-secondary mb5 btn-rounded">Secondary</button>
                                <button type="button" className="me-2 btn btn-outline-success mb5 btn-rounded">Success</button>
                                <button type="button" className="me-2 btn btn-outline-info mb5 btn-rounded">Info</button>
                                <button type="button" className="me-2 btn btn-outline-warning mb5 btn-rounded">Warning</button>
                                <button type="button" className="me-2 btn btn-outline-danger mb5 btn-rounded">Danger</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-70">
                            <h4 className="sidebar-title mb-30">3D buttons</h4>
                            <div>
                                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                                <button type="button" className="me-2 btn btn-primary mb5 btn-3d">Primary</button>

                                {/* <!-- Secondary, outline button --> */}
                                <button type="button" className="me-2 btn btn-secondary mb5 btn-3d">Secondary</button>

                                {/* <!-- Indicates a successful or positive action --> */}
                                <button type="button" className="me-2 btn btn-success mb5 btn-3d">Success</button>

                                {/* <!-- Contextual button for informational alert messages --> */}
                                <button type="button" className="me-2 btn btn-info mb5 btn-3d">Info</button>

                                {/* <!-- Indicates caution should be taken with this action --> */}
                                <button type="button" className="me-2 btn btn-warning mb5 btn-3d">Warning</button>

                                {/* <!-- Indicates a dangerous or potentially negative action --> */}
                                <button type="button" className="me-2 btn btn-danger mb5 btn-3d">Danger</button>
                            </div>
                        </div>
                        <div className="col-md-6 mb-70">
                            <h4 className="sidebar-title mb-30">Block level buttons</h4>
                            <div>
                                <button type="button" className="me-2 btn btn-outline-primary btn-block mb5">Primary</button>
                                <button type="button" className="me-2 btn btn-success btn-lg btn-block mb5">Secondary</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-70">
                            <h4 className="sidebar-title mb-30">Buttons Size</h4>
                            <div>
                                <button type="button" className="me-2 btn btn-primary mb5 btn-lg">Large buttons</button>
                                <button type="button" className="me-2 btn btn-primary mb5">Default Size</button>
                                <button type="button" className="me-2 btn btn-primary btn-sm mb5">Small Size</button>
                            </div>
                        </div>
                        <div className="col-md-6 mb-70">
                            <h4 className="sidebar-title mb-30">Icon buttons</h4>
                            <div>
                                <button type="button" className="me-2 btn btn-info mb5"><i className="fa fa-home"></i> Home</button>
                                <button type="button" className="me-2 btn btn-primary mb5"><i className="fa fa-refresh"></i> Refresh</button>
                                <button type="button" className="me-2 btn btn-warning btn-3d mb5"><i className="fa fa-cloud-download"></i> Download
                                    Now</button>
                                <button type="button" className="me-2 btn btn-danger btn-3d mb5"><i className="fa fa-trash"></i> Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-70">
                            <h4 className="sidebar-title mb-30">Disable buttons</h4>
                            <div>
                                <a href="#" className="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Primary link</a>
                                <a href="#" className="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">Link</a>
                            </div>
                        </div>
                        <div className="col-md-6 mb-70">
                            <h4 className="sidebar-title mb-30">Checkbox & radio buttons</h4>
                            <div>
                                <div className="btn-group mb-10" data-toggle="buttons">
                                    <label className="btn btn-primary active">
                                        <input type="checkbox" defaultChecked autoComplete="off" /> Checkbox 1 (pre-checked)
                                    </label>
                                    <label className="btn btn-primary">
                                        <input type="checkbox" autoComplete="off" /> Checkbox 2
                                    </label>
                                    <label className="btn btn-primary">
                                        <input type="checkbox" autoComplete="off" /> Checkbox 3
                                    </label>
                                </div>
                                <div className="btn-group" data-toggle="buttons">
                                    <label className="btn btn-primary active">
                                        <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Radio 1
                                        (preselected)
                                    </label>
                                    <label className="btn btn-primary">
                                        <input type="radio" name="options" id="option2" autoComplete="off" /> Radio 2
                                    </label>
                                    <label className="btn btn-primary">
                                        <input type="radio" name="options" id="option3" autoComplete="off" /> Radio 3
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ButtonsArea;