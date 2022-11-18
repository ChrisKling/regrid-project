import { Button } from "@mui/material";
import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="cardContainer">
      <div className="imageContainer">
        <img
          src="https://images.pexels.com/photos/208821/pexels-photo-208821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="cardContent">
        <div className="cardTitle">
          <h3 className="titleh3">Hot Stories!</h3>
        </div>
        <div className="cardBody">
          <p className="bodyp">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            tenetur, veritatis libero vitae cumque aliquam?
          </p>
        </div>
      </div>
      <Button>Read More</Button>
    </div>
  );
}

export default Card;
