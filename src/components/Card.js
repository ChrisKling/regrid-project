import { Button } from "@mui/material";
import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="grid">
      {props.details.map((value, index) => (
        <div className="listingCardContainer" key={index}>
          <div className="imageContainer">
            <img src={value.img} alt="" />
          </div>
          <div className="cardContent">
            <div className="cardTitle">
              <h3 className="titleh3">{value.title}</h3>
            </div>
            <div className="cardBody">
              <p className="bodyp">{value.description}</p>
            </div>
          </div>
          <p>{value.location}</p>
          <p>{value.expiry}</p>
          <button className="listingCardButton">Open Listing</button>
        </div>
      ))}
    </div>
  );
}

export default Card;
