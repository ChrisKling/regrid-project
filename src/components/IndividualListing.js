import React, { useEffect, useState } from "react";
import "./IndividualListing.css";
import CardData from "./CardData";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import Nav from "./Nav";
import { useListings } from "./listingData";

function IndividualListing(props) {
  const navigator = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { listings, getAllListings } = useListings();

  useEffect(() => {
    if (product) {
      setLoading(false);
      console.log(product.id);
      console.log("product is:");
      console.log(product);
    }
  }, [product]);

  useEffect(() => {
    console.log("switched to individual Listing:");
    console.log(listings);
    console.log("product id is:");
    console.log(id);
    console.log("in ID is:");
    //listings.map((item) => console.log(item));
    setProduct({ ...listings.find((product) => product.id === parseInt(id)) });
  }, [id]);

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <>
      {product && (
        <div>
          <Nav />
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
                <h1>{product.listingTitle}</h1>
              </div>
              <div className="listingInfoContainer">
                <h2>Listing Info</h2>
                {/* <p>Seller ID: {product.sellerId}</p> */}
                <p>Product ID: {product.id}</p>
                <p>Expiry Date: {product.expiryDate}</p>
                <p>Location:{product.location}</p>
              </div>
              <div className="listingDescriptionContainer">
                <h2>Here's what the Seller had to say:</h2>
                <p>{product.productDescription}</p>
              </div>
              <div className="listingButtonContainer">
                <button id="individualListingButton">Send Trade Request</button>
              </div>
              <div>
                <p>
                  By accepting a trade request on the ReGrid website, you agree
                  to grant us a non-transferable option to be on the naughty
                  list for the rest of your life. Should we wish to exercise
                  this option, you agree to be put on Santa’s naughty list. We
                  reserve the right to serve such notice, however, we can accept
                  no liability for any loss or damage caused by such an act. If
                  you a) do not believe in Christmas, b) are already on the
                  naughty list, or c) do not wish to grant us such a license,
                  please send an email to the address below to nullify this
                  sub-clause and proceed with your trade. Additionally we
                  reserve the right to confiscating your first born child and
                  renaming it if needs be.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default IndividualListing;
