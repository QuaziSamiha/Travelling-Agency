import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import GoogleLogo from '../../images/google-logo.png';
import './Login.css';
import { createUserWithEmailAndPassword, handleGoogleSignIn, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';

initializeLoginFramework();

const Login = () => {
    // context API
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // codes for private route
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    // sign in using google
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    // sign in using email and password
    const [user, setUser] = useState({
        isSignedIn: false,
        email: '',
        password: '',
        error: '',
        success: false
    });

    const [newUser, setNewUser] = useState(false);

    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            isFieldValid = event.target.value.length > 6;
        }
        if (event.target.name === 'confirm-password') {
            isFieldValid = event.target.value.length > 6;
        }
        if (isFieldValid) {
            const userInfo = { ...user };
            userInfo[event.target.name] = event.target.value;
            setUser(userInfo);
        }
    }

    const handleSubmit = (event) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        event.preventDefault();
    }

    return (
        <div style={{ paddingTop: '250px', margin: '0 20%' }}>

            <div className='mx-4 p-2 bg-info text-dark border rounded-3'>
                <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} />
                <label htmlFor="newUser">New User ?</label>
            </div>

            { newUser ?
                <form className='border rounded-3 p-3 m-4'>
                    <fieldset>
                        <legend className='text-info'>Enter Your Details for Create An Account:</legend>
                        <input className='form-control' type="text" name="name" onBlur={handleBlur} placeholder='enter your name...' required /> <br />
                        <input className='form-control' type="text" name="email" onBlur={handleBlur} placeholder='enter your email...' required /> <br />
                        <input className='form-control' type="password" name="password" onBlur={handleBlur} placeholder='enter your password...' required />  <br />
                        <input className='form-control' type="password" name="confirm-password" onBlur={handleBlur} placeholder='confirm your password...' required /> <br />
                        <input onClick={handleSubmit} className='form-control bg-info' type="submit" value="Sign up" /> <br />
                    </fieldset>
                    {
                        user.success ? <p className='text-success'>Account Created Successfully</p> : <p className='text-danger'>{user.error}</p>
                    }
                </form>
                :
                <form className='border rounded-3 p-3 m-4'>
                    <fieldset>
                        <legend className='text-info'>Enter Your Login Details:</legend>
                        <input className='form-control' type="text" name="email" onBlur={handleBlur} placeholder='enter your email...' required /> <br />
                        <input className='form-control' type="password" name="password" onBlur={handleBlur} placeholder='enter your password...' required />  <br />
                        <input onClick={handleSubmit} className='form-control bg-info' type="submit" value="Sign in" /> <br />
                    </fieldset>
                </form>
            }

            <button onClick={googleSignIn} className='m-4 px-5 btn btn-info'>
                <img src={GoogleLogo} alt="" className='google-logo' />
            Continue with Google
            </button>
        </div>
    );
};

export default Login;