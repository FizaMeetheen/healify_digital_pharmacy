import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Header from "../components/Header";
import { getMedicineAPI } from "../service/allAPI";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";

function Category() {
  const location = useLocation();
  const category = location.state?.category;

  const [medicines, setMedicines] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);

  const getAllMedicines = async () => {
    try {
      const result = await getMedicineAPI();
      if (result.status >= 200 && result.status < 300) {
        setMedicines(result.data);
      }
    } catch (err) {
      console.error("Error fetching medicines", err);
    }
  };
  const navigate = useNavigate();
    const handleProductClick = (id) => {
      navigate(`/products/${id}/productview`);
    };

  useEffect(() => {
    getAllMedicines();
  }, []);

  useEffect(() => {
    if (category) {
      const filtered = medicines.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredMedicines(filtered);
    } else {
      setFilteredMedicines(medicines);
    }
  }, [category, medicines]);

  return (
    <>
      <Header />
      <div>
        {/* Banner Section */}
        <div className="w-full shadow-2xl h-70 bg-radial from-cyan-300 to-cyan-500 flex justify-center items-center">
          <h1 className="text-5xl font-bold text-white">{category}</h1>
        </div>

        {/* Products Section */}
        <div className="w-auto mx-5 my-10">
          <Grid container spacing={4} justifyContent="center">
            {filteredMedicines.length > 0 ? (
              filteredMedicines.map((item) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={item.id}
                  display="flex"
                  justifyContent="center"
                >
                  <Card
                   onClick={() => {
                            handleProductClick(item.id);
                          }}
  sx={{
    width: 345,
    height: 340,   // same as products
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 3,
    boxShadow: 3,
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: 6,
    },
  }}
>
  <CardActionArea sx={{ flexGrow: 1 }}>
    <Box
      sx={{
        height: 160,  // same image height
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
          objectFit: "contain",   // match products
          maxHeight: "100%",
          maxWidth: "100%",
        }}
      />
    </Box>

    <CardContent sx={{ flexGrow: 1 }}>
      <Typography
        sx={{ color: "#0d47a1", textAlign:"center" }}
        gutterBottom
        variant="h6"
        noWrap
      >
        {item.name}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#039be5", textAlign:"center" }}
      >
        {item.category}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#0d47a1", mt: 1, textAlign:"center" }}
      >
        ₹{item.price}
      </Typography>
    </CardContent>
  </CardActionArea>

  <CardActions
    sx={{
      mt: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      pb: 2,
    }}
  >
    <Button size="small" variant="contained">
      ADD TO CART
    </Button>
  </CardActions>
</Card>
                </Grid>
              ))
            ) : (
              <Typography sx={{ mt: 5 }} textAlign="center" width="100%">
                Loading medicines...
              </Typography>
            )}
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Category;
