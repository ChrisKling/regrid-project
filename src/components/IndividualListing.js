import React, { useContext, useState } from "react";
import "./IndividualListing.css";
import CardData from "./CardData";
import { useParams } from "react-router-dom";

function IndividualListing() {
  const [data, setData] = useState({ CardData });
  const { id } = useParams();

  return (
    <div className="listingsContainer individual">
      <h1> welcome {id}</h1>

      <p></p>
    </div>
  );
}

export default IndividualListing;
