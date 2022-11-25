import React, { useState } from "react";
//import Card from "./Card";*
import "./Listings.css";
import "./Card.css";
import CardData from "./CardData";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Listings() {
  const [data, setData] = useState(CardData);

  const filterResult = (type) => {
    const result = CardData.filter((items) => {
      return items.type === type;
    });
    setData(result);
  };

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
              <div className="filter-container">
                <button
                  className="listingButton"
                  onClick={() => setData(CardData)}
                >
                  All
                </button>
                <button
                  className="listingButton"
                  onClick={() => filterResult("fruit")}
                >
                  Fruits
                </button>
                <button
                  className="listingButton"
                  onClick={() => filterResult("vegetable")}
                >
                  Vegetables
                </button>
              </div>
            </div>
          </div>
          <div className="listingCardsWrapper">
            <div className="grid">
              {data.map((values) => {
                const { id, title, img, type, location, expiry, description } =
                  values;
                return (
                  <div className="listingCardContainer" key={id}>
                    <div className="imageContainer">
                      <img src={img} alt={type} />
                    </div>
                    <div className="cardContent">
                      <div className="cardTitle">
                        <h3 className="titleh3">{title}</h3>
                      </div>
                      <div className="cardBody">
                        <p className="bodyp">{description}</p>
                      </div>
                    </div>
                    <p>{location}</p>
                    <p>{expiry}</p>
                    <button className="listingCardButton">Open Listing</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listings;
