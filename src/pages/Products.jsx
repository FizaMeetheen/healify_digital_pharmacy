import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Masonry from '@mui/lab/Masonry';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Header from "../components/Header";
import { getMedicineAPI } from "../service/allAPI";
import { useEffect } from "react";

function Products() {
    const heights = [ 50];

 const [medicines, setmedicines] = useState([]);   

const getAllMedicines = async()=>{
try{
  const result = await getMedicineAPI()

  if(result.status>=200 &&result.status<300){
    setmedicines(result.data)
  }

}catch(err){
  console.error("error fetching medicines",err)

}
  
}
useEffect(()=>{
  getAllMedicines()
},[])





const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: '#fff',
  color: (theme.vars || theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));




  return (
    <>
    <Header/>
      <div>
        <div className=" w-full shadow-2xl h-70 bg-radial from-cyan-300 to-cyan-500 flex justify-center items-center">
          <h1 className="text-5xl font-bold text-white">Products</h1>
        </div>
        <div className="w-auto mx-5">
          <Grid container spacing={1} sx={{mt:5}}>
            {/* category */}
            <Grid size={2} sx={{mt:5}}>
              <div className=" row">
               
                
              </div>
               <Box sx={{ width: 500, minHeight: 377 }}>
      <Masonry columns={3} spacing={2}>
        {heights.map((height, index) => (
          <Paper key={index}>
            <StyledAccordion sx={{ minHeight: height }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography component="span"> <h2 className="font-bold text-2xl text-sky-600">Categories</h2> </Typography>
              </AccordionSummary>
              <AccordionDetails>
                
                <h4 className="font-bold ms-2 text-gray-600 mt-3">Baby Products</h4>
                <h4 className="font-bold ms-2 text-gray-600 mt-3">Nutritious</h4>
                <h4 className="font-bold ms-2 text-gray-600 mt-3">Ayurvedic</h4>
                <h4 className="font-bold ms-2 text-gray-600 mt-3">Capsules</h4>
              </AccordionDetails>
            </StyledAccordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  </Grid>
            {/* Products */}
            <Grid size={10}>
              <div >
                <Grid container spacing={1}>

                  {medicines.length>0? (
                    medicines.map((item)=>(
                      <Grid size={4} key={item.id}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="160"
                          image={item.image}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography sx={{ml:3,color: "#0d47a1"}} gutterBottom variant="h5" component="div">
                            {item.name}
                          </Typography>
                          <Typography 
                            variant="body2"
                            sx={{ color: "#039be5" }}  
                          >
                            {item.category}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "#0d47a1", mt:1
                             }}
                             
                          >
                            INR:{item.price}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button sx={{ml:4}} size="small" variant="contained">ADD TO CART</Button>
                      </CardActions>
                    </Card>
                  </Grid>

                    ))   
                  ):
                  ( <Typography sx={{ ml: 2, mt: 2 }}>
                    Loading medicines...
                  </Typography>)  
                  }
                  
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
