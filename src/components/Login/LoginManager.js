import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

// sign in using google
export const handleGoogleSignIn = () => { 
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(googleProvider)
        .then(res => {
            const { displayName, email } = res.user;
            const signedInUser = {
                name: displayName,
                email: email
            };
            return signedInUser;
        })
        .catch(error => {
            console.log(error);
        })
}

// sign in using email and password
export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.success = false;
            newUserInfo.error = error.message + '!!!';
            return newUserInfo;
        })
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
            const userInfo = res.user;
            userInfo.error = '';
            userInfo.success = true;
            return userInfo;
        })
        .catch(error => {
            const userInfo = {};
            userInfo.error = error.message;
            userInfo.success = false;
            return userInfo;
        })
}

// export default LoginManager;