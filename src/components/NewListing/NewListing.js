import React from "react";
import "./NewListing.css";
import "../Listings.css";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

function NewListing() {
  const navigator = useNavigate();
  return (
    <div className="listingsContainer newlisting">
      <button
        className="navigateBackButton"
        onClick={() => {
          navigator(-1);
        }}
      >
        <ArrowBack />
      </button>
      <h1>Sup world!</h1>
    </div>
  );
}

export default NewListing;
