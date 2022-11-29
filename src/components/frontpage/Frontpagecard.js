import React from "react";
import { useNavigate } from "react-router-dom";
import "./Frontpagecard.css";

function Frontpagecard() {
  const navigator = useNavigate();

  function navigateToPage(e, value) {
    navigator(value);
  }
  return (
    <div className="cardContainer">
      <div className="boxBorder"></div>
      <div className="loginBox">
        <h2>Welcome to the Grid</h2>
        <div className="loginText">
          <p>
            Have you ever had a dream that, that, um, that you had, uh, that you
            had to, you could, you do, you wit, you wa, you could do so, you do
            you could, you want, you wanted him to do you so much you could do
            anything?
          </p>
        </div>
        <div className="buttonContainer">
          <button
            className="loginButton"
            onClick={(e, value) => {
              navigateToPage(e, "Listings");
            }}
          >
            Browse
          </button>
          <button
            className="loginButton"
            onClick={(e, value) => {
              navigateToPage(e, "signup");
            }}
          >
            Sign Up
          </button>
          <button
            className="loginButton"
            onClick={(e, value) => {
              navigateToPage(e, "login");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Frontpagecard;
