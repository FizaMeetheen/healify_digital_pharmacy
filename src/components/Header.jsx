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
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { keyframes } from "@mui/system";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

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

const Header = ({ search }) => {
  const res = JSON.parse(localStorage.getItem("currentUser"));
  const currentUser = res ? res.name : null;

  const settings = [`${currentUser}`, "Logout"];
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          py: 0.6,
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
                    width: "200px",
                    height: "auto",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </Box>

            {/* Center: Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4,
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                pr: 4,
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

              {search && (
                <input
                  type="text"
                  placeholder="SEARCH"
                  className="border rounded-2xl border-sky-700 p-2 text-blue-700 w-44"
                />
              )}
            </Box>

            {/* Right: Icons */}
            <Stack direction="row" spacing={2} alignItems="center">
              {/* Mobile menu button */}
              <IconButton
                sx={{ display: { xs: "flex", md: "none" } }}
                onClick={() => setMobileOpen(true)}
              >
                <MenuIcon sx={{ color: "#0d3b66", fontSize: 28 }} />
              </IconButton>

              {/* Cart */}
              <IconButton component={Link} to="/cart">
                <ShoppingBagOutlinedIcon sx={{ color: "#0d3b66", fontSize: 26 }} />
              </IconButton>

              {/* User Menu */}
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
                    <Typography sx={{ textAlign: "center" }}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box sx={{ width: 260, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, color: "#0d3b66" }}>
            Menu
          </Typography>
          {mainPages.map((page) => (
            <MenuItem
              key={page.name}
              component={Link}
              to={page.path}
              onClick={() => setMobileOpen(false)}
            >
              {page.name}
            </MenuItem>
          ))}
          <Divider sx={{ my: 1 }} />
          <Typography variant="subtitle1" sx={{ color: "#0d3b66", mb: 1 }}>
            Categories
          </Typography>
          {subPages.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                handleCategory(item);
                setMobileOpen(false);
              }}
            >
              {item}
            </MenuItem>
          ))}
        </Box>
      </Drawer>

      {/* Scrolling category bar (Desktop only) */}
      <Box
        sx={{
          backgroundColor: "#001b73",
          overflow: "hidden",
          whiteSpace: "nowrap",
          py: 1.2,
          display: { xs: "none", md: "block" },
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
