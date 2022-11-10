import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Box>
      <Navbar></Navbar>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar></Sidebar>
        <Main></Main>
        <Rightbar></Rightbar>
      </Stack>
      <Footer></Footer>
    </Box>
  );
}

export default App;
