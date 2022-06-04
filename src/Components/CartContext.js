import { createContext, useState } from "react";


export const CartContext =createContext();

const CartContextProvider =({children}) => {        
    const[cartList, setCartList]=useState([]);

    const addToCart = (item) => {
            setCartList([...cartList,
                    item]);
    }   

    const removeItem =(itemId) =>{
                //Quitar el producto con id= id con un filter

    }

    const clear=() =>{
        // Remover todos los items
    }
    const isInCart= (id) => 
    { //true|false
    }
    

    return(
            <CartContext.Provider value={{cartList,addToCart,removeItem,clear,isInCart}}>
             {children}           
            </CartContext.Provider>

    );

}
export default CartContextProvider;

