import Link from 'next/link'; 
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const schema = yup .object({
    name: yup.string().required().label("Name"),
    password: yup.string().required().min(6).label("Password"),

  }).required();

const LoginForm = () => {
    
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

                <label htmlFor="pass">Password <span>**</span></label>
                <input {...register("password")} id="pass" type="password" placeholder="password" />
                <p className="form_error">{errors.password?.message}</p>

                <div className="login-action mb-20 fix">
                    <span className="log-rem f-left">
                        <input id="remember" type="checkbox" />
                        <label htmlFor="remember">Remember me!</label>
                    </span>
                    <span className="forgot-login f-right">
                        <Link href="#">Lost your password?</Link>
                    </span>
                </div>
                <button className="login-btn w-100">Login Now</button>
                <div className="sign-up text-center mt-30">
                    <span>New User?</span>
                    <button type='submit'  className="login-text-btn">
                        <Link href="/register">Register Now</Link>
                    </button>
                </div>
            </form> 
        </>
    );
};

export default LoginForm;