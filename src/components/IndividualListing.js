import React, { useEffect, useState } from "react";
import "./IndividualListing.css";
import CardData from "./CardData";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

function IndividualListing() {
  const navigator = useNavigate();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (product) {
      setLoading(false);
    }
  }, [product]);

  useEffect(() => {
    setProduct(CardData.find((product) => product.id === parseInt(id)));
  }, [id]);

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <div className="listingsContainer" id="individualListingContainer">
      <button
        className="navigateBackButton"
        onClick={() => {
          navigator(-1);
        }}
      >
        <ArrowBack />
      </button>
      <div className="listingImgContainer">
        <img src={product.img} alt="" />
      </div>
      <div className="listingProductContainer">
        <div className="h1Container">
          <h1>{product.title}</h1>
        </div>
        <div className="listingInfoContainer">
          <h2>Listing Info</h2>
          <p>Seller ID: {product.sellerId}</p>
          <p>Product ID: {product.id}</p>
          <p>Expiry Date: {product.expiry}</p>
          <p>Listing Date: {product.startDate}</p>
        </div>
        <div className="listingDescriptionContainer">
          <p>{product.description}</p>
        </div>
        <div className="listingButtonContainer">
          <button id="individualListingButton">Send Trade Request</button>
        </div>
      </div>
    </div>
  );
}

export default IndividualListing;
