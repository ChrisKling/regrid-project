import { useProfile } from "../contexts/ProfileContext";
import { useAuth, logout } from "../contexts/AuthContext";
import { storage } from "../firebase/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  ArrowForward,
  CameraAlt,
  Logout,
  PersonOutline,
} from "@mui/icons-material";
import "./Profile.css";

export default function Profile() {
  function navigateToPage(e, value) {
    navigator(value);
  }
  const [imgUrl, setImgUrl] = useState(null);
  const [imgRef, setImgRef] = useState(null);
  const [progressPercent, setProgressPercent] = useState(0);

  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const [profileValid, setProfileIsValid] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    userId: "",
  });

  const { addProfile, getUserProfile, userProfile } = useProfile();
  const navigator = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      navigator("/login");
    }
    setProfile({ ...profile, userId: currentUser.uid });
  }, []);

  useEffect(() => {
    if (profileValid) {
      getUserProfile(currentUser.uid);
    }
  }, [profileValid]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await addProfile(profile, currentUser.uid);
      setProfileIsValid(true);

      //TODO: getting and setting an image/file reference requires us to get it's download link
      //const myRef = ref(storage, "files/ReGrid_00.png");
      //getDownloadURL(myRef).then((url) =>{setImgRef(url);})
    } catch (err) {
      setError("Profile update failed");
      console.log(err);
      await console.log(error);
    }

    setLoading(false);
  }
  //

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigator("/login");
    } catch (error) {
      setError("logout Failed!");
    }
  }

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

  if (userProfile) {
    return (
      <div className="cardContainer">
        <div className="loginBox">
          <section>
            <div>
              <h2> Welcome, {userProfile.firstName} </h2>
            </div>
            <div>
              <h4>Location: {userProfile.location}</h4>
            </div>
            <div>
              <h4>Email:</h4> <p>{userProfile.email}</p>
            </div>
            <div>
              <img
                src={imgRef}
                alt="myIMG"
                style={{ maxWidth: "128px", maxHeight: "128px" }}
              />
            </div>
          </section>

          <section>
            <div>
              <form onSubmit={uploadFile}>
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
                <div className="imgContainer">
                  {!imgUrl && (
                    <div className="loadingWrapper">
                      <PersonOutline />
                      <div style={{ width: `${progressPercent}` }}>
                        {progressPercent}%
                      </div>
                    </div>
                  )}

                  {imgUrl && (
                    <img
                      src={imgUrl}
                      alt="myFile"
                      className="profileImageUpload"
                    />
                  )}
                </div>
              </form>
            </div>
          </section>
          <div>
            <button
              variant="link"
              onClick={handleLogout}
              className="navigateBackButton"
            >
              <Logout />
            </button>
            <button
              className="browseButton"
              onClick={(e, value) => {
                navigateToPage(e, "Listings");
              }}
            >
              Browse <ArrowForward />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cardContainer">
      <div className="loginBox">
        <button
          variant="link"
          onClick={handleLogout}
          className="navigateBackButton"
        >
          <Logout />
        </button>

        <div>
          <section>
            <div>
              <h2>Set Up Profile Details</h2>
              {error && <p> {error} </p>}
              <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setProfile({ ...profile, email: e.target.value });
                  }}
                />
                <label>First Name</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setProfile({ ...profile, firstName: e.target.value });
                  }}
                />
                <label>Last Name</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setProfile({ ...profile, lastName: e.target.value });
                  }}
                />
                <label>Location</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setProfile({ ...profile, location: e.target.value });
                  }}
                />
                <button
                  disabled={loading}
                  type="submit"
                  className="loginButton"
                >
                  Create Profile
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
