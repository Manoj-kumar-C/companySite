import Link from "next/link";
import Image from 'next/image'; 
import error_img from "@assets/img/404/404.png";

const ErrorArea = () => {
    return (
        <>
            <section className="error-404-area pt-140 pb-140">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="error-page text-center">
                                <h1>404</h1>
                                <h4>Sorry We Can't Find That Page!</h4>
                                <p>The page you are looking for was moved, removed, renamed or never existed.</p>
                                <Link className="login-btn" href="/">Back to home</Link>
                                <div className="mb-20"></div>
                                <Image src={error_img}  alt="404" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorArea;