import { Box } from "@mui/system";
import React from "react";
import { Toolbar } from "@mui/material";
import styled from "@emotion/styled";
import { Copyright } from "@mui/icons-material";

function Footer() {
  const StyledFooter = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#6b654b",
    color: "grey",
  });

  return (
    <Box>
      <StyledFooter>
        <Box sx={{ textAlign: "center" }}>
          <h3 sx={{ textAlign: "center" }}>
            <Copyright />
            ReGrid 2022
          </h3>
        </Box>
      </StyledFooter>
    </Box>
  );
}

export default Footer;
