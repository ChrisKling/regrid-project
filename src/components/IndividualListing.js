import React, { useContext, useEffect, useState } from "react";
import "./IndividualListing.css";
import CardData from "./CardData";
import { useParams } from "react-router-dom";

function IndividualListing() {
  const [product, setProduct] = useState();
  //new usestate for loading  = true
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    console.log("hi", product);
    if (product) {
      setLoading(false);
    }
  }, [product]);

  useEffect(() => {
    setProduct(CardData.find((product) => product.id === parseInt(id)));
  }, [id]);

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <div className="listingsContainer individual">
      <h1> welcome {id}</h1>
      <p>{product.title}</p>

      <p></p>
    </div>
  );
}

export default IndividualListing;
