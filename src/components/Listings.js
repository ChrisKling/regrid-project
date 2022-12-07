import React, { useEffect, useState } from "react";

import { useProfile } from "../backend/contexts/ProfileContext.js";
//import Card from "./Card";*
import "./Listings.css";
import "./Card.css";
import CardData from "./CardData";
import { Add, ArrowBack, ArrowDownward, Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { useListings } from "./listingData";

function Listings() {
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [isHovering, setIsHovering] = useState(false);

  const { userProfile } = useProfile();

  useEffect(() => {
    if (userProfile) {
    }
  }, [userProfile]);


  const { listings, getAllListings } = useListings();

  const handleClick = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    console.log("trying to load listings...");
    //getAllListings();
    console.log(listings);
  }, []);

  useEffect(() => {
    console.log("trying to re-load listings...");
    setData(listings);
    console.log(listings);
  }, [listings]);

  const filterResult = (type) => {
    const result = listings.filter((items) => {
      return items.data.productType === type;
    });
    setData(result);
  };

  function navigateToPage(e, value) {
    navigator(value);
  }

  const navigator = useNavigate();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <Nav />

      <div className="listingsContainer">
        <button
          className="navigateBackButton"
          onClick={(e, value) => {
            navigateToPage(e, "/");
          }}
        >
          <ArrowBack />
        </button>
        {userProfile && (
          <>
            <button
              className="newListingButton"
              onClick={() => {
                navigator("../NewListing");
              }}
            >
              <Add />
            </button>
          </>
        )}
        {!userProfile && (
          <div className="deactivatedButtonContainer">
            <button
              className="deactiveNewListingButton"
              disabled={true}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <Add />
            </button>
            {isHovering && (
              <p className="buttonHover">Please sign in to create a listing</p>
            )}
          </div>
        )}
        <div>
          <div className="listingsHeader">
            <div className="listingsh1">
              <h1>LISTINGS</h1>
            </div>
            <div className="sortButtons">
              <div className="searchInputContainer">
                <input
                  type="text"
                  placeholder="Search..."
                  name="message"
                  id="searchBar"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
                <button onClick={handleClick}>
                  <Close />
                </button>
              </div>
            </div>

            <div className="searchContainer">
              <div className="filter-container" layout>
                <button
                  layout
                  className="openSearchButton"
                  id="openSearchButton"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Filters
                  <ArrowDownward className="arrowDown" />
                </button>
                {isOpen && (
                  <div layout className="dropdown-content">
                    <button
                      layout
                      className="listingButton"
                      id="listingButton"
                      onClick={() => setData(listings)}
                    >
                      All
                    </button>
                    <button
                      layout
                      className="listingButton"
                      id="listingButton"
                      onClick={() => filterResult("fruit")}
                    >
                      Fruits
                    </button>
                    <button
                      layout
                      className="listingButton"
                      id="listingButton"
                      onClick={() => filterResult("vegetable")}
                    >
                      Vegetables
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="listingCardsWrapper">
            {data && (
              <div className="grid">
                {data
                  // .filter((val) => {
                  //   if (searchTerm === "") {
                  //     return val;
                  //   } else if (
                  //     val.title.toLowerCase().includes(searchTerm.toLowerCase())
                  //   ) {
                  //     return val;
                  //   }
                  // })
                  .map((val) => {
                    return (
                      <div className="listingCardContainer" key={val.id}>
                        <div className="imageContainer">
                          <img src={val.img} alt={val.productType} />
                        </div>
                        <div className="cardContent">
                          <div className="cardTitle">
                            <h3 className="titleh3">{val.listingTitle}</h3>
                          </div>
                          <div className="cardBody">
                            <p className="bodyp">{val.productDescription}</p>
                          </div>
                        </div>
                        <p>{val.location}</p>
                        <p>{val.expiryDate}</p>
                        <button
                          className="listingCardButton"
                          onClick={(e, value) => {
                            navigateToPage(e, "../IndividualListing/" + val.id);
                          }}
                        >
                          Open Listing
                        </button>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listings;
