import commonAPI from "./CommonAPI"
import BASEURL from "./serverURL"

//1. getAllMedicine
export const getMedicineAPI = async(reqbody) => {
    return await commonAPI("GET", `${BASEURL}/medicine`, reqbody)
}


// 2. login user
export const loginUserAPI = async (phone, password) => {
  return await commonAPI("GET", `${BASEURL}/user?phone=${phone}&password=${password}`);
};


// 3. Register new user
export const registerUserAPI = async (userData) => {
  return await commonAPI("POST", `${BASEURL}/user`, userData);
};













// admin part-------------------------------------------------------


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
export const editMedicineAPI = async (id,reqBody) => {
    return await commonAPI("PUT",`${BASEURL}/medicine/${id}`,reqBody)
}

//admin : delete medicines
export const deleteMedicineAPI = async (id) => {
    return await commonAPI("DELETE",`${BASEURL}/medicine/${id}`)
}

//admin : //get cart booking details
export const getCartDetailsAPI = async() => {
    return await commonAPI("GET",`${BASEURL}/bookings`)
}

// admin : // clear cart details of each user
export const deleteCartAPI = async (id) => {
    return await commonAPI("DELETE",`${BASEURL}/bookings/${id}`)
}