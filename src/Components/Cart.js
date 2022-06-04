import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from "@fortawesome/free-solid-svg-icons"
import { useContext } from 'react'
import { CartContext } from './CartContext'
import Item from './Item'

const Cart = () => {
    const test= useContext(CartContext)
    return (

        <div>
            <div className="container">
                <div className="row vh-100 align-items-center">
                   
                    <div className="col " >
                        <p className='LetraBigBold'>Hola Soy el Carrito</p>                                                
                    </div>

                    <div className="col " >
                        {
                            test.cartList.length===0?
                            <FontAwesomeIcon  size="10x" icon={faCartPlus} ></FontAwesomeIcon>
                            : test.cartList.map((item)=> <p>{item.nameProduct}</p>)
                        }
                    </div>
                </div>

            </div>
        </div>
            )


}
export default Cart;