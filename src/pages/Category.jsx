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

function Category() {
  const [medicines, setMedicines] = useState([]);


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

  useEffect(() => {
    getAllMedicines();
  }, []);

  return (
    <>
      <Header />
      <div>
        {/* Banner Section */}
        <div className="w-full shadow-2xl h-70 bg-radial from-cyan-300 to-cyan-500 flex justify-center items-center">
          <h1 className="text-5xl font-bold text-white">
            Incoming Category - Medicines
          </h1>
        </div>

        {/* Products Section */}
        <div className="w-auto mx-5 my-10">
          <Grid container spacing={4} justifyContent="center">
            {medicines.length > 0 ? (
              medicines.map((item) => (
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
                    sx={{
                      width: 300,
                      height: 370,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      boxShadow: 4,
                      borderRadius: 3,
                      transition: "transform 0.2s ease",
                      "&:hover": { transform: "scale(1.03)" },
                    }}
                  >
                    <CardActionArea sx={{ flexGrow: 1 }}>
                      <CardMedia
                        component="img"
                        height="180"
                        image={item.image}
                        alt={item.name}
                        sx={{
                          objectFit: "cover",
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                      />
                      <CardContent sx={{ flexGrow: 1, minHeight: 130 }}>
                        <Typography
                          sx={{ color: "#0d47a1", fontWeight: "bold" }}
                          gutterBottom
                          variant="h6"
                          textAlign="center"
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#039be5", textAlign: "center" }}
                        >
                          {item.category}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#0d47a1",
                            mt: 1,
                            textAlign: "center",
                            fontWeight: "bold",
                          }}
                        >
                          ₹{item.price}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions sx={{ justifyContent: "center", mb: 1 }}>
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
