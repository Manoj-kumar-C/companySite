import Link from 'next/link'; 


const social_links = [
    {
      link: "http://facebook.com",
      target: "_blank",
      icon: "fab fa-facebook-f", 
    },
    {
      link: "http://twitter.com",
      target: "_blank",
      icon: "fab fa-twitter", 
    },
    {
        link: "https://www.behance.com",
        target: "_blank",
        icon: "fab fa-behance", 
     },
    {
      link: "https://www.linkedin.com",
      target: "_blank",
      icon: "fab fa-linkedin", 
    },   
    {
      link: "https://www.youtube.com",
      target: "_blank",
      icon: "fab fa-youtube", 
    },
  ];
const SocialProfile = () => {
    return (
        <>
            <div className="widget mb-50">
                <div className="widget-title-box mb-40">
                    <span className="animate-border"></span>
                    <h3 className="widget-title">Social Profile</h3>
                </div>
                <div className="social-profile">
                    {social_links.map((link , i) => 
                        <Link key={i} target="_blank" href={link.link}><i className={link.icon}></i></Link>                    
                    )} 
                </div>
            </div>
        </>
    );
};

export default SocialProfile;