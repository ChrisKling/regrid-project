import { useProfile } from "../contexts/ProfileContext";
import { useAuth, logout } from "../contexts/AuthContext";
import { storage } from "../firebase/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormGroup, Typography } from "@mui/material";
import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import styled from "styled-components";
import { Logout } from "@mui/icons-material";

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
    <Box flex={5} sx={{ background: "#d4df9e" }}>
      <Box padding="30px 0 0 0 ">
        <StyledButton variant="link" onClick={handleLogout}>
          <Logout />
          <Typography sx={{ color: "white" }}> Log Out</Typography>
        </StyledButton>
      </Box>

      <Box sx={{ background: "#d4df9e", padding: "75px" }}>
        <section>
          <div>
            <StyledH2 className="text-center mb-4">
              Set Up Profile Details
            </StyledH2>
            {error && <p> {error} </p>}
            <form onSubmit={handleSubmit}>
              <StyledFormGroup>
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
                <Button disabled={loading} className="w-100" type="submit">
                  Create Profile
                </Button>
              </StyledFormGroup>
            </form>
          </div>
        </section>
      </Box>
    </Box>
  );
}

const StyledFormGroup = styled(FormGroup)`
  background: #eef2d8;
  max-width: 300px;
  margin: 2rem;
  border: 2px solid white;
  padding: 2rem;
  border-radius: 15px;
  label {
    display: block;
  }
  input {
    font-size: 16px;
    display: block;
    width: 100%;
    border-radius: 15px;
    border: none;
    padding: 8px;
  }
  Button {
    background: #2a2d20;

    color: #eef2d8;
    border: 0;
    margin: 1rem 0 0 0;
    width: 310px;
  }
  Button:hover {
    background: brown;
    color: #d4df9e;
  }
  label {
    font-size: 16px;
    font-weight: 600;
    margin: 5px 0 5px 0;
  }
`;
const StyledH2 = styled.h2`
  padding: 1rem 0 0 2rem;
  color: #2a2d20;
`;
const StyledButton = styled(Button)`
  background: #2a2d20;
  width: 200px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  margin-left: 2rem;
  :hover {
    background: brown;
  }
`;
