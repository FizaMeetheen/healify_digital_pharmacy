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
import Tooltip from "@mui/material/Tooltip";
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
import Header from "../components/Header";
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

// Smooth continuous scrolling animation
const smoothScroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

function Products() {
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
  
  const heights = [50];

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
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
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

  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`/products/${id}/productview`);
  };

  

  return (
    <>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
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
               <Button>
                <input onChange={(e)=>{setSearchData(e.target.value)}} type="text"  placeholder="SEARCH" className="border rounded-2xl border-sky-700 p-3 text-blue-700"/>
              </Button>
              
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
          position: "fixed",
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

      {/* Spacer to prevent content overlap */}
      <Box sx={{ height: "114px" }} />
    </Box>
      <div>
        <div className="w-full shadow-2xl h-70 bg-radial from-cyan-300 to-cyan-500 flex justify-center items-center">
          <h1 className="text-5xl font-bold text-white">Products</h1>
        </div>

        <div className="w-auto mx-5">
          <Grid container spacing={2} sx={{ mt: 5 }} alignItems="flex-start">

            {/* category */}
            <Grid size={2} sx={{ mt: 5 }}>
              <div className="row"></div>
              <Box sx={{ width: 500, minHeight: 377 }}>
                <Masonry columns={3} spacing={2}>
                  {heights.map((height, index) => (
                    <Paper key={index}>
                      <StyledAccordion sx={{ minHeight: height }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography component="span">
                            <h2 className="font-bold text-2xl text-sky-600">
                              Categories
                            </h2>
                          </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                          <h4
                            className={`font-bold ms-2 mt-3 cursor-pointer ${
                              selectedCategory === null
                                ? "text-sky-600"
                                : "text-gray-600"
                            }`}
                            onClick={() => setselectedCategory(null)}
                          >
                            All
                          </h4>

                          {categories.map((item, index) => (
                            <h4
                              key={index}
                              className={`font-bold ms-2 mt-3 cursor-pointer ${
                                selectedCategory === item
                                  ? "text-sky-600"
                                  : "text-gray-600"
                              }`}
                              onClick={() => setselectedCategory(item)}
                            >
                              {item}
                            </h4>
                          ))}
                        </AccordionDetails>
                      </StyledAccordion>
                    </Paper>
                  ))}
                </Masonry>
              </Box>
            </Grid>

            {/* Products */}
            <Grid size={10}>
              <div>
                <Grid container spacing={5}>
                  {filteredMedicines.length > 0 ? (
                    filteredMedicines.map((item) => (
                      <Grid size={4} key={item.id}>
                        <Card
                          onClick={() => {
                            handleProductClick(item.id);
                          }}
                          sx={{
                            width: 345,
                            height: 340,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            borderRadius: 3,
                            boxShadow: 3,
                            transition:
                              "transform 0.2s ease, box-shadow 0.2s ease",
                            "&:hover": {
                              transform: "scale(1.03)",
                              boxShadow: 6,
                            },
                          }}
                        >
                          <CardActionArea>
                            <Box
                              sx={{
                                height: 160,
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                overflow: "hidden",
                                backgroundColor: "#f8f9fa",
                              }}
                            >
                              <CardMedia
                                component="img"
                                height="160"
                                image={item.image}
                                alt={item.name}
                                sx={{
                                  objectFit: "contain",
                                  maxHeight: "100%",
                                  maxWidth: "100%",
                                }}
                              />
                            </Box>

                            <CardContent sx={{ flexGrow: 1 }}>
                              <Typography
                                sx={{
                                  color: "#0d47a1",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                                gutterBottom
                                variant="h5"
                                component="div"
                                noWrap
                              >
                                {item.name}
                              </Typography>

                              <Typography
                                variant="body2"
                                sx={{
                                  color: "#039be5",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                {item.category}
                              </Typography>

                              <Typography
                                variant="body2"
                                sx={{
                                  color: "#0d47a1",
                                  mt: 1,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                INR:{item.price}
                              </Typography>
                            </CardContent>
                          </CardActionArea>

                          <CardActions
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Button
                              sx={{ mb: 5 }}
                              size="small"
                              variant="contained"
                            >
                              ADD TO CART
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))
                  ) : (
                    <Typography  sx={{ ml: 2, mt: 2,display:"flex",justifyContent:"center",alignItems:"center",fontSize:"30px" }}>
                      No Medicines Found
                    </Typography>
                  )}
                </Grid>
              </div>
            </Grid>

          </Grid>
        </div>
      </div>
    </>
  );
}

export default Products;
