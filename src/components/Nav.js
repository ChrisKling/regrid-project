import { useProfile } from "../backend/contexts/ProfileContext.js";

import React, { useState } from "react";
import "./Nav.css";
import { NotificationsActive } from "@mui/icons-material";

function Nav() {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    userId: "",
    profileImg: null,
  });
  const [blankProfile, setBlankProfile] = useState({
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    userId: "",
    profileImg: null,
  });

  const { profileLogout } = useProfile();

  const [error, setError] = useState("");
  const { userProfile } = useProfile();

  const fullName = `${userProfile.firstName} ${userProfile.lastName}`;

  async function handleLogout() {
    setError("");
    try {
      setProfile(blankProfile);
      await profileLogout();
      console.log("should have logged out!");
      navigator("/login");
    } catch (error) {
      setError("logout Failed!");
    }
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
        {!userProfile && <button>Login</button>}
      </div>
    </>
  );
}

export default Nav;
