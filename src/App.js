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
import PrivateRoute from "./backend/backend-components/PrivateRoute";
import NewListing from "./components/NewListing/NewListing";
import IndividualListing from "./components/IndividualListing";

import Home from "./components/chat/Home";
import { ListingsProvider } from "./components/listingData";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <AuthProvider>
          <ListingsProvider>
            <ProfileProvider>
              <Routes>
                <Route exact path="/" element={<Frontpage />} />
                <Route path="signup" element={<PopupSignup />} />
                <Route exact path="/" element={<PrivateRoute />}>
                  <Route exact path="profile" element={<Profile />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="Listings" element={<Listings />} />
                <Route path="NewListing" element={<NewListing />} />
                <Route
                  path="/IndividualListing/:id"
                  element={<IndividualListing />}
                />
                <Route path="Home" element={<Home />} />
              </Routes>
            </ProfileProvider>
          </ListingsProvider>
        </AuthProvider>
      </BrowserRouter>
      <Background />
    </Box>
  );
}

export default App;
