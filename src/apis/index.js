import  axios  from "axios"

const apiIntance = axios.create({
    // baseURL : "https://api.escuelajs.co/api/v1"
    baseURL : "https://fakestoreapi.in/api"
    // baseURL : "'https://fakestoreapi.com/"
})

const getAllProducts = async () => {
    try{
        const response = await apiIntance("/products")             
        return response.data.products      
    }catch(e){
        throw new Error("Failed to fetch product data",e)
    }
}

// const getAllProducts = async () => {
//     try{
//         const response = await apiIntance("/products")
//         return response.data       
//     }catch(e){
//         throw new Error("Failed to fetch product data",e)
//     }
// }

export {
    getAllProducts
}