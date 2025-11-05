import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCartItemsAPI, getMedicineAPI, updateCartAPI } from '../service/allAPI';
import { Button, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Header from '../components/Header';
import Swal from "sweetalert2";


function ProductView() {
   const {id}=useParams()

const [Medicine, setMedicine] = useState(null);
const [quantity, setQuantity] = useState(1)

const fetchMedicine= async()=>{
    try{
        const result= await getMedicineAPI();
        if(result.status>=200 && result.status<300){
            const found =result.data.find(item=>item.id ==id)
            setMedicine(found)     
        }

    }catch(err){
      console.error("error fetching medicines", err);

    }
}


    useEffect(() => {
        fetchMedicine()       
    }, []);

    const decreaseQuantity = () => {
      setQuantity((prev)=>(prev>1 ? prev-1 : 1))
    }

    const increaseQuantity = () => {
      setQuantity((prev)=> prev+1)
    }

    const handleAddToCart = async (product) => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"))
        const userId = currentUser.id
        if (!userId) {
          Swal.fire({
            icon: "warning",
            title: "Please login first",
            text: "You need to login to add items to the cart.",
          });
        }
        try{
          const res = await getCartItemsAPI(userId)
          const existingCart = res.data.Cart || []
    
          const existingItem = existingCart.find((item)=>item.medicineId === product.id)
    
          let updatedCart 
          if(existingItem){
            updatedCart = existingCart.map((item)=> item.medicineId === product.id ? {...item, quantity: item.quantity+quantity} : item
            )
          } else{
            const newItem = {
              medicineId: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              brand: product.brand,
              quantity: quantity
            }
            updatedCart = [...existingCart, newItem]
            Swal.fire({
            icon: "success",
            title: "Added to Cart",
            text: `${product.name} added to cart.`,
            showConfirmButton: false,
          });
          }
          await updateCartAPI(userId, updatedCart)
        } catch(error){
          console.log("error adding to cart:",error);
          Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Unable to update cart. Please try again later.",
        });
          
        }
      }

  return (
    <>
    <Header/>
    <div className="w-full min-h-screen bg-white">
      
      <div className=" shadow-2xl w-full h-50 bg-radial from-cyan-300 to-sky-500 flex items-center justify-center ">
        <h1 className="text-4xl font-bold text-white">Products View</h1>
      </div>

      
     

      
      {
        Medicine?
        <div className="container mx-auto mt-10 flex flex-col lg:flex-row gap-8 px-4">

       
        <div className="flex justify-center lg:w-1/2">
          <div className=" rounded-xl p-5 shadow-sm flex justify-center">
            <img
              src={Medicine.image}
              alt="product"
              className="w-70 h-[350px] object-contain"
            />
          </div>
        </div>

       
        <div className="lg:w-1/2 flex flex-col gap-2">
          
        
          <div className="flex items-start justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              {Medicine.name}
            </h2>
            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-xl font-medium">
              INR:  {Medicine.price}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-3">
            Brand: <span className="text-sky-600 font-medium">{Medicine.brand}</span>
          </p>

          
          <div className="text-sm text-gray-700 mt-2">
            <p className="font-semibold">Used For:</p>
            <ul className="list-disc ml-5">
              <li>{Medicine.usedFor}</li>
            </ul>

            <p className="font-semibold mt-4">Precautions:</p>
            <ul className="list-disc ml-5">
              <li>
                {Medicine.precuations}
              </li>
            </ul>

            <p className="font-semibold mt-4">Side Effects:</p>
            <ul className="list-disc ml-5">
              <li>
                {Medicine.sideEffects}
              </li>
            </ul>

            <p className="font-semibold mt-4">Category:</p>
            <ul className="list-disc ml-5">
              <li>{Medicine.category}</li>
            </ul>
          </div>

         
          <div className="mt-8 bg-white rounded-xl shadow-sm p-4 flex items-center gap-6 max-w-lg">
            
       
            <div className="flex items-center  rounded-lg shadow-sm px-2">
              <IconButton onClick={decreaseQuantity}>
                <RemoveIcon />
              </IconButton>
              <span className="px-3 font-medium">{quantity}</span>
              <IconButton onClick={increaseQuantity}>
                <AddIcon />
              </IconButton>
            </div>

      
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0077c2",
                borderRadius: "8px",
                padding: "10px 25px",
                textTransform: "none"
              }}
              className="flex-1"
              onClick={(e)=>handleAddToCart(Medicine)}
            >
              🛒 Add To Cart
            </Button>
          </div>
        </div>
      </div>
      :
      <p>NO Medicine Found</p>
      }
    </div>
    
    </>
  )
}

export default ProductView
