import axios from "axios";

//const BaseUrl='https://fakestoreapi.com'
const BaseUrl = 'https://ecommercefoodapp-backend.onrender.com'
//https://localhost:5000/api/dishes
export const getAllProducts = async () =>{
    //const url= `${BaseUrl}/products`;
    const url= `${BaseUrl}/dishes`;
    try{
        const {data} = await axios.get(url);
        //console.log(data);
        return data;
    } catch(error){
        return error;
    }
}

export default getAllProducts