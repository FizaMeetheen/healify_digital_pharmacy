import commonAPI from "./CommonAPI"
import BASEURL from "./serverURL"

//1. getAllMedicine
export const getMedicineAPI = async(reqbody) => {
    return await commonAPI("GET", `${BASEURL}/medicine`, reqbody)
}




// admin :-user management //getusers
export const userManageAPI = async () => {
    return await commonAPI("GET", `${BASEURL}/user`)
}

//acceptUser
export const acceptUserAPI = async (id,reqBody) => {
    return await commonAPI("PATCH",`${BASEURL}/user/${id}`,reqBody)
}

//rejectuser
export const rejectUserAPI = async (id,reqBody) => {
    return await commonAPI("PATCH",`${BASEURL}/user/${id}`,reqBody)
}

// admin : lab booking management //get booking details
export const labManageAPI = async () => {
    return await commonAPI("GET",`${BASEURL}/labTest_booking`)
}

//admin : add medicines 
export const addMedicineAPI = async(reqBody) =>{
    return await commonAPI("POST",`${BASEURL}/medicine`,reqBody)
}

//admin : showMedicines
export const showMedicineAPI = async() => {
    return await commonAPI("GET", `${BASEURL}/medicine`)
}

//admin : edit medicines

//admin : delete medicines
export const deleteMedicineAPI = async (id) => {
    return await commonAPI("DELETE",`${BASEURL}/medicine/${id}`)
}


//cart: getting cart items
export const getCartItemsAPI = async (id) =>{
    return await commonAPI("GET",`${BASEURL}/user/${id}`)
}

//update cart items 
export const updateCartAPI = async (id,reqBody) =>{
    return await commonAPI("PATCH",`${BASEURL}/user/${id}`,{Cart:reqBody})
}