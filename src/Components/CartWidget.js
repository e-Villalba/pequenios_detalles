
import { useContext } from 'react';
import '../estilos/main.css'
import { CartContext } from './CartContext';


const CartWidget = () => {
    const {AddBadget,cartList}= useContext(CartContext);
    
    return (
        <>
           <div className='d-flex' title="Tu Carrito">
                <ion-icon className=""  name="cart-outline">                                
                
                </ion-icon>             
                <p><span className="w3-badge position-relative w3-small w3-green mb-">{cartList.length>0 && AddBadget() }</span></p>
                
                
            </div>
            
       
        </>
    );
}

export default CartWidget;