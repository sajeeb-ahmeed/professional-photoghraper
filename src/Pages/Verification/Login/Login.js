import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='container mx-auto'>
            <div className="login-container">
                <div className="login-title">LOGIN</div>
                <form className="login-form" >
                    <input type="text" placeholder="Your Email" />
                    {<p className="error-message"></p>}
                    <input type="password" placeholder="password" />
                    {<p className="error-message"></p>}
                    <button>Login</button>

                    {/* {error && <p className="error-message">{error}</p> } */}
                    {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}
                    {/* <ToastContainer /> */}

                    <p>Don't have an account? <Link to="/signup">Sign up first</Link> </p>
                </form>

                <button >Google</button>
            </div>
        </div>
    );
};

export default Login;