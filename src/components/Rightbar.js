import { Box } from "@mui/material";

function Rightbar() {
  return (
    <Box flex={1.5} sx={{ display: { xs: "none", sm: "block" } }}>
      <h1>Rightbar</h1>
    </Box>
  );
}

export default Rightbar;
