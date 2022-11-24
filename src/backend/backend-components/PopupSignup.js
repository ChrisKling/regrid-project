import { ArrowBack } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function PopupSignup() {
  function navigateToPage(e, value) {
    navigator(value);
  }
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();

  async function handleSubmit(e) {
    console.log("form submitted");
    e.preventDefault();
    if (passwordRef.current.value === passwordConfirmRef.current.value) {
      try {
        setError("");
        setLoading(true);
        await signup(emailRef.current.value, passwordRef.current.value);
        navigator("/profile");
      } catch (err) {
        setError("Account creation failed!");
        console.log(err);
      }
    } else {
      setError("Passwords do not match!");
    }
    setLoading(false);
  }
  return (
    <div className="cardContainer">
      <div className="loginBox">
        <button
          className="navigateBackButton"
          onClick={(e, value) => {
            navigateToPage(e, "/");
          }}
        >
          <ArrowBack />
        </button>
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <label>Email address</label>
          <input type="text" ref={emailRef} required />
          <label>Password</label>
          <input type="password" ref={passwordRef} />
          <label>Confirm Password</label>
          <input type="password" ref={passwordConfirmRef} />

          <button className="loginButton" disabled={loading} type="submit">
            Signup!
          </button>
        </form>
        {error && <p>ERROR: {error}</p>}
        <div>
          Already a member? <Link to="/login"> Log In </Link>
        </div>
      </div>
    </div>
  );
}

export default PopupSignup;
