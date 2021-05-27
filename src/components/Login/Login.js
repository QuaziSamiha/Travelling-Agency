import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then(res => {
                console.log(res.user.displayName);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div style={{ paddingTop: '250px', margin: '0 20%' }}>
            <h1>This is login</h1>
            <button onClick={handleGoogleSignIn} className='btn btn-success'>Sign in Using Google</button>
        </div>
    );
};

export default Login;