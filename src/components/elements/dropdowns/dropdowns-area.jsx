import React from 'react';

const DropdownsArea = () => {
    return (
        <>
            <div className="elements-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card mb-30">
                                <div className="card-body">
                                    <h4 className="card-title">Basic dropdown</h4>
                                    <hr />
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button 
                                        className="btn btn-secondary dropdown-toggle me-1" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >secondary</button>
                                        <div 
                                        className="dropdown-menu" 
                                        aria-labelledby="dropdownMenuButton1"
                                        >
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button 
                                        className="btn btn-primary me-1" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >primary</button>
                                        <div 
                                        className="dropdown-menu" 
                                        aria-labelledby="dropdownMenuButton1"
                                        >
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn btn-success" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >success</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn btn-info" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >info</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn btn-warning" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >warning</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn btn-danger" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >danger</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn btn-inverse btn-light" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >inverse</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card mb-30">
                                <div className="card-body">
                                    <h4 className="card-title">Basic Outline dropdown</h4>
                                    <hr />
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn btn-outline-secondary" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >secondary</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn btn-outline-primary" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >primary</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn btn-outline-success" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >success</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn btn-outline-info" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >info</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn btn-outline-warning" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >warning</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn btn-outline-danger" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >danger</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn border border-dark border-2 btn-outline-dark" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >inverse</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card mb-30">
                                <div className="card-body">
                                    <h4 className="card-title">Basic icon dropdown</h4>
                                    <hr />
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn btn-secondary" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        ><i className="fas fa-cogs"></i></button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn btn-primary" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        ><i className="fas fa-trash-alt"></i></button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn btn-success" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        ><i className="fas fa-heart"></i></button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn btn-info" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        ><i className="fas fa-adjust"></i></button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn btn-warning" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        ><i className="fab fa-android"></i></button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn btn-danger" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        ><i className="fas fa-bell"></i></button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn btn-inverse btn-light" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        ><i className="fas fa-arrows-alt"></i></button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card mb-30">
                                <div className="card-body">
                                    <h4 className="card-title">Outline dropdown</h4>
                                    <hr />
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn dropdown-toggle btn-outline-secondary" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >secondary</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn dropdown-toggle btn-outline-primary" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >primary</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn dropdown-toggle btn-outline-success" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >success</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn dropdown-toggle btn-outline-info" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >info</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn dropdown-toggle btn-outline-warning" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >warning</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn dropdown-toggle btn-outline-danger" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >danger</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn dropdown-toggle btn-outline-inverse border border-dark border-2" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >inverse</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card mb-30">
                                <div className="card-body">
                                    <h4 className="card-title">Button dropdown</h4>
                                    <hr />
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn dropdown-toggle btn-secondary" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >secondary</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn dropdown-toggle btn-primary" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >primary</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn dropdown-toggle btn-success" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >success</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn dropdown-toggle btn-info" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >info</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn dropdown-toggle btn-warning" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >warning</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn dropdown-toggle btn-danger" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >danger</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="me-1 btn dropdown-toggle btn-inverse" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >inverse</button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card mb-30">
                                <div className="card-body">
                                    <h4 className="card-title">Split button dropdown</h4>
                                    <hr />
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="btn btn-secondary" type="button">Action</button>
                                        <button className="me-1 btn dropdown-toggle btn-secondary" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >
                                            <span className="sr-only">secondary</span>
                                        </button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="btn btn-primary" type="button">Action</button>
                                        <button className="me-1 btn dropdown-toggle btn-primary" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >
                                            <span className="sr-only">primary</span>
                                        </button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="btn btn-success" type="button">Action</button>
                                        <button className="me-1 btn dropdown-toggle btn-success" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >
                                            <span className="sr-only">success</span>
                                        </button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="btn btn-info" type="button">Action</button>
                                        <button className="me-1 btn dropdown-toggle btn-info" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >
                                            <span className="sr-only">info</span>
                                        </button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="btn btn-warning" type="button">Action</button>
                                        <button className="me-1 btn dropdown-toggle btn-warning" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >
                                            <span className="sr-only">warning</span>
                                        </button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="btn btn-danger" type="button">Action</button>
                                        <button className="me-1 btn dropdown-toggle btn-danger" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >
                                            <span className="sr-only">danger</span>
                                        </button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                    {/* <!-- START button group--> */}
                                    <div className="btn-group mb-1">
                                        <button className="btn btn-inverse text-danger" type="button">Action</button>
                                        <button className="me-1 btn dropdown-toggle btn-inverse text-danger" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >
                                            <span className="sr-only">inverse</span>
                                        </button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    {/* <!-- END button group--> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DropdownsArea;