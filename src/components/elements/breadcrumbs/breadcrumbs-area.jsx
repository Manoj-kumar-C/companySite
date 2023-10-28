import React from 'react';

const BreadcrumbsArea = () => {
    return (
        <>
            <div className="elements-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card mb-30">
                                <div className="card-body">
                                    <h4 className="card-title">Breadcrumbs</h4>
                                    <hr />

                                    <div className="breadcrumb-admin">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <a href="#">Home</a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">Data</li>
                                            </ol>
                                        </nav>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <a href="#">Home</a>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    <a href="#">Library</a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">Data</li>
                                            </ol>
                                        </nav>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb mb-0">
                                                <li className="breadcrumb-item">
                                                    <a href="#">Home</a>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    <a href="#">Library</a>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    <a href="#">Files</a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">Data</li>
                                            </ol>
                                        </nav>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card mb-30">
                                <div className="card-body">
                                    <h4 className="card-title">Breadcrumb custom</h4>
                                    <hr />

                                    <div className="breadcrumb-admin">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb breadcrumb-white bg-primary">
                                                <li className="breadcrumb-item">
                                                    <a href="#">Home</a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">Data</li>
                                            </ol>
                                        </nav>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb breadcrumb-white bg-info">
                                                <li className="breadcrumb-item">
                                                    <a href="#">Home</a>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    <a href="#">Library</a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">Data</li>
                                            </ol>
                                        </nav>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb breadcrumb-white bg-danger">
                                                <li className="breadcrumb-item">
                                                    <a href="#">Home</a>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    <a href="#">Library</a>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    <a href="#">Files</a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">Data</li>
                                            </ol>
                                        </nav>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb breadcrumb-white bg-warning">
                                                <li className="breadcrumb-item">
                                                    <a href="#">Home</a>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    <a href="#">Library</a>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    <a href="#">Files</a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">Data</li>
                                            </ol>
                                        </nav>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb breadcrumb-white bg-info">
                                                <li className="breadcrumb-item">
                                                    <a href="#">Home</a>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    <a href="#">Library</a>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    <a href="#">Files</a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">Data</li>
                                            </ol>
                                        </nav>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb breadcrumb-white bg-dark mb-0">
                                                <li className="breadcrumb-item">
                                                    <a href="#">Home</a>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    <a href="#">Library</a>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    <a href="#">Files</a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">Data</li>
                                            </ol>
                                        </nav>
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

export default BreadcrumbsArea;