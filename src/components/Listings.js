import React, { useState } from "react";
import Card from "./Card";
import "./Listings.css";
import CardData from "./CardData";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Filter from "./filter";

function Listings() {
  function navigateToPage(e, value) {
    navigator(value);
  }

  const [Filtered, setFiltered] = useState([]);

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
            <div className="searchContainer">
              <Filter />
            </div>
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
