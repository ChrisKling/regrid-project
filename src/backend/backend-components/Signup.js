import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { ArrowBack } from "@mui/icons-material";
import styled from "styled-components";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
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
    if (passwordRef.current.value === passwordConfirmRef.current.value) {
      try {
        setError("");
        setLoading(true);
        await signup(emailRef.current.value, passwordRef.current.value);
        setLoading(false);
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
    <>
      <Box flex={5} sx={{ background: "#d4df9e" }}>
        <Box padding="30px 0 0 0 ">
          <StyledButton variant="contained" href="/">
            <ArrowBack /> <Typography sx={{ color: "white" }}> Back</Typography>{" "}
          </StyledButton>
        </Box>

        <StyledH2>Sign Up</StyledH2>

        <StyledForm onSubmit={handleSubmit}>
          <label>Email address</label>
          <input type="text" ref={emailRef} required />
          <label>Password</label>
          <input type="password" ref={passwordRef} />
          <label>Confirm Password</label>
          <input type="password" ref={passwordConfirmRef} />
          <ButtonGroup aria-label="outlined primary button group">
            <Button
              variant="contained"
              className="sign-up-button"
              disabled={loading}
              type="submit"
            >
              Signup!
            </Button>
          </ButtonGroup>
        </StyledForm>
        {error && (
          <Typography pt={2} color="red">
            ERROR: {error}
          </Typography>
        )}
        <div>
          Already a member? <Link to="/login"> Log In </Link>
        </div>
      </Box>
    </>
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
