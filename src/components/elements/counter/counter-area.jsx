// import NumberCount from "../../common/number-count";
const counter_content = [
    {
        id: 1, 
        icon: "fal fa-box-check",
        counter_number: 569,
        title: "Project Complete"
    },
    {
        id: 2, 
        icon: "fal fa-heart",
        counter_number: 356,
        title: "Happy Clients"
    },
    {
        id: 3, 
        icon: "fal fa-users",
        counter_number: 783,
        title: "Business Partners"
    },
    {
        id: 4, 
        icon: "fal fa-trophy-alt",
        counter_number: 894,
        title: "IT Consultant"
    },
]
const CounterArea = ({style_count}) => {
    return (
        <>
            <div className={`counter-area ${style_count ? "gn-bg pt-130 pb-100 bg_style" : "pt-100 pb-70"}`}>
                <div className="container">
                    <div className="row">
                        {counter_content.map((item, i) => 
                            <div key={i} className="col-xl-3 col-lg-3 col-md-6">
                                <div className="counter-wrapper single-counter mb-30">
                                    <div className="counter-icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="counter-text">
                                        <h1>
                                            <span className="counter">  
                                            {/* <NumberCount number={item.counter_number}  />  */}
                                            {item.counter_number}
                                            </span> 
                                            <span>+</span>
                                        </h1>
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            </div>   
                        )} 
                    </div>
                </div>
            </div>
        </>
    );
};

export default CounterArea;