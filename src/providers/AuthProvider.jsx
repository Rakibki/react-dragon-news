import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.init";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [lodding, setLodding] = useState(true);

  const createUSer = (email, password) => {
    setLodding(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLodding(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const dishconnet = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("onAuthStateChange");
      setLodding(false)
    });
    return () => {
      dishconnet();
    };
  }, []);

  const logOurUser = () => {
    return signOut(auth);
  };

  const authInfo = { user, lodding, createUSer, logOurUser, loginUser };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
