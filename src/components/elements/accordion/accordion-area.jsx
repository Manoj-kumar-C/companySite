import React from 'react';

const accordion_content = {
    accordion_style_1: [
        {
            id: 1,
            question: "Monthly Web Development?",
            answer: <>But we dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.  </>,    
            accordion_id: "One",
            collapsed: "", 
            aria_expanded: true, 
            show: "show"
        },
        {
            id: 2,
            question: "Using Visual Composer ?",
            answer: <>But we dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. </>,    
            accordion_id: "Two",
            collapsed: "collapsed", 
            aria_expanded: false, 
            show: ""
        },
        {
            id: 3,
            question: "Monthly Web Development Update ?",
            answer: <>But we dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.</>,    
            accordion_id: "Three",
            collapsed: "collapsed", 
            aria_expanded: false, 
            show: ""
        },
        {
            id: 4,
            question: "How To Build A Virtual ?",
            answer: <>But we dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.</>,    
            accordion_id: "Four",
            collapsed: "collapsed", 
            aria_expanded: false, 
            show: ""
        }, 
    ],
}
const {accordion_style_1} = accordion_content

const AccordionArea = () => {
    return (
        <>
             <div className="elements-area pt-120 pb-50">
                <div className="container mb-70">
                    <div className="row"> 

                        <div className="col-lg-6 my-3 px-5">
                            <h4 className="card-title pb-3 pt-1">Accordion Style 1</h4>
                            <div className="faq-accordion">
                                <div className="accordion" id="accordionExample">
                                    {accordion_style_1.map((item) => (
                                        <div key={item.id} className="accordion-items">
                                            <h2 className="accordion-header" id={`heading${item.accordion_id}`}>
                                                <button
                                                className={`accordion-button faq_btn ${item.collapsed}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${item.accordion_id}`}
                                                aria-expanded={item.aria_expanded}
                                                aria-controls={`collapse${item.accordion_id}`}>
                                                {item.question}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse${item.accordion_id}`}
                                                className={`accordion-collapse collapse ${item.show}`}
                                                aria-labelledby={`heading${item.accordion_id}`}
                                                data-bs-parent="#accordionExample" >
                                                <div className="accordion-content faq_content">
                                                    <p>{item.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div> 
                        </div>  

                        <div className="col-lg-6 my-3 px-5">
                            <h4 className="card-title pb-3 pt-1">Accordion Style 2</h4>
                            <div className="faq-accordion">
                                    <div className="accordion" id="accordionExample2">
                                        {accordion_style_1.map((item) => (
                                            <div key={item.id} className="accordion-items">
                                                <h2 className="accordion-header" id={`heading${item.accordion_id}2`}>
                                                    <button
                                                    className={`accordion-button faq_btn_2 ${item.collapsed}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse${item.accordion_id}2`}
                                                    aria-expanded={item.aria_expanded}
                                                    aria-controls={`collapse${item.accordion_id}2`}
                                                    >
                                                    {item.question}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`collapse${item.accordion_id}2`}
                                                    className={`accordion-collapse collapse ${item.show}`}
                                                    aria-labelledby={`heading${item.accordion_id}2`}
                                                    data-bs-parent="#accordionExample2">
                                                    <div className="accordion-content faq_content">
                                                        <p>{item.answer}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                            </div>                             
                        </div>

                        <div className="col-lg-6 my-3 px-5">
                            <h4 className="card-title pb-3 pt-1">Accordion Style 3</h4>
                            <div className="faq-accordion">
                                <div className="accordion" id="accordionExample3">
                                    {accordion_style_1.map((item) => (
                                        <div key={item.id} className="accordion-items">
                                            <h2 className="accordion-header" id={`heading${item.accordion_id}3`}>
                                                <button
                                                className={`accordion-button faq_btn_3 ${item.collapsed}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${item.accordion_id}3`}
                                                aria-expanded={item.aria_expanded}
                                                aria-controls={`collapse${item.accordion_id}3`}
                                                >
                                                {item.question}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse${item.accordion_id}3`}
                                                className={`accordion-collapse collapse ${item.show}`}
                                                aria-labelledby={`heading${item.accordion_id}3`}
                                                data-bs-parent="#accordionExample3">
                                                <div className="accordion-content faq_content">
                                                    <p>{item.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>                             
                        </div>
                        
                        <div className="col-lg-6 my-3 px-5">
                            <h4 className="card-title pb-3 pt-1">Accordion Style 4</h4>
                            <div className="faq-accordion">
                                    <div className="accordion" id="accordionExample4">
                                        {accordion_style_1.map((item) => (
                                            <div key={item.id} className="accordion-items">
                                                <h2 className="accordion-header" id={`heading${item.accordion_id}4`}>
                                                    <button
                                                    className={`accordion-button faq_btn_4 ${item.collapsed}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse${item.accordion_id}4`}
                                                    aria-expanded={item.aria_expanded}
                                                    aria-controls={`collapse${item.accordion_id}4`}
                                                    >
                                                    {item.question}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`collapse${item.accordion_id}4`}
                                                    className={`accordion-collapse collapse ${item.show}`}
                                                    aria-labelledby={`heading${item.accordion_id}4`}
                                                    data-bs-parent="#accordionExample4">
                                                    <div className="accordion-content faq_content">
                                                        <p>{item.answer}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                            </div>                             
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AccordionArea;