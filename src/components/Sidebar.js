import {
  AccessibleForward,
  AccountBox,
  CatchingPokemon,
  Home,
  Info,
  Mail,
  Newspaper,
  PeopleAlt,
  Settings,
  ShoppingCartCheckout,
  Storefront,
  SupportAgent,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Add from "./Add";

function Sidebar() {
  const navigator = useNavigate();

  function navigateToPage(e, value) {
    navigator(value);
  }

  return (
    <Box
      color="#12100e"
      backgroundColor="#d4df9e"
      flex={1.5}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        textAlign="center"
        justifyContent="center"
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>

              <ListItemText
                primary="Listings"
                onClick={(e, value) => {
                  navigateToPage(e, "Listings");
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <PeopleAlt />
              </ListItemIcon>
              <ListItemText primary="Nearby Users" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <SupportAgent />
              </ListItemIcon>
              <ListItemText primary="Support" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="Mail" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Newspaper />
              </ListItemIcon>
              <ListItemText primary="News" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile settings" />
            </ListItemButton>
          </ListItem>
          <Add />
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
