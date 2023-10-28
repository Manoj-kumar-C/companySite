import Link from 'next/link';
import React from 'react';
import LoginForm from '../forms/login-form';

const LoginArea = () => {
    return (
        <>
            <section className="login-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="basic-login">
                                <h3 className="mb-20">Login From Here</h3>
                                <p>Welcome! Please confirm that your are visiting</p>
                                <div className="mb-30"></div>
                                <LoginForm /> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoginArea;