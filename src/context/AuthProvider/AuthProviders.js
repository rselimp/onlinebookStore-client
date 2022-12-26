import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';


//1.context provider with passed children
//2.context api:share auth state with other components
//3.set the user context
//4.create context and authinticate all information
//5.create a user function named createuser to return createUserWithEamilandPassword

export const AuthContext =createContext();
const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const[user,setUser] = useState(null);
    const[loading, setLoading] =useState(true);

    const createUser =(name,email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,name,email,password);
    }

    const login =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const providerLogin = provider =>{
        return signInWithPopup(auth,provider)
    }

    const githubProviderLogin =provider =>{
        return signInWithPopup(auth, provider)
    }


    const logOut =() =>{
        return signOut(auth)
    }

    const verifyEmail =() =>{
        return sendEmailVerification(auth.currentUser)
    }

    const forgotPassword = (email) =>{
        return sendPasswordResetEmail(auth,email)

    }

   


    useEffect( () =>{
        const unsubscribe= onAuthStateChanged(auth,currentUser =>{
           //console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            return unsubscribe()
        }
    },[])



    const authInfo ={
        user,
        loading,
        createUser,
        login,
        logOut,
        providerLogin,
        githubProviderLogin,
        verifyEmail,
        forgotPassword,
        
    
    }



    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;