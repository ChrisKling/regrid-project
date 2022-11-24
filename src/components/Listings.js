import React from "react";
import Card from "./Card";
import "./Listings.css";
import CardData from "./CardData";

function Listings() {
  return (
    <div className="listingsContainer">
      <div>
        <h1>Listings</h1>
        <div className="listingCardsWrapper">
          <Card details={CardData} />
        </div>
      </div>
    </div>
  );
}

export default Listings;
