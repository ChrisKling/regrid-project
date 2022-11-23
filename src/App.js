import { Box, Stack } from "@mui/material";

import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//contexts
import { AuthProvider, useAuth } from "./backend/contexts/AuthContext";
import Signup from "./backend/backend-components/Signup";
import { ProfileProvider } from "./backend/contexts/ProfileContext";
import Profile from "./backend/backend-components/Profile";
import Login from "./backend/backend-components/Login";
import Listings from "./components/Listings";

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
        <BrowserRouter>
          <Sidebar></Sidebar>
          <AuthProvider>
            <ProfileProvider>
              <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="signup" element={<Signup />} />
                <Route path="profile" element={<Profile />} />
                <Route path="login" element={<Login />} />
                <Route path="Listings" element={<Listings />} />
              </Routes>
            </ProfileProvider>
          </AuthProvider>
        </BrowserRouter>
        {/* <Main></Main>  */}

        <Rightbar></Rightbar>
      </Stack>

      <Footer></Footer>
    </Box>
  );
}

export default App;
