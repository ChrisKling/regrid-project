import { Box } from "@mui/material";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//contexts
import { AuthProvider, useAuth } from "./backend/contexts/AuthContext";

import { ProfileProvider } from "./backend/contexts/ProfileContext";
import Profile from "./backend/backend-components/Profile";
import Login from "./backend/backend-components/PopupLogin";
import Listings from "./components/Listings";
import Background from "./components/frontpage/Background";
import Frontpage from "./components/frontpage/Frontpage";
import PopupSignup from "./backend/backend-components/PopupSignup";
import NewListing from "./components/NewListing/NewListing";
import IndividualListing from "./components/IndividualListing";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <AuthProvider>
          <ProfileProvider>
            <Routes>
              <Route exact path="/" element={<Frontpage />} />
              <Route path="signup" element={<PopupSignup />} />
              <Route path="profile" element={<Profile />} />
              <Route path="login" element={<Login />} />
              <Route path="Listings" element={<Listings />} />
              <Route path="NewListing" element={<NewListing />} />
              <Route
                path="/IndividualListing/:id"
                element={<IndividualListing />}
              />
            </Routes>
          </ProfileProvider>
        </AuthProvider>
      </BrowserRouter>
      <Background />
    </Box>
  );
}

export default App;
