import { useProfile } from "../backend/contexts/ProfileContext.js";

import React, { useState } from "react";
import "./Nav.css";
import { NotificationsActive } from "@mui/icons-material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [profile, setProfile] = useState(null);
  const [blankProfile, setBlankProfile] = useState(null);
  const navigator = useNavigate();
  const { profileLogout } = useProfile();

  const [error, setError] = useState("");
  const [fullName, setFullName] = useState(null);
  const { userProfile } = useProfile();

  useEffect(() => {
    if (userProfile) {
      setFullName(`${userProfile.firstName} ${userProfile.lastName}`);
    }
  }, [userProfile]);

  async function handleLogout() {
    setError("");
    try {
      setProfile(blankProfile);
      await profileLogout();
      console.log("should have logged out!");
    } catch (error) {
      setError("logout Failed!");
    }
  }
  function navigateToPage(e, value) {
    navigator(value);
  }

  return (
    <>
      <div className="navBox">
        {userProfile && (
          <div>
            <h1>{fullName}</h1>
            <button variant="link" onClick={handleLogout} className="navLogout">
              <p>Logout?</p>
            </button>
            <div className="navImg">
              <img
                src={userProfile.profileImg}
                alt="myFile"
                className="profileImageUpload"
              />
            </div>
          </div>
        )}
        {!userProfile && (
          <div className="navButtons">
            <button
              className="loginButton"
              onClick={(e, value) => {
                navigateToPage(e, "../signup");
              }}
            >
              Sign Up
            </button>
            <button
              className="loginButton"
              onClick={(e, value) => {
                navigateToPage(e, "../login");
              }}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Nav;
