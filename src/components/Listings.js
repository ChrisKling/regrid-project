import React from "react";
import Card from "./Card";
import "./Listings.css";
import CardData from "./CardData";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Listings() {
  function navigateToPage(e, value) {
    navigator(value);
  }
  const navigator = useNavigate();
  return (
    <div>
      <div className="listingsContainer">
        <button
          className="navigateBackButton"
          onClick={(e, value) => {
            navigateToPage(e, "/");
          }}
        >
          <ArrowBack />
        </button>
        <div>
          <div className="listingsHeader">
            <h1>Listings</h1>
            <div className="searchContainer"></div>
          </div>
          <div className="listingCardsWrapper">
            <Card details={CardData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listings;
