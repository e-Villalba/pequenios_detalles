import { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from './CartContext';
const ClearCart = ({ itemsCarrito = 0 }) => {

    
    const test = useContext(CartContext);


    const clearCart = () => {
        test.clear();   

    }
    
    return (
        <>
           {itemsCarrito>0 ? <button type="button" className="btn btn-primary"  onClick={() => clearCart()}>Vaciar Carrito</button> : <button type="button" className="btn btn-primary  disabled">Vaciar Carrito</button>}
        </>

    );
}
export default ClearCart;