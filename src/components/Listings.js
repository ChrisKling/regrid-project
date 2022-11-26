import React, { useState } from "react";
//import Card from "./Card";*
import "./Listings.css";
import "./Card.css";
import CardData from "./CardData";
import { Add, ArrowBack, ArrowDownward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Listings() {
  const [data, setData] = useState(CardData);
  const [isOpen, setIsOpen] = useState(false);

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
        <button
          className="newListingButton"
          onClick={() => {
            navigator("../NewListing");
          }}
        >
          <Add />
        </button>
        <div>
          <div className="listingsHeader">
            <h1>LISTINGS</h1>
            <div className="searchContainer">
              <motion.div className="filter-container" layout>
                <motion.button
                  layout
                  className="openSearchButton"
                  id="openSearchButton"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Filters
                  <ArrowDownward className="arrowDown" />
                </motion.button>
                {isOpen && (
                  <motion.div layout className="dropdown-content">
                    <motion.button
                      layout
                      className="listingButton"
                      id="listingButton"
                      onClick={() => setData(CardData)}
                    >
                      All
                    </motion.button>
                    <motion.button
                      layout
                      className="listingButton"
                      id="listingButton"
                      onClick={() => filterResult("fruit")}
                    >
                      Fruits
                    </motion.button>
                    <motion.button
                      layout
                      className="listingButton"
                      id="listingButton"
                      onClick={() => filterResult("vegetable")}
                    >
                      Vegetables
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
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
                    <button
                      className="listingCardButton"
                      onClick={(e, value) => {
                        navigateToPage(e, "../IndividualListing/" + id);
                      }}
                    >
                      Open Listing
                    </button>
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
