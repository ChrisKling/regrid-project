import React, {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "../firebase/firebase";
import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  async function resetPassword(email) {
    return await sendPasswordResetEmail(auth, email);
  }

  async function login(email, password) {
    return await signInWithEmailAndPassword(auth, email, password);
  }

  async function logout() {
    return await signOut(auth);
  }

  async function signup(email, password) {
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    }); // 2. Triggers this,

    return () => {
      unsubscribe();
    };
  }, []);

  const exports = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={exports}>{children}</AuthContext.Provider>
  );
}
