
import React, {useState, createContext, useContext, useEffect} from 'react'
import { db, addDoc, collection, doc, getDoc, query, where, getDocs, serverTimestamp } from '../firebase/firebase';

const ProfileContext = createContext();

export function useProfile() 
{
    return useContext(ProfileContext);
}



export function ProfileProvider({children}) {

    const [userProfile, setUserProfile] = useState();
    //POST(ADD)
    const addProfile = async (profile, userId) =>{
        //check if user id is valid
        if (!profile)
        {
            throw new Error("User credentials are missing");
        }
        if (profile.userId !== userId)
        {
            throw new Error("User ID does not match");
        }

        //if user is valid, add it as a profile
        await addDoc(collection(db, "profiles"), {
            ...profile,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        });

          
    };

    //GET 
    const getUserProfile = async (id) =>{
        if(typeof id !== "string")
        {
            throw new Error("User credentials are missing");
        }

        const collectionRef = collection(db, "profiles");
        const q = query(collectionRef, where("userId", "==", id));
        const resultingSnapshot = await getDocs(q);
        resultingSnapshot.forEach((doc) => {
            setUserProfile(doc.data()); 
        })
        
    };
     
    const exports = { 
        addProfile,
        getUserProfile,
        userProfile
    };

    return (
        <ProfileContext.Provider value={exports}>
            {children}
        </ProfileContext.Provider>
    )
}