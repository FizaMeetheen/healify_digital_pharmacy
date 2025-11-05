import commonAPI from "./commonAPI"
import BASEURL from "./serverURL"

//1. getAllMedicine
export const getMedicineAPI = async(reqbody) => {
    return await commonAPI("GET", `${BASEURL}/medicine`, reqbody)
}


// 2. login user
export const loginUserAPI = async(phone, password) => {
    return await commonAPI("GET", `${BASEURL}/user?phone=${phone}&password=${password}`);
};


// 3. Register new user
export const registerUserAPI = async(userData) => {
    return await commonAPI("POST", `${BASEURL}/user`, userData);
};


// -cart-------------------------------------------------------
//cart: getting cart items
export const getCartItemsAPI = async(id) => {
    return await commonAPI("GET", `${BASEURL}/user/${id}`)
}

//update cart items 
export const updateCartAPI = async(id, reqBody) => {
    return await commonAPI("PATCH", `${BASEURL}/user/${id}`, { Cart: reqBody })
}

//delete cart item 
export const deleteCartAPI = async(id) => {
    return await commonAPI("DELETE", `${BASEURL}/user/${id}`)
}

//delete all cart items
export const deleteAllCartAPI = async(id) => {
    return await commonAPI("PATCH", `${BASEURL}/user/${id}`, { Cart: [] })
}

//checkout-----------------------

//add booking details to db
export const addBokingDetailsAPI = async(reqBody) => {
    return await commonAPI("POST", `${BASEURL}/bookings`, reqBody)
}


// add lab booking 
export const addLabTestAPI = async(reqBody) => {
    return await commonAPI("POST", `${BASEURL}/labTest_booking`, reqBody)
}


// admin part-------------------------------------------------------


// admin :-user management //getusers
export const userManageAPI = async() => {
    return await commonAPI("GET", `${BASEURL}/user`)
}

//acceptUser
export const acceptUserAPI = async(id, reqBody) => {
    return await commonAPI("PATCH", `${BASEURL}/user/${id}`, reqBody)
}

//rejectuser
export const rejectUserAPI = async(id, reqBody) => {
    return await commonAPI("PATCH", `${BASEURL}/user/${id}`, reqBody)
}

// admin : lab booking management //get booking details
export const labManageAPI = async() => {
    return await commonAPI("GET", `${BASEURL}/labTest_booking`)
}

//admin : add medicines 
export const addMedicineAPI = async(reqBody) => {
    return await commonAPI("POST", `${BASEURL}/medicine`, reqBody)
}

//admin : showMedicines
export const showMedicineAPI = async() => {
    return await commonAPI("GET", `${BASEURL}/medicine`)
}

//admin : edit medicines
export const editMedicineAPI = async(id, reqBody) => {
    return await commonAPI("PUT", `${BASEURL}/medicine/${id}`, reqBody)
}

//admin : delete medicines
export const deleteMedicineAPI = async(id) => {
    return await commonAPI("DELETE", `${BASEURL}/medicine/${id}`)
}

//admin : //get cart booking details
export const getCartDetailsAPI = async() => {
    return await commonAPI("GET", `${BASEURL}/bookings`)
}

// admin : // clear cart details of each user
export const deleteCartDataAPI = async(id) => {
    return await commonAPI("DELETE", `${BASEURL}/bookings/${id}`)
}