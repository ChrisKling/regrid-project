import { Height, Login } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import { color } from "@mui/system";

import hero from "../images/regridv3.png";

function Main() {
  return (
    <Box flex={5} sx={{ background: "#d4df9e" }}>
      <img src={hero} alt="hero" width="100%" />
      <Box sx={{ padding: "60px 10px 0 10px" }}>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            sx={{ width: "360px", background: "lightblue", color: "darkblue" }}
          >
            Sign UP!
          </Button>
          <Button sx={{ width: "360px" }}>
            <Login />
            Login
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default Main;
