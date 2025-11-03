import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMedicineAPI } from '../service/allAPI';

function ProductView() {
   const {id}=useParams()

const [Medicine, setMedicine] = useState(null);

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

  return (
    <>
   {
    Medicine?
    <h1>{Medicine.name}</h1>
    :
    <h1>Medicine Not Found</h1>
   }
    
    </>
  )
}

export default ProductView
