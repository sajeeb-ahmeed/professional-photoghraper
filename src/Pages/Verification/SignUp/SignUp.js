import { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";

import '../Login/Login.css'
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return console.log('<Loading></Loading>');
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }


    return (
        <>
            <div className="login-container">
                <div className="login-title">Sign up</div>
                <form className="login-form" onSubmit={handleRegister}>
                    <input type="text" name="name" id="" placeholder='Your Name' />

                    <input type="email" name="email" id="" placeholder='Email Address' required />

                    <input type="password" name="password" id="" placeholder='Password' required />

                    <button type="submit" value="Register">Sign up</button>

                    <ToastContainer />
                    <p className="mt-5">Already have an account ? <Link to="/login">Login</Link> </p>
                </form>

            </div>
            <SocialLogin></SocialLogin>
        </>
    );
};

export default SignUp;
