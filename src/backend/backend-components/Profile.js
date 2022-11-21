import { useProfile } from "../contexts/ProfileContext";
import { useAuth, logout } from "../contexts/AuthContext";
import { storage } from "../firebase/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormGroup } from "@mui/material";
import { Box, Button, ButtonGroup, Grid } from "@mui/material";

export default function Profile() {
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
      <Box flex={5} sx={{ background: "#d4df9e" }}>
        <Box>
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
                <input type="file" />
                <Button variant="outlined" type="submit">
                  Upload
                </Button>
              </form>
            </div>
            <div>
              {!imgUrl && (
                <div>
                  <div style={{ width: `${progressPercent}` }}>
                    {progressPercent}%
                  </div>
                </div>
              )}

              {imgUrl && (
                <img src={imgUrl} alt="myFile" style={{ width: "128px" }} />
              )}
            </div>
          </section>
          <Box p="30px 0 0 0">
            <Button variant="link" onClick={handleLogout} sx={{ color: "red" }}>
              {" "}
              Log Out{" "}
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ background: "#d4df9e" }}>
        <Button variant="link" onClick={handleLogout}>
          {" "}
          Log Out{" "}
        </Button>
      </Box>
      <Box sx={{ background: "#d4df9e", padding: "75px" }}>
        <section>
          <div>
            <h2 className="text-center mb-4">Set Up Profile Details</h2>
            {error && <p> {error} </p>}
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <label>Email</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setProfile({ ...profile, email: e.target.value });
                  }}
                />
              </FormGroup>
              <FormGroup>
                <label>First Name</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setProfile({ ...profile, firstName: e.target.value });
                  }}
                />
              </FormGroup>
              <FormGroup>
                <label>Last Name</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setProfile({ ...profile, lastName: e.target.value });
                  }}
                />
              </FormGroup>
              <FormGroup>
                <label>Location</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setProfile({ ...profile, location: e.target.value });
                  }}
                />
              </FormGroup>
              <br />
              <Button disabled={loading} className="w-100" type="submit">
                Create Profile
              </Button>
            </form>
          </div>
        </section>
      </Box>
    </>
  );
}
