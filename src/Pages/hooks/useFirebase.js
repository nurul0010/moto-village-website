import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../LoginPages/Login/Firebase/Firebase.init";


initializeAuthentication();


const useFirebase = () => {


    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // register new user
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                history.replace('/');
                const newUser = { email: email, displayName: name };
                setUser(newUser);
                // save userinfo to database 
                saveUser(email, name, 'post');
                // update user profile 
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    setError('');
                }).catch((error) => {
                    setError(error)
                });

            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    };

    // sign in user

    const signInUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                // const user = userCredential.user;
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    };

    // google sign in 

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'put');
                const destination = location?.state?.from || '/';
                history.replace(destination);
                error('');
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    // observed user 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unSubscribe;
    }, [auth]);

    // check user admin role 

    useEffect(() => {
        fetch(`https://stark-fortress-48144.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);
            })
    }, [user?.email])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    };

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://stark-fortress-48144.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    return {
        user,
        admin,
        registerUser,
        signInUser,
        signInWithGoogle,
        error,
        logOut,
        isLoading
    }
};

export default useFirebase;