import React from 'react';

const contact_standard_data = [
    {
        id: 1,
        icon: "fas fa-envelope",
        title: "Mail Here",
        info_1: "Admin@BasicTheme.com",
        info_2: "Info@Themepur.com",
    },
    {
        id: 2,
        icon: "fas fa-map-marker-alt",
        title: "Visit Here",
        info_1: "27 Division St, New York, NY 10002, Jaklina, United Kingpung",
        info_2: "",
    },
    {
        id: 3,
        icon: "fas fa-phone",
        title: "Call Here",
        info_1: "+8 (123) 985 789",
        info_2: "+787 878897 87",
    },
]

const ContactStandardArea = () => {
    return (
        <>
             <section className="contact-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        {contact_standard_data.map((item, i) =>
                            <div key={i} className="col-xl-4 col-lg-4 col-md-4">
                                <div className="contact-box text-center mb-30">
                                    <i className={item.icon}></i>
                                    <h3>{item.title}</h3>
                                    <p>{item.info_1}</p>
                                    {item.info_2 && <p>{item.info_2}</p>}
                                    
                                </div>
                            </div>
                        )} 
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactStandardArea;