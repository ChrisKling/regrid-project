import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
  Stack,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { height } from "@mui/system";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
});

const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBox>
        <StyledTypography variant="h6">Add New Listing</StyledTypography>
        <StyledTooltip onClick={(e) => setOpen(true)} title="Add listing">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </StyledTooltip>
      </StyledBox>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={450}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            List a service
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.pexels.com/photos/1637884/pexels-photo-1637884.jpeg?cs=srgb&dl=pexels-susanne-jutzeler-sujufoto-1637884.jpg&fm=jpg&_gl=1*1mzn874*_ga*MTA0ODE5ODcwMS4xNjYwMTM5NTY4*_ga_8JE65Q40S6*MTY2Njg2NzgyNS4xNy4xLjE2NjY4Njc4MzIuMC4wLjA."
            />
            <Typography fontWeight={500} variant="span">
              @Username
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="Describe the item or service you wish to list here"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="error" />
            <PersonAdd color="success" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>List!</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

const StyledTooltip = styled(Tooltip)`
  background: #2a2d20;
  position: sticky;
  bottom: 20px;
  :hover {
    background: brown;
  }
`;
const StyledBox = styled(Box)`
  height: 400px;
  padding: 200px 0 0 0;
`;
const StyledTypography = styled(Typography)`
  width: 90px;
  margin: auto;
  padding-bottom: 10px;
  color: #2a2d20;
`;

export default Add;
