import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    if(user?.email){
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setRole(data.role);
      })
    }
  }, [user]);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  useEffect(() => {
    if(user?.email){
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setRole(data.role);
        setLoading(false);
      })
    }
  }, [user]);
  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    googleLogin,
    logOutUser,
    role
  };

  
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
