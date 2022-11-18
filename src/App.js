import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Box width="1280px" margin="auto">
      <Navbar></Navbar>
      <Stack
        direction="row"
        spacing={0}
        justifyContent="space-between"
        sx={{ height: "86.5vh" }}
      >
        <Sidebar></Sidebar>
        <Main></Main>
        <Rightbar></Rightbar>
      </Stack>

      <Footer></Footer>
    </Box>
  );
}

export default App;
