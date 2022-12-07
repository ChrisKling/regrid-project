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
            Without disconnecting from your local grid, ReGrid allows you to
            connect with peers who feel that any surplus items you have should
            be able to be traded without the hassle of having a currency middle
            man. Like putting a grid on a grid... get it?
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
