import Time from '@/src/utils/time';
import SocialLinks, { CopyRight } from '../common/social-links';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const schema = yup .object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().label("Email"),
    
}).required();
 
const ComingSoonArea = () => {
    const { register, handleSubmit,  reset, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
      });
      const onSubmit = (data) =>{          
        notify()
        console.log(data) 
        reset()
      }; 
      const notify = () => toast("thanks for subscribe");
 

    return (
        <>
            <div className="coming-soon-area d-flex align-items-center">
            
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="comin-soon-text">
                                <h2>We are <br /> coming soon</h2>
                                <p>Our new website is coming soon, follow us for update news.</p>
                                <div className="contact-form mb-30">
                                    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                                    <ToastContainer />
                                        <input {...register("name")} name="name" type="text" className='mb-0' placeholder="Full name" />
                                        <p className="form_error">{errors.name?.message}</p>
                                        <input {...register("email")} name="email" type="email" placeholder="email address" />
                                        <p className="form_error">{errors.email?.message}</p>
                                        <button type="submit" className="login-btn btn-black">subscribe now</button>
                                    </form> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7"></div>
                    </div>
                </div>
            </div>
            <div className="coming-soon-time d-none d-xl-block">
                <div className="time-count-box" >
                <ul className='time-count-box'>
                    <li className="time-count">
                            {Time("2023-12-23 00:00:00").days}<span>Days</span> 
                    </li>
                    <li className="time-count">
                            {Time("2023-12-23 00:00:00").hours} <span>Hours</span> 
                    </li>
                    <li className="time-count">
                             {Time("2023-12-23 00:00:00").minutes}<span>Minutes</span> 
                    </li>
                    <li className="time-count">
                      <a suppressHydrationWarning>{Time("2023-12-23 00:00:00").seconds}</a> <span>Seconds</span>
                    </li>
                  </ul>
                     
                </div>
            </div>

            <div className="coming-soon-icon">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="coming-footer mb-10">
                                <span>Follow us:</span> 
                                <div className="coming-social">
                                    {" "}<SocialLinks /> 
                                </div>
                            </div>
                            <div className="copyright">
                                <p><CopyRight /></p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComingSoonArea;