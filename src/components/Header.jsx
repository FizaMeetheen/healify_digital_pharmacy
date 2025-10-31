import React from "react";
import { Link } from "react-router-dom";
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

const mainPages = [
  { name: "Home", path: "/home" },
  { name: "Medicines", path: "/products" },
  { name: "Lab Test", path: "/labtest" },
  { name: "Store Locator", path: "/store" },
  { name: "Contact Us", path: "/contact" },
];

const subPages = [
  "Beauty Care",
  "Sports Nutrition",
  "Nutrition Supplements",
  "Home Healthcare",
  "Mother & Baby Care",
  "Personal Care",
  "Medicines",
];

// Smooth continuous scrolling animation
const smoothScroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* --- TOP NAVBAR --- */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.05)",
          paddingY: 0.3,
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

            {/* Center: Main Navigation */}
            <Box
              sx={{
                display: "flex",
                gap: 4,
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
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

            {/* Right: Icons and Logout */}
            <Stack direction="row" spacing={2} alignItems="center">
              <IconButton component={Link} to="/cart">
                <ShoppingBagOutlinedIcon sx={{ color: "#0d3b66", fontSize: 26 }} />
              </IconButton>
              <Box display="flex" alignItems="center" gap={0.8}>
                <PersonOutlineIcon sx={{ color: "#0d3b66", fontSize: 22 }} />
                <Typography
                  component={Link}
                  to="/"
                  sx={{
                    color: "#00aaff",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  LOG OUT
                </Typography>
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
          position: "relative",
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
                gap: 6,
              }}
            >
              {subPages.map((item, index) => (
                <Typography
                  key={`${item}-${index}-${idx}`}
                  sx={{
                    color: "white",
                    fontSize: "15px",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": { textDecoration: "underline", color: "#66ccff" },
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
