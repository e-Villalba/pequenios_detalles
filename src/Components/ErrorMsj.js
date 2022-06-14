import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
const ErrorMsj=()=>{
return
(

<div className="row vh-100 align-items-center">
                        <div className="col d-flex justify-content-center" >
                            <div>
                                <FontAwesomeIcon size="10x" icon={faCartPlus} ></FontAwesomeIcon>
                            </div>
                            <div>
                                <p className='LetraBigBold ms-5'>Su carrito está vacío</p>
                            </div>
                        </div>
                    </div>
)
}
export default ErrorMsj;