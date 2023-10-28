 
import SocialLinks from '../common/social-links';
import ContactMinimalForm from '../forms/contact-minimal-form'; 

const ContactMinimalFormArea = ({style_element}) => {
    return (
        <>
            <div className={`contact-form-area ${style_element ? "" : "pt-140"} pb-120`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 offset-xl-1">
                            <div className="contact-info-minimal mb-30">
                                <div className="section-title-2 mb-20">
                                    <span>Any Questions?</span>
                                    <h2>Send us message for any need.</h2>
                                </div>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiotam rem aperiam, eaqueipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                    voluptatem</p>
                                <div className="contact-social mt-30">
                                    <SocialLinks />
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="contact-form mb-30">
                                <ContactMinimalForm /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactMinimalFormArea;