import React from 'react';
import RegisterForm from '../forms/register-form';

const RegisterArea = () => {
    return (
        <>
            <section className="login-area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="basic-login">
                                <h3 className="mb-20">Signup From Here</h3>
                                <p>Welcome! Please confirm that your are visiting 
                                </p>
                                <div className="mb-30"></div>
                                <RegisterForm /> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RegisterArea;