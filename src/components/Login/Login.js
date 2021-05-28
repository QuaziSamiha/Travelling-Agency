import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import GoogleLogo from '../../images/google-logo.png';
import './Login.css';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } }

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedInUser = {
                    name: displayName,
                    email: email
                };
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const [user, setUser] = useState({
        isSignedIn: false,
        email: '',
        password: ''
    });

    const handleSubmit = () => {
        console.log('sign in clicked')
    }

    const handleBlur = (event) => {
        let isFormValid;
        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            isFormValid = event.target.value.length > 6;
        }
        if (isFormValid) {
            const updateUserInfo = { ...user };
            updateUserInfo[event.target.name] = event.target.value;
            setUser(updateUserInfo);
        }
    }

    return (
        <div style={{ paddingTop: '250px', margin: '0 20%' }}>

            <h4 className='m-3 text-primary'>Create an Account</h4>
            <form>
                <fieldset className='border p-3 m-4'>
                    <legend className=''>Enter Your Details:</legend>
                    <input className='form-control' type="text" name="email" onBlur={handleBlur} placeholder='enter your email...' required /> <br />
                    <input className='form-control' type="password" name="password" onBlur={handleBlur} placeholder='enter your password...' required />  <br />
                    <input className='form-control bg-info' type="submit" value="Submit" /> <br />
                </fieldset>
            </form>

            <button onClick={handleGoogleSignIn} className='m-4 px-5 btn btn-info'>
                <img src={GoogleLogo} alt="" className='google-logo'/>
            Continue with Google
            </button>
        </div>
    );
};

export default Login;