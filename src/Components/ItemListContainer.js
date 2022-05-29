
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const { products } = require('../utils/products');
const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos] = useState([]);
    const {id}=useParams();
    
    useEffect(() => {
        customFetch(2000, id==undefined?products:products.filter(produc => produc.categoryId==parseInt(id)))
            .then(result => setListaProductos(result))
            .catch(err => console.log(err))    
    }, [id]);

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " items para tu compra.");
    }

    return (<>
        <div className='container-fluid d-flex mt-3 justify-content-center'>
               <p >{greeting}</p>
               <ItemList items={listaProductos} />
        </div>
        
        
        <ItemCount stock={10} initial={1} onAdd={onAdd} ></ItemCount>

    </>);

}
export default ItemListContainer;