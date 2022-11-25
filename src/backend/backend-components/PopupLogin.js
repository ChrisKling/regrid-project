import { ArrowBack } from "@mui/icons-material";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./PopupLogin.css";

function PopupLogin() {
  function navigateToPage(e, value) {
    navigator(value);
  }
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();

  async function handleSubmit(e) {
    console.log("form submitted");
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigator("/profile");
    } catch (err) {
      setError("Wrong email or password!");
      console.log(err);
    }
    setLoading(false);
  }
  return (
    <div className="cardContainer">
      <div className="boxBorder"></div>
      <div className="loginBox">
        <button
          className="navigateBackButton"
          onClick={(e, value) => {
            navigateToPage(e, "/");
          }}
        >
          <ArrowBack />
        </button>

        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <label>Email address</label>
          <input type="text" ref={emailRef} required />
          <label>Password</label>
          <input type="password" ref={passwordRef} className="inputPadding" />

          <button className="loginButton" disabled={loading} type="submit">
            Login
          </button>

          {error && (
            <p pt={2} color="red">
              ERROR: {error}
            </p>
          )}
        </form>
        <div className="bottomText">
          Don't have an account? <Link to="/signup"> Sign Up </Link>
        </div>
      </div>
    </div>
  );
}

export default PopupLogin;
