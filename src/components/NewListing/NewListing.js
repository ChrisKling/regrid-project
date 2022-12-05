import React, { useState } from "react";
import "./NewListing.css";
import "../Listings.css";
import "../IndividualListing.css";
import { useNavigate } from "react-router-dom";
import { ArrowBack, CameraAlt, PersonOutline } from "@mui/icons-material";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../backend/firebase/firebase";

function NewListing() {
  const [progressPercent, setProgressPercent] = useState(0);
  const [imgUrl, setImgUrl] = useState(null);

  const uploadFile = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    if (!file) return;

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
          setImgUrl(donwloadURL);
        });
      }
    );
  };

  const navigator = useNavigate();
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

      <form onSubmit={uploadFile} id="newListingForm">
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
                  <input type="file" id="inputTag" className="inputFile" />
                </label>

                <button
                  className="loginButton"
                  variant="outlined"
                  type="submit"
                >
                  Upload
                </button>
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
          <input type="text" placeholder="Listing Title" id="inputTitle" />
          <label id="newListingLabel">Location:</label>
          <input type="text" placeholder="Location" id="inputLocation" />
          <label for="productType" id="newListingLabel">
            Product Type:
          </label>
          <select id="productType" name="productType">
            <label>Product Type</label>

            <option value="other">other</option>
            <option value="vegetable">Vegetable</option>
            <option value="fruit">Fruit</option>
          </select>
          <label id="newListingLabel">Expiry date:</label>
          <input type="date" />
          <div className="textareaContainer">
            <label id="newListingLabel">Product description:</label>
            <textarea placeholder="What do you have to say about the product?"></textarea>
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
  );
}

export default NewListing;
