import React from "react";

const TooltipsArea = () => {
  return (
    <>
      <div className="elements-area pt-120 pb-50">
        <div className="container mb-70">
          <div className="row">
            <div className="col-lg-12">
              <div className="card mb-30">
                <div className="card-body">
                  <h4 className="card-title">Tooltips Variation</h4>
                  <hr />
                  <button
                    type="button"
                    className="btn btn-primary me-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                    Tooltip on top
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary me-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Tooltip on right"
                  >
                    Tooltip on right
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary me-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Tooltip on bottom"
                  >
                    Tooltip on bottom
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary me-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Tooltip on left"
                  >
                    Tooltip on left
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TooltipsArea;
