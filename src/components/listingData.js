//import { setDoc } from "firebase/firestore";
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
  ref,
} from "../backend/firebase/firebase";

//import { useAuth } from "./AuthContext";

const ListingsContext = createContext();

export function useListings() {
  return useContext(ListingsContext);
}

export function ListingsProvider({ children }) {
  const [listings, setListings] = useState([]);
  const [fruitListings, setFruitListings] = useState([]);
  const [veggieListings, setVeggieListings] = useState([]);
  const [otherListings, setOtherListings] = useState([]);
  //const { logout } = useAuth();
  useEffect(() => {
    getAllListings();
  }, []);

  useEffect(() => {
    if (fruitListings && veggieListings && otherListings) {
      setListings([...otherListings, ...veggieListings, ...fruitListings]);
      console.log("ALL LISTINGS HAVE BEEN SET MOTHERFUCKER!!!!!");
      console.log(listings);
    }
  }, [fruitListings, veggieListings, otherListings]);

  // Check if the user had already created a profile or not
  const getFruitListings = async () => {
    const collectionRef = collection(db, "listings");
    const q = query(collectionRef, where("productType", "==", "fruit"));
    const resultingSnapshot = await getDocsFromServer(q);
    resultingSnapshot.forEach((doc) => {
      console.log("checking if listings exists...");
      console.log();
      const data = doc.data();
      //console.log("Profile already exists!");
      //console.log(data);
      setFruitListings([...fruitListings, data]);
    });
    console.log("Profile doesn't exist");
  };
  const getVegetableListings = async () => {
    const collectionRef = collection(db, "listings");
    const q = query(collectionRef, where("productType", "==", "vegetable"));
    const resultingSnapshot = await getDocsFromServer(q);
    resultingSnapshot.forEach((doc) => {
      console.log("checking if listings exists...");
      console.log();
      const data = doc.data();
      //console.log("Profile already exists!");
      //console.log(data);
      setVeggieListings([...veggieListings, data]);
    });
    console.log("Profile doesn't exist");
  };
  const getOtherListings = async () => {
    const collectionRef = collection(db, "listings");
    const q = query(collectionRef, where("productType", "==", "other"));
    const resultingSnapshot = await getDocsFromServer(q);
    resultingSnapshot.forEach((doc) => {
      console.log("checking if listings exists...");
      console.log();
      const data = doc.data();
      //console.log("Profile already exists!");
      //console.log(data);
      setOtherListings([...otherListings, data]);
    });
    console.log("Profile doesn't exist");
  };
  const getAllListings = async () => {
    await getOtherListings();
    await getVegetableListings();
    await getFruitListings();
    //setListings([...otherListings, ...veggieListings, ...fruitListings])
  };

  const exports = {
    getAllListings,
    listings,
  };

  return (
    <ListingsContext.Provider value={exports}>
      {children}
    </ListingsContext.Provider>
  );
}
