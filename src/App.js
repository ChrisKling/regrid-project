import { Box } from "@mui/material";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//contexts
import { AuthProvider, useAuth } from "./backend/contexts/AuthContext";
import Signup from "./backend/backend-components/Signup";
import { ProfileProvider } from "./backend/contexts/ProfileContext";
import Profile from "./backend/backend-components/Profile";
import Login from "./backend/backend-components/PopupLogin";
import Listings from "./components/Listings";
import Background from "./components/frontpage/Background";
import Frontpage from "./components/frontpage/Frontpage";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <AuthProvider>
          <ProfileProvider>
            <Routes>
              <Route exact path="/" element={<Frontpage />} />
              <Route path="signup" element={<Signup />} />
              <Route path="profile" element={<Profile />} />
              <Route path="login" element={<Login />} />
              <Route path="Listings" element={<Listings />} />
            </Routes>
          </ProfileProvider>
        </AuthProvider>
      </BrowserRouter>
      <Background />
    </Box>
  );
}

export default App;
