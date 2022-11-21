import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";

export default function Login() {
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
      setError("Account creation failed!");
      console.log(err);
    }
    setLoading(false);
  }
  return (
    <>
      <Box flex={5} sx={{ background: "#d4df9e" }}>
        {error && <p>ERROR: {error} </p>}
        <Box>
          <Link to="/"> Back To Home </Link>
        </Box>
        <br />
        <h2>Login</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <label>Email address</label>
          <br />
          <input type="text" ref={emailRef} required />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input type="password" ref={passwordRef} />
          <br />
          <br />
          <br />
          <br />
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button disabled={loading} className="w-100" type="submit">
              Login
            </Button>
          </ButtonGroup>
        </form>
        <div>
          <br />
          <br />
          <br />
          Don't have an account? <Link to="/signup"> Sign Up </Link>
        </div>
      </Box>
    </>
  );
}
