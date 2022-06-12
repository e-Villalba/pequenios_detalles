
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../utils/firebaseConfig';
import { collection,getDocs } from 'firebase/firestore';
import { firestoreFetch } from '../utils/fireStoreFetch';


/*const { products } = require('../utils/products');*/
const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos] = useState([]);
    const { id } = useParams();

    /*useEffect(() => {
        customFetch(2000, id==undefined?products:products.filter(produc => produc.categoryId==parseInt(id)))
            .then(result => setListaProductos(result))
            .catch(err => console.log(err))    
       const firebaseFetch= async()=>{     
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
            /*console.log(`${doc.id} => ${doc.data()}`);
            console.log(doc.id, "=>", doc.data());
        });}
        firebaseFetch();
    }, [id]);*/

    /*const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " items para tu compra.");
    }*/

    //componentDidUpdate
    
    useEffect(() => {
        firestoreFetch(id)
            .then(result => setListaProductos(result))
            .catch(err => console.log(err));
    }, [id]);

    //componentWillUnmount
    /*useEffect(() => {
        return (() => {
            setListaProductos([]);
        })
    }, []);*/

    return (<>
        <div className='container-fluid d-flex mt-3 justify-content-center'>
            <p >{greeting}</p>
            <ItemList items={listaProductos} />
        </div>




    </>);

}
export default ItemListContainer;