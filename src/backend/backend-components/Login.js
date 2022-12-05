import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import styled from "styled-components";
import { ArrowBack } from "@mui/icons-material";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigator("/profile");
    }
  }, [currentUser]);

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
    <Box flex={5} sx={{ background: "#d4df9e" }}>
      <Box padding="30px 0 0 0 ">
        <StyledButton variant="contained" href="/">
          <ArrowBack /> <Typography sx={{ color: "white" }}> Back</Typography>
        </StyledButton>

        <StyledH2>Login</StyledH2>

        <StyledForm onSubmit={handleSubmit}>
          <label>Email address</label>
          <input type="text" ref={emailRef} required />
          <label>Password</label>
          <input type="password" ref={passwordRef} />
          <ButtonGroup aria-label="outlined primary button group">
            <Button disabled={loading} type="submit" variant="contained">
              Login
            </Button>
          </ButtonGroup>
          {error && (
            <Typography pt={2} color="red">
              ERROR: {error}
            </Typography>
          )}
        </StyledForm>
        <div>
          Don't have an account? <Link to="/signup"> Sign Up </Link>
        </div>
      </Box>
    </Box>
  );
}

const StyledForm = styled.form`
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
    margin: 1rem 0;
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
  margin-left: 2rem;
  :hover {
    background: brown;
  }
`;
