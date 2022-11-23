import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import TradeTable from "./TradeTable";
//disable buttons for now
function Listings() {
  return (
    <Box flex={5} sx={{ background: "#f8faef" }}>
      <ButtonsBox>
        <StyledGrid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <Button>Fruits & Vegetables</Button>
          </Grid>
          <Grid item xs={6}>
            <Button>Dairy & Eggs</Button>
          </Grid>
          <Grid item xs={6}>
            <Button>Meat & Fish</Button>
          </Grid>
          <Grid item xs={6}>
            <Button>Other</Button>
          </Grid>
        </StyledGrid>
        <StyledButtonBox>
          <Button disabled>New Listing</Button>
        </StyledButtonBox>
      </ButtonsBox>

      <TradeTable />
    </Box>
  );
}

const StyledGrid = styled(Grid)`
  width: 450px;
  padding: 2rem;
  Button {
    width: 100%;
    color: #2a2d20;
    border: 0.5px solid #2a2d20;
  }
  Button:hover {
    background: #eef2d8;
  }
  .MuiGrid-root {
    padding: 8px 0 0 8px;
  }
`;
const StyledButtonBox = styled(Box)`
  display: flex;
  width: 250px;
  height: 80px;
  position: relative;
  padding: 34px 20px 0px 10px;
  Button {
    width: 100%;
    border-radius: 40px;
    color: #2a2d20;
    border: 0.5px solid #2a2d20;
  }
  Button:hover {
    background: #eef2d8;
  }
`;
const ButtonsBox = styled(Box)`
  display: flex;
`;
const StyledH5 = styled(Typography)`
  align-items: center;
  text-align: center;
  padding-bottom: 15px;
`;

export default Listings;
