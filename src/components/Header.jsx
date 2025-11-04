import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import logo from "../assets/logo.png";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { keyframes } from "@mui/system";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const mainPages = [
  { name: "Home", path: "/home" },
  { name: "Medicines", path: "/products" },
  { name: "Lab Test", path: "/labtest" },
  { name: "Store Locator", path: "/storelocator" },
  { name: "Contact Us", path: "/contact" },
];

const subPages = [
  "Elderly Care",
  "Cold and Cough Products",
  "Nutrition Supplements",
  "Eye Care Products",
  "Ayurvedic Products",
  "Health Care Devices",
  "Mother and Baby Care",
  "Personal Care",
];

// Smooth continuous scrolling animation
const smoothScroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const Header = () => {
  const res = JSON.parse(localStorage.getItem("currentUser"));
  const currentUser = res ? res.name : null;

  const settings = [`${currentUser}`, "Logout"];
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const Navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    Navigate("/");
  };

  const handleCategory = (name) => {
    Navigate("/category", { state: { category: name } });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.05)",
          paddingY: 0.6,
          paddingRight: 0.2,
          zIndex: 1200,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Left: Logo */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link to="/home">
                <img
                  src={logo}
                  alt="Healify Logo"
                  style={{
                    width: "220px",
                    height: "auto",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </Box>

            {/* Center: Main Navigation */}
            <Box
              sx={{
                display: "flex",
                gap: 4,
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                paddingRight: 8,
              }}
            >
              {mainPages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  sx={{
                    color: "black",
                    fontWeight: 500,
                    fontSize: "15px",
                    textTransform: "none",
                    "&:hover": {
                      color: "#0077b6",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            {/* Right: Icons */}
            <Stack direction="row" spacing={2} alignItems="center">
              <IconButton component={Link} to="/cart">
                <ShoppingBagOutlinedIcon sx={{ color: "#0d3b66", fontSize: 26 }} />
              </IconButton>
              <Box display="flex" alignItems="center" gap={0.8}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <PersonOutlineIcon sx={{ color: "#0d3b66", fontSize: 28 }} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => {
                        handleCloseUserMenu();
                        if (setting === "Logout") handleLogout();
                      }}
                    >
                      <Typography sx={{ textAlign: "center" }}>
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* --- SCROLLING NAVBAR --- */}
      <Box
        sx={{
          backgroundColor: "#001b73",
          overflow: "hidden",
          whiteSpace: "nowrap",
          py: 1.2,
          position: "static",
          top: "70px", 
          left: 0,
          width: "100%",
          zIndex: 1100, 
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            animation: `${smoothScroll} 55s linear infinite`,
            width: "200%",
          }}
        >
          {[...Array(2)].map((_, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flex: "1 0 auto",
                gap: 10,
              }}
            >
              {subPages.map((item, index) => (
                <Typography
                  key={`${item}-${index}-${idx}`}
                  onClick={() => handleCategory(item)}
                  sx={{
                    color: "white",
                    fontSize: "15px",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      textDecoration: "underline",
                      color: "#66ccff",
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
