import { useEffect,useState } from "react"
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail"

const { products } = require('../utils/products');


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    useEffect(() => {
        customFetch(2000,products[8])
        .then(result=>setProducto(result))
        .catch(err=>console.log(err))

    },[]);    
return(
    <>
    
    <ItemDetail item={producto}/> 
    </>
    );
}

export default ItemDetailContainer;