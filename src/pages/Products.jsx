import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import logo from "../assets/logo.png";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Masonry from "@mui/lab/Masonry";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { getMedicineAPI } from "../service/allAPI";
import { Link, useNavigate } from "react-router-dom";
import { keyframes } from "@mui/system";

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

// Animation
const smoothScroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

function Products() {
  const res = JSON.parse(localStorage.getItem("currentUser"));
  const currentUser = res ? res.name : null;

  const settings = [`${currentUser}`, "Logout"];
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const handleCategory = (name) => {
    navigate("/category", { state: { category: name } });
  };

  const [medicines, setmedicines] = useState([]);
  const [selectedCategory, setselectedCategory] = useState(null);
  const [SearchData, setSearchData] = useState("");

  const categories = [
    "Personal Care",
    "Nutrition Supplements",
    "Ayurvedic Products",
    "Mother and Baby Care",
    "Eye Care Products",
    "Cold and Cough Products",
    "Health Care Devices",
    "Elderly Care",
  ];

  const getAllMedicines = async () => {
    try {
      const result = await getMedicineAPI();
      if (result.status >= 200 && result.status < 300) {
        setmedicines(result.data);
      }
    } catch (err) {
      console.error("error fetching medicines", err);
    }
  };

  useEffect(() => {
    getAllMedicines();
  }, []);

  const StyledAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: "#fff",
    color: (theme.vars || theme).palette.text.secondary,
  }));

  const filteredMedicines = medicines
    ?.filter((item) =>
      selectedCategory && selectedCategory !== "ALL"
        ? item.category === selectedCategory
        : true
    )
    ?.filter((item) =>
      item.name.toLowerCase().includes(SearchData.toLowerCase())
    );

  const handleProductClick = (id) => {
    navigate(`/products/${id}/productview`);
  };

  return (
    <>
      
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: "white", boxShadow: "0px 2px 6px rgba(0,0,0,0.05)" }}>
          <Container maxWidth="xl">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Link to="/home">
                <img src={logo} alt="Healify" style={{ width: "200px" }} />
              </Link>

              
              <Box sx={{ display: "flex", gap: 3 }}>
                {mainPages.map((page) => (
                  <Button key={page.name} component={Link} to={page.path} sx={{ color: "black" }}>
                    {page.name}
                  </Button>
                ))}
                <input
                  onChange={(e) => setSearchData(e.target.value)}
                  type="text"
                  placeholder="Search"
                  className="border rounded-2xl border-sky-700 p-2 text-blue-700"
                />
              </Box>

              
              <Stack direction="row" spacing={2}>
                <IconButton component={Link} to="/cart">
                  <ShoppingBagOutlinedIcon sx={{ color: "#0d3b66" }} />
                </IconButton>
                <IconButton onClick={handleOpenUserMenu}>
                  <PersonOutlineIcon sx={{ color: "#0d3b66" }} />
                </IconButton>

                <Menu open={Boolean(anchorElUser)} anchorEl={anchorElUser} onClose={handleCloseUserMenu}>
                  {settings.map((setting, index) => (
                    <MenuItem key={index} onClick={() => setting === "Logout" && handleLogout()}>
                      {setting}
                    </MenuItem>
                  ))}
                </Menu>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>

      
      <Box sx={{ height: "100px" }} />

      
      <Box
        sx={{
          backgroundColor: "#001b73",
          overflow: "hidden",
          whiteSpace: "nowrap",
          py: 1.2,
          position: "fixed",
          top: "64px",
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
            gap: 10,
          }}
        >
          {[...Array(2)].map((_, idx) => (
            <Box key={idx} sx={{ display: "flex", justifyContent: "space-around", flex: "1 0 auto", gap: 10 }}>
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

      {/* Spacer below scroll bar */}
      <Box sx={{ height: "7px" }} />

      {/* Banner */}
      <div className="w-full shadow-xl bg-gradient-to-r from-cyan-400 to-blue-900 flex justify-center p-10">
        <h1 className="text-4xl font-bold text-white">Products</h1>
      </div>

      {/* Main Layout */}
      <div className="mx-5">
        <Grid container spacing={2} sx={{ mt: 3 }}>
          {/* Sidebar */}
          <Grid item xs={12} sm={4} md={3}>
            <Box sx={{ width: "100%" }}>
              <Masonry columns={1} spacing={2}>
                <Paper>
                  <StyledAccordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className="font-bold text-xl text-sky-600">
                        Categories
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <h4
                        className={`font-bold ms-2 mt-3 cursor-pointer ${
                          selectedCategory === null ? "text-sky-600" : "text-gray-600"
                        }`}
                        onClick={() => setselectedCategory(null)}
                      >
                        All
                      </h4>
                      {categories.map((item, index) => (
                        <h4
                          key={index}
                          className={`font-bold ms-2 mt-3 cursor-pointer ${
                            selectedCategory === item ? "text-sky-600" : "text-gray-600"
                          }`}
                          onClick={() => setselectedCategory(item)}
                        >
                          {item}
                        </h4>
                      ))}
                    </AccordionDetails>
                  </StyledAccordion>
                </Paper>
              </Masonry>
            </Box>
          </Grid>

          {/* Products Grid */}
          <Grid item xs={12} sm={8} md={9}>
            <Grid container spacing={3}>
              {filteredMedicines.length > 0 ? (
                filteredMedicines.map((item) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                    <Card
                      onClick={() => handleProductClick(item.id)}
                      sx={{
                        width: "100%",
                        height: 340,
                        borderRadius: 3,
                        transition: "0.2s",
                        "&:hover": { transform: "scale(1.03)", boxShadow: 5 },
                      }}
                    >
                      <CardActionArea>
                        <Box sx={{ height: 160, display: "flex", justifyContent: "center", alignItems: "center" }}>
                          <CardMedia
                            component="img"
                            image={item.image}
                            sx={{ objectFit: "contain", height: "100%" }}
                          />
                        </Box>
                        <CardContent>
                          <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>{item.name}</Typography>
                          <Typography sx={{ textAlign: "center", color: "#00a3e0" }}>{item.category}</Typography>
                          <Typography sx={{ textAlign: "center", mt: 1 }}>₹ {item.price}</Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions sx={{ justifyContent: "center" }}>
                        <Button variant="contained">Product View</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Typography sx={{ fontSize: 30, textAlign: "center", width: "100%" }}>
                  No Medicines Found
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Products;
