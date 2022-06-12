import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail"
import { firestoreFetchOne } from "../utils/fireStoreFetch";

const { products } = require('../utils/products');


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const {id}=useParams();
    /*useEffect(() => {
        customFetch(2000,products.find(produc => parseInt(produc.id)===parseInt(id)))
        .then(result=>setProducto(result))
        .catch(err=>console.log(err))

    },[]);    */

    useEffect(() => {
        firestoreFetchOne(id)
            .then(result => setProducto(result))
            .catch(err => console.log(err))
    }, []);
return(
    <>
        <ItemDetail item={producto}/> 
    </>
    );
}

export default ItemDetailContainer;