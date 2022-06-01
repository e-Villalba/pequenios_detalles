import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from "@fortawesome/free-solid-svg-icons"

const Cart = () => {
    return (

        <div>
            <div className="container">
                <div className="row vh-100 align-items-center">
                   
                    <div className="col " >
                        <p className='LetraBigBold'>Hola Soy el Carrito</p>                                                
                    </div>

                    <div className="col " >
                        <FontAwesomeIcon  size="10x" icon={faCartPlus} ></FontAwesomeIcon>
                    </div>
                </div>

            </div>
        </div>
            )


}
export default Cart;