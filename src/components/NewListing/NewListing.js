import React, { useState } from "react";
import "./NewListing.css";
import "../Listings.css";
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
    <div className="listingsContainer newlisting">
      <button
        className="navigateBackButton"
        onClick={() => {
          navigator(-1);
        }}
      >
        <ArrowBack />
      </button>
      <div className="listingImgContainer">
        <div className="newlistingUploadImageText">
          <h2>Upload an image</h2>
          <p>
            You might get more traction by uploading an image of your product
          </p>
        </div>
        <form onSubmit={uploadFile}>
          <label for="inputTag" className="inputWrapper">
            <CameraAlt />
            <h3>Select Image</h3>
            <input type="file" id="inputTag" className="inputFile" />
          </label>

          <button className="loginButton" variant="outlined" type="submit">
            Upload
          </button>
          <div className="imgContainer">
            {!imgUrl && (
              <div className="loadingWrapperNewListing">
                <img
                  src="https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
            )}

            {imgUrl && (
              <img src={imgUrl} alt="myFile" className="profileImageUpload" />
            )}
          </div>
        </form>
        <div className="listingProductContainer">
          <form>
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewListing;
