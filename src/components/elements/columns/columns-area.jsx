import React from 'react';

const ColumnsArea = () => {
    return (
        <>
            <div className="elements-area columns pt-120 pb-50">
                <div className="container mb-70">
                    <div className="fancy-title mb-30">
                        <h4>Bootstrap 4 grid Options</h4>
                        <div className="fancy-title-sep gray-sep"></div>
                    </div> 
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className="text-center">
                                        Extra small <br />
                                        <small> &lt; 576px</small>
                                    </th>
                                    <th className="text-center">
                                        Small <br />
                                        <small> ≥ 576px</small>
                                    </th>
                                    <th className="text-center">
                                        Medium <br />
                                        <small> ≥ 768px</small>
                                    </th>
                                    <th className="text-center">
                                        Large <br />
                                        <small> ≥ 992px</small>
                                    </th>
                                    <th className="text-center">
                                        Extra large <br />
                                        <small>≥1200px</small>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="text-nowrap" scope="row">Grid behavior</th>
                                    <td>Horizontal at all times</td>
                                    <td colSpan="4">Collapsed to start, horizontal above breakpoints</td>
                                </tr>
                                <tr>
                                    <th className="text-nowrap" scope="row">Max container width</th>
                                    <td>None (auto)</td>
                                    <td>540px</td>
                                    <td>720px</td>
                                    <td>960px</td>
                                    <td>1140px</td>
                                </tr>
                                <tr>
                                    <th className="text-nowrap" scope="row">Class prefix</th>
                                    <td><code>.col-</code></td>
                                    <td><code>.col-sm-</code></td>
                                    <td><code>.col-md-</code></td>
                                    <td><code>.col-lg-</code></td>
                                    <td><code>.col-xl-</code></td>
                                </tr>
                                <tr>
                                    <th className="text-nowrap" scope="row"># of columns</th>
                                    <td colSpan="5">12</td>
                                </tr>
                                <tr>
                                    <th className="text-nowrap" scope="row">Gutter width</th>
                                    <td colSpan="5">30px (15px on each side of a column)</td>
                                </tr>
                                <tr>
                                    <th className="text-nowrap" scope="row">Nestable</th>
                                    <td colSpan="5">Yes</td>
                                </tr>
                                <tr>
                                    <th className="text-nowrap" scope="row">Column ordering</th>
                                    <td colSpan="5">Yes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="container mb-70">
                    <div className="fancy-title mb-30">
                        <h4>Bootstrap 4 grid Examples</h4>
                        <div className="fancy-title-sep gray-sep"></div>
                    </div> 
                    <div className="row mb-30 no-margin">
                        <div className="col-sm-3 col-grid">
                            1/4
                        </div>
                        <div className="col-sm-3 col-grid">
                            1/4
                        </div>
                        <div className="col-sm-3 col-grid">
                            1/4
                        </div>
                        <div className="col-sm-3 col-grid">
                            1/4
                        </div>
                    </div>
                    <div className="row mb-30 no-margin">
                        <div className="col-sm-4 col-grid">
                            1/3
                        </div>
                        <div className="col-sm-4 col-grid">
                            1/3
                        </div>
                        <div className="col-sm-4 col-grid">
                            1/3
                        </div>
                    </div>
                    <div className="row mb-30 no-margin">
                        <div className="col-sm-6 col-grid">
                            1/2
                        </div>
                        <div className="col-sm-6 col-grid">
                            1/2
                        </div>
                    </div>
                    <div className="row mb-30 no-margin">
                        <div className="col-sm-12 col-grid">
                            1/1
                        </div>
                    </div>
                    <div className="row mb-30 no-margin">
                        <div className="col-md-8 ml-auto mr-auto col-grid">
                            Auto Center
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ColumnsArea;