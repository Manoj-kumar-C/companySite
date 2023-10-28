
import React from 'react';

const TypographyArea = () => {
    return (
        <>
               <div className="elements-area pt-120 pb-50">
                <div className="container mb-40">
                    <div className="row">
                        <div className="col-md-12 mb-40">

                            <div className="card mb-30">
                                <div className="card-body mb-30">
                                    <h4 className="card-title">Headings</h4>
                                    <hr />
                                    <h1>
                                        h1. Bootstrap heading
                                    </h1>
                                    <h2>
                                        h2. Bootstrap heading
                                    </h2>
                                    <h3>
                                        h3. Bootstrap heading
                                    </h3>
                                    <h4>
                                        h4. Bootstrap heading
                                    </h4>
                                    <h5>
                                        h5. Bootstrap heading
                                    </h5>
                                    <h6>
                                        h6. Bootstrap heading
                                    </h6>
                                </div>
                            </div>

                            <div className="card mb-30">
                                <div className="card-body">
                                    <h4 className="card-title">Lead Text</h4>
                                    <hr />
                                    <p className="lead mb0">
                                        Styles for displaying content with some of the most commonly used HTML elements, including
                                        normalization, typography, images, tables, and more.
                                    </p>
                                </div>
                            </div>
                        </div> 

                        <div className="col-md-12 mb-40">                                                        
                            <div className="card mb-30">
                                <div className="card-body">
                                    <h4 className="card-title">Display Headings</h4>
                                    <hr />
                                    <h1 className="display-1">
                                        Display 1
                                    </h1>
                                    <h2 className="display-2">
                                        Display 2
                                    </h2>
                                    <h3 className="display-3">
                                        Display 3
                                    </h3>
                                    <h4 className="display-4">
                                        Display 4
                                    </h4>
                                </div>
                            </div>

                            <div className="card mb-30">
                                <div className="card-body">
                                    <h4 className="card-title">Inline Text Elements</h4>
                                    <hr />
                                    <p>
                                        <code>mark</code>
                                        : You can use the mark badge to
                                        <mark>highlight</mark>
                                        text.
                                    </p>
                                    <p>
                                        <code>del</code>
                                        :
                                        <del>This line of text is meant to be treated as deleted text.</del>
                                    </p>
                                    <p>
                                        <code>s</code>
                                        :
                                        <s>This line of text is meant to be treated as no longer accurate.</s>
                                    </p>
                                    <p>
                                        <code>ins</code>
                                        :
                                        <ins>This line of text is meant to be treated as an addition to the document.</ins>
                                    </p>
                                    <p>
                                        <code>u</code>
                                        :
                                        <u>This line of text will render as underlined</u>
                                    </p>
                                    <p>
                                        <code>small</code>
                                        :
                                        <small>This line of text is meant to be treated as fine print.</small>
                                    </p>
                                    <p>
                                        <code>strong</code>
                                        : <strong>This line rendered as bold text.</strong>
                                    </p>
                                    <p className="mb0">
                                        <code>em</code>
                                        : <em>This line rendered as italicized text.</em>
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title"> Text Styles</h4>
                                    <hr />
                                    <p>
                                        Styles for displaying content with some of the most commonly used HTML elements, including
                                        normalization, typography, images, tables, and more.
                                    </p>
                                    <p className="text-muted">
                                        Styles for displaying content with some of the most commonly used HTML elements, including
                                        normalization, typography, images, tables, and more.
                                    </p>
                                    <p className="text-primary">
                                        Styles for displaying content with some of the most commonly used HTML elements, including
                                        normalization, typography, images, tables, and more.
                                    </p>
                                    <p className="text-warning">
                                        Styles for displaying content with some of the most commonly used HTML elements, including
                                        normalization, typography, images, tables, and more.
                                    </p>
                                    <p className="text-info">
                                        Styles for displaying content with some of the most commonly used HTML elements, including
                                        normalization, typography, images, tables, and more.
                                    </p>
                                    <p className="text-danger">
                                        Styles for displaying content with some of the most commonly used HTML elements, including
                                        normalization, typography, images, tables, and more.
                                    </p>
                                    <p className="text-success">
                                        Styles for displaying content with some of the most commonly used HTML elements, including
                                        normalization, typography, images, tables, and more.
                                    </p>
                                </div>
                            </div>
                        </div> 
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default TypographyArea;