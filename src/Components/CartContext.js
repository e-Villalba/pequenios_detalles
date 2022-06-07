import { createContext, useState } from "react";


export const CartContext =createContext();


const CartContextProvider =({children}) => {        
    const[cartList, setCartList]=useState([]);

    const addToCart = (item) => {
        const index=cartList.findIndex((element)=>element.id===item.id)
        if(index===-1)
        {
            setCartList([...cartList,
                item])
        }
        else
        {
            let cantidadVieja= cartList[index].cantidad;
            let cantidadNueva= item.cantidad;
            cartList[index].cantidad=cantidadVieja+cantidadNueva;
            setCartList([...cartList]);
        }
        
    }   

    const removeItem =(itemId) =>{
    //Quitar el producto con id= id con un filter
        const productosNoEliminados=cartList.filter(item=>item.id!==parseInt(itemId));
        setCartList(productosNoEliminados);

    }

    const clear=() =>{
        // Remover todos los items
        setCartList([]);
    }
    const isInCart= (item) => 
    { //true|false
        const productoAgregado=cartList.find(el=>el.id===item.id)
    }
    
    const AddBadget=()=>
    {
        return cartList.reduce((acc,item)=>acc=acc+item.cantidad,0)
    }
    return(
            <CartContext.Provider value={{cartList,addToCart,removeItem,clear,isInCart,AddBadget}}>
             {children}           
            </CartContext.Provider>

    );



}
export default CartContextProvider;
