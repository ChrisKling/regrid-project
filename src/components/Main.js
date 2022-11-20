import { Height, Login } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import { color } from "@mui/system";
import "./Card.css";

import hero from "../images/regridv3.png";
import Card from "./Card";
import { useNavigate } from "react-router-dom";




function Main() {
  
  
  const navigator = useNavigate();
  
  function navigateToPage(e, value)
  {
    navigator(value);
  }

  return (
    <Box flex={5} sx={{ background: "#d4df9e" }}>
      <img src={hero} alt="hero" width="100%" />
      <Box sx={{ padding: "10px 10px 0 10px" }}>
        <ButtonGroup 
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={(e, value)=>{navigateToPage(e, 'signup')}}
            sx={{ width: "360px", background: "lightblue", color: "darkblue" }}
          >
            Sign UP!
          </Button>
          <Button sx={{ width: "360px" }} 
            onClick={(e, value)=>{navigateToPage(e, 'login')}}>
            <Login />
            Login
          </Button>
        </ButtonGroup>
        <div className="cards">
          <Card />
          <Card />
        </div>
      </Box>
    </Box>
  );
}

export default Main;
