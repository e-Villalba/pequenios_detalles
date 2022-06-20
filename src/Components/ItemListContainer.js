import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utils/fireStoreFetch';

const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos] = useState([]);    
    const { id } = useParams();


    useEffect(() => {
        firestoreFetch(id)
            .then(result => setListaProductos(result))
            .catch(err => {
                console.log(err,"Firebase Caido")
                
            });
    }, [id]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setListaProductos([]);
        })
    }, []);

    return (<>
        {
         
                <div className='container-fluid d-flex mt-3 justify-content-center'>
                    <p >{greeting}</p>
                    <ItemList items={listaProductos} />
                </div>
         
        }


    </>);

}
export default ItemListContainer;