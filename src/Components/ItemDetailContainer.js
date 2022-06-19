import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import { firestoreFetchOne } from "../utils/fireStoreFetch";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const {id}=useParams();


    useEffect(() => {
        firestoreFetchOne(id)
            .then(result => setProducto(result))
            .catch(err => 
                    console.log(err,'ERROR FIREBASEEEE')
                
            )
    }, []);
return(
    <>
        <ItemDetail item={producto}/> 
    </>
    );
}

export default ItemDetailContainer;