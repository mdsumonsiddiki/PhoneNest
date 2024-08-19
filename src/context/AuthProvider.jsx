import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";
import auth from "../firebase/firebase.config";




export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google provider
    const googleProvider = new GoogleAuthProvider();
  
    // Email and pass SingUp
  
    const createUserWithEmailPass = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    // Email and Pass SingIn

    const loginWithEmailPass =(email, password)=>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
    }
  
    // SingIn SingUp with google
  
    const singInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
  
 
  
    // logOut user
    const userLogOut = () => {
      signOut(auth);
      setUser(null);
      toast.success('Logout Successful')
    };
  
    // manage user
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => unsubscribe();
    }, []);
  
    // all context
    const authInfo = {
      createUserWithEmailPass,
      singInWithGoogle,
      userLogOut,
      loginWithEmailPass,
      setLoading,
      user,
      loading,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {

    children: PropTypes.array
}

export default AuthProvider;