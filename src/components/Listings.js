import React from "react";
import Card from "./Card";
import "./Listings.css";

function Listings() {
  return (
    <div className="listingsContainer">
      <div>
        <h1>Listings</h1>
        <div className="listingCardsWrapper">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Listings;
