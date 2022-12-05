import { setDoc } from "firebase/firestore";
import React, { useState, createContext, useContext, useEffect } from "react";
import {
  db,
  addDoc,
  collection,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
  updateDoc,
  getDocsFromServer,
  getDocFromServer,
} from "../firebase/firebase";

import { useAuth } from "./AuthContext";

const ProfileContext = createContext();

export function useProfile() {
  return useContext(ProfileContext);
}

export function ProfileProvider({ children }) {
  const [userProfile, setUserProfile] = useState();
  const { logout } = useAuth();

  // Check if the user had already created a profile or not
  const checkIfProfileExists = async (userId) => {
    const collectionRef = collection(db, "profiles");
    const q = query(collectionRef, where("userId", "==", userId));
    const resultingSnapshot = await getDocsFromServer(q);
    resultingSnapshot.forEach((doc) => {
      console.log("checking if user exists...");
      console.log();
      const data = doc.data();
      if (data.userId === userId) {
        console.log("Profile already exists!");
        console.log(data);
        return true;
      }
    });
    console.log("Profile doesn't exist");
    return false;
  };

  //POST(ADD)
  const addProfile = async (profile, userId) => {
    //check if user id is valid
    if (!profile) {
      throw new Error("User credentials are missing");
    }
    if (profile.userId !== userId) {
      console.log("profile.userId is:");
      console.log(profile.userId);
      console.log("userId is:");
      console.log(userId);
      throw new Error("User ID does not match");
    }

    const docRef = doc(db, "profiles", profile.userId);
    await setDoc(docRef, {
      ...profile,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  };

  //GET
  const getUserProfile = async (id) => {
    if (typeof id !== "string") {
      throw new Error("User credentials are missing");
    }

    const collectionRef = collection(db, "profiles");
    const q = query(collectionRef, where("userId", "==", id));
    const resultingSnapshot = await getDocsFromServer(q);
    resultingSnapshot.forEach((doc) => {
      const data = doc.data();
      setUserProfile({ ...data, userId: doc.userId });
    });
  };

  //UPDATE
  const updateProfile = async (profile, userId) => {
    //check if user id is valid
    console.log("trying to update profile....");
    console.log(profile);
    if (!profile) {
      console.log("ERROR 1 Thrown!");
      throw new Error("User credentials are missing");
    }
    if (profile.userId !== userId) {
      console.log("ERROR 2 Thrown!");
      console.log(profile.userId);
      console.log(userId);
      throw new Error("User ID does not match");
    }
    const docRef = doc(db, "profiles", profile.userId);
    await setDoc(docRef, {
      ...profile,
      updatedAt: serverTimestamp(),
    });
    console.log("document Semi loaded??");
    await getUserProfile(profile.userId);
    console.log("document updated?");
    console.log(userProfile);
  };

  const profileLogout = async () => {
    setUserProfile({});
    await logout();
  };

  const exports = {
    addProfile,
    getUserProfile,
    updateProfile,
    userProfile,
    checkIfProfileExists,
    profileLogout,
  };

  return (
    <ProfileContext.Provider value={exports}>
      {children}
    </ProfileContext.Provider>
  );
}
