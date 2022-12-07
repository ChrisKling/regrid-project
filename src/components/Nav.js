import { useProfile } from "../backend/contexts/ProfileContext.js";

import React, { useState } from "react";
import "./Nav.css";
import { NotificationsActive } from "@mui/icons-material";
import { useEffect } from "react";

function Nav() {
  const [profile, setProfile] = useState(null);
  const [blankProfile, setBlankProfile] = useState(null);

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
      navigator("/login");
    } catch (error) {
      setError("logout Failed!");
    }
  }
  console.log(userProfile, "hi");
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
