import commonAPI from "./CommonAPI"
import BASEURL from "./serverURL"

//1. getAllMedicine
export const getMedicineAPI = async(reqbody) => {
    return await commonAPI("GET", `${BASEURL}/medicine`, reqbody)
}