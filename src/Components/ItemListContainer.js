
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';

const { products } = require('../utils/products');
const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos] = useState([]);
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        customFetch(2000, products)
            .then(result => setListaProductos(result))
            .catch(err => console.log(err))    
    }, []);

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " items para tu compra.");
    }

    return (<>
        <div className='container-fluid d-flex mt-3 justify-content-center'>
               <p >{greeting}</p>
            <ItemList></ItemList>
        </div>
        
        
        <ItemCount stock={10} initial={1} onAdd={onAdd} ></ItemCount>

    </>);

}
export default ItemListContainer;