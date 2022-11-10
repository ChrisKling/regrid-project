import { Box } from "@mui/material";

function Sidebar() {
  return (
    <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <h1>Sidebar</h1>
    </Box>
  );
}

export default Sidebar;
