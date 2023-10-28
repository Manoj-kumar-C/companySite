import Link from 'next/link'; 
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const schema = yup .object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(6).label("Password"),

  }).required(); 
  
  const RegisterForm = () => {
    const { register, handleSubmit,  reset, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
      });
  
      const onSubmit = (data) =>{          
        notify()
        console.log(data) 
        reset()
      }; 
  
  
      const notify = () => toast("successful");
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
            <ToastContainer />
                <label htmlFor="name">User Name <span>**</span></label>
                <input {...register("name")} id="name" type="text" placeholder="Your Name" />
                <p className="form_error">{errors.name?.message}</p>

                <label htmlFor="email-id">Email Address <span>**</span></label>
                <input {...register("email")} id="email-id" type="text" placeholder="Your Email" />
                <p className="form_error">{errors.email?.message}</p>


                <label htmlFor="pass">Password <span>**</span></label>
                <input {...register("password")} id="pass" type="password" placeholder="Password" />
                <p className="form_error">{errors.password?.message}</p>
                
                <div className="mt-10"></div>

                <button type='submit' className="login-btn w-100">Register Now</button>
                <div className="sign-up text-center mt-30">
                    <span>Already have account?</span>
                    <Link href="/login"> 
                        <button className="login-text-btn">login Now</button>                    
                    </Link>
                </div>
            </form>
        </>
    );
};

export default RegisterForm;