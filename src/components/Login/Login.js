import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import GoogleLogo from '../../images/google-logo.png';

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

    return (
        <div style={{ paddingTop: '250px', margin: '0 20%' }}>
            {/* <h1>This is login</h1> */}
            <button onClick={handleGoogleSignIn} className='btn btn-success'> <img src={GoogleLogo} alt="" style={{ height: '40px', width: "40px" }} /> <b>Sign in Using Google</b> </button>
        </div>
    );
};

export default Login;