import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from "@fortawesome/free-solid-svg-icons"
import { useContext } from 'react'
import { CartContext } from './CartContext'

import Item from './Item'
import ClearCart from './ClearCart'
import { Link } from 'react-router-dom'
import StayBuying from './StayBuying'
const Cart = () => {
    const test= useContext(CartContext)
    
    const eliminarProducto = (idProducto) => {
        test.removeItem(idProducto);   

    }
    return (

       
            <div className="container">
                        {
                            
                            test.cartList.length===0?
                            <div className="row vh-100 align-items-center">
                            <div className="col d-flex justify-content-center" >
                                <div>
                                    <FontAwesomeIcon  size="10x" icon={faCartPlus} ></FontAwesomeIcon>
                                </div>
                                <div>
                                    <p className='LetraBigBold ms-5'>Su carrito está vacío</p>                                                
                                </div>
                            </div>
                            </div>
                            : 
                            <>
                            <div className='container'>
                                <div className='row d-flex '>
                                    <div className='col text-center'>
                                    <ClearCart itemsCarrito={test.cartList.length} />
                                    <StayBuying/>
                                    </div>
                                </div>
                            </div>
                                {test.cartList.map((item)=> 
                                <div className="col justify-content-start" >
                                    
                                <div className="card text-center cardProductos mx-3 my-3" >            
                                <div className="card-body d-flex align-content-center ">
                                    <img src={item.image} className="rounded mx-auto d-block w-50 imgProducto" alt="..."></img>
                
                                </div>
                                <div className="">                
                                    <h5 className="card-title">{item.nameProduct}</h5>
                                    <p className="card-text">${item.cost}</p>                                        
                                    <p className="card-text"> Cantidad {item.cantidad}</p>          
                                </div>
                                
                                <div className="d-flex justify-content-end">                
                                    <button type="button" title="Eliminar Producto"  onClick={() => eliminarProducto(item.id)} className="btnDetalleProd btn-secondary mb-3 me-3 d-flex "> 
                                        <ion-icon size="small" name="trash-bin-outline"></ion-icon>
                                    </button>
                                    
                                </div>
                            </div>
                                </div>
                                        
                        
                                )}

                                
                            </>
                            
                        }
                    </div>
                

            
        
            )


}
export default Cart;