import { useProfile } from "../backend/contexts/ProfileContext.js";

import React from "react";
import "./Nav.css";
import { NotificationsActive } from "@mui/icons-material";

function Nav() {
  //const { userProfile } = useProfile();

  //const fullName = `${userProfile.firstName} ${userProfile.lastName}`;

  return (
    <div className="navBox">
      <h1>Danni Malka</h1>
      <p>Logged in</p>
      <p>
        <NotificationsActive /> 1 new notification
      </p>
      <button>Personal Area</button>
    </div>
  );
}

export default Nav;
