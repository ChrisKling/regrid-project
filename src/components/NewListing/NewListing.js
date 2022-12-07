import React, { useState } from "react";
import "./NewListing.css";
import "../Listings.css";
import "../IndividualListing.css";
import { useProfile } from "../../backend/contexts/ProfileContext";
import { useNavigate } from "react-router-dom";
import { ArrowBack, CameraAlt, PersonOutline } from "@mui/icons-material";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../backend/firebase/firebase";
import Nav from "../Nav";
import { useListings } from "../listingData";

function NewListing() {
  const { userProfile, addListing } = useProfile();
  const [error, setError] = useState();
  const [progressPercent, setProgressPercent] = useState(0);
  const [imgUrl, setImgUrl] = useState(null);
  const { getAllListings, setListings } = useListings();
  const [listing, setListing] = useState({
    listingTitle: "",
    location: "",
    productType: "other",
    expiryDate: "",
    productDescription: "",
    postUserId: "",
    img: null,
  });

  const uploadFile = (e) => {
    e.preventDefault();
    //const file = e.target[0]?.files[0];
    //if (!file) return;
    if (!e.target.files || e.target.files.length === 0) {
      return null;
    }
    const file = e.target.files[0];

    const storageDestinationRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageDestinationRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((donwloadURL) => {
          console.log("tried to upload the image!");
          setListing({ ...listing, img: donwloadURL });
          setImgUrl(donwloadURL);
        });
      }
    );
  };

  const navigator = useNavigate();

  async function submitListing(e) {
    e.preventDefault();
    //uploadFile(e);
    console.log("trying to submit.....");
    setError("");
    /*
    if (!listing.productType) {
      return setError("No product type was selected");
    } else if (!listing.listingTitle) {
      return setError("product title is missing");
    } else if (!listing.location) {
      return setError("Pickup location is missing");
    }
    */
    await addListing(listing);
    setListings([]);
    await getAllListings();
    navigator("/Listings");
  }
  return (
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

        <form onSubmit={submitListing} id="newListingForm">
          <div className="listingImgContainer">
            {!imgUrl && (
              <>
                <img
                  className="newListingImg"
                  src="https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className="newlistingUploadImageText">
                  <div className="textBoxField1">
                    <h3>Choose an Image for your listing</h3>
                    <p>
                      You might get more traction by uploading an image of your
                      product
                    </p>
                  </div>

                  <label for="inputTag" className="inputWrapper">
                    <CameraAlt />
                    <h3>Select Image</h3>
                    <input
                      type="file"
                      id="inputTag"
                      className="inputFile"
                      onChange={uploadFile}
                    />
                  </label>

                  {/* <button
                  
                  className="loginButton"
                  variant="outlined"
                  type="submit"
                >
                  Upload
                </button> */}
                </div>
              </>
            )}

            {imgUrl && (
              <img
                src={imgUrl}
                alt="myFile"
                className="profileImageUpload newListingImg"
              />
            )}
          </div>
          <div className="listingProductContainer" id="listingProductContainer">
            <input
              type="text"
              placeholder="Listing Title"
              id="inputTitle"
              onChange={(e) => {
                setListing({ ...listing, listingTitle: e.target.value });
                console.log(listing.listingTitle);
              }}
            />
            <label id="newListingLabel">Location:</label>
            <input
              type="text"
              placeholder="Location"
              id="inputLocation"
              onChange={(e) => {
                setListing({ ...listing, location: e.target.value });
                console.log(listing.location);
              }}
            />
            <label for="productType" id="newListingLabel">
              Product Type:
            </label>
            <select
              id="productType"
              name="productType"
              onChange={(e) => {
                setListing({ ...listing, productType: e.target.value });
                console.log(listing.productType);
              }}
            >
              <label>Product Type</label>

              <option value="other">other</option>
              <option value="vegetable">Vegetable</option>
              <option value="fruit">Fruit</option>
            </select>
            <label id="newListingLabel">Expiry date:</label>
            <input
              type="date"
              onChange={(e) => {
                setListing({ ...listing, expiryDate: e.target.value });
                console.log(listing.expiryDate);
              }}
            />
            <div className="textareaContainer">
              <label id="newListingLabel">Product description:</label>
              <textarea
                placeholder="What do you have to say about the product?"
                onChange={(e) => {
                  setListing({
                    ...listing,
                    productDescription: e.target.value,
                  });
                  console.log(listing.productDescription);
                }}
              ></textarea>
            </div>
            <div className="submitFormButtonContainer">
              <input
                type="submit"
                value="Create Listing!"
                id="submitFormButton"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewListing;
