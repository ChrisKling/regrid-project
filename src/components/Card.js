import { Button } from "@mui/material";
import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="listingCardContainer">
      <div className="imageContainer">
        <img
          src="https://images.pexels.com/photos/53588/tomatoes-vegetables-food-frisch-53588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="cardContent">
        <div className="cardTitle">
          <h3 className="titleh3">Fresh Tomatoes</h3>
        </div>
        <div className="cardBody">
          <p className="bodyp">
            I got 5kg of tomatoes to trade, I'm in the dragon's Den area Would
            love to trade it for some bananas HMU!
          </p>
        </div>
      </div>
      <p>Location: my place</p>
      <p>Listing expiry: 4 days</p>
      <button className="listingCardButton">Open Listing</button>
    </div>
  );
}

export default Card;
