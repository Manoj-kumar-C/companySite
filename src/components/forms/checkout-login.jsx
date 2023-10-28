 
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup .object({
    // name: yup.string().required().label("Username or Email"),
    email: yup.string().required().email().label("Username or Email"),
    password: yup.string().required().min(6).label("Password"),

  }).required();

  
const CheckoutLogin = () => {

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
            <form  onSubmit={handleSubmit(onSubmit)}>
            <ToastContainer />
                <p className="form-row-first">
                    <label>Username or email <span className="required">*</span></label>
                    <input {...register("email")} type="text" />
                </p>
                <p className="form_error">{errors.email?.message}</p>
                <p className="form-row-last">
                    <label>Password <span className="required">*</span></label>
                    <input {...register("password")} type="password"  />
                </p>
                <p className="form_error">{errors.password?.message}</p>
                <p className="form-row">
                    <button className="btn-cart" type="submit">Login</button>
                    <label>
                        <input  type="checkbox"  />
                        {" "}Remember me
                    </label>
                </p>
                <p className="lost-password">
                    <Link href="#">Lost your password?</Link>
                </p>
            </form>
        </>
    );
};

export default CheckoutLogin;