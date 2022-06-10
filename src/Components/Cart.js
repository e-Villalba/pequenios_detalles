import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { useContext } from 'react'
import { CartContext } from './CartContext'
import FormatNumber from "../utils/FormatNumber";
import ClearCart from './ClearCart'
import { Link } from 'react-router-dom'
import StayBuying from './StayBuying'
const Cart = () => {
    const test = useContext(CartContext)

    const eliminarProducto = (idProducto) => {
        test.removeItem(idProducto);

    }
    return (


        <div className="container">
            {

                test.cartList.length === 0 ?
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
                    :
                    <>
                        <div className='container'>
                            <div className='row d-flex '>
                                <div className='col text-center'>
                                    <ClearCart itemsCarrito={test.cartList.length} />
                                    <StayBuying />
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='row'>


                                <div className="col justify-content-start" >
                                    {test.cartList.map((item) =>


                                        <div className="card text-center cardProductos mx-3 my-3" >
                                            <div className="card-body d-flex align-content-center ">
                                                <img src={item.image} className="rounded mx-auto d-block w-50 imgProducto" alt="..."></img>

                                            </div>
                                            <div className="">
                                                <h5 className="card-title">{item.nameProduct}</h5>
                                                <p className="card-text">Precio Unitario $ <FormatNumber number={item.cost}></FormatNumber></p>
                                                <p className="card-text"> Cantidad {item.cantidad}</p>
                                                <p className="card-text letraBig"> Total Producto $ <FormatNumber number={test.calcularTotalProducto(item.id)}></FormatNumber></p>
                                            </div>

                                            <div className="d-flex justify-content-end">
                                                <button type="button" title="Eliminar Producto" onClick={() => eliminarProducto(item.id)} className="btnDetalleProd btn-secondary mb-3 me-3 d-flex ">
                                                    <ion-icon size="small" name="trash-bin-outline"></ion-icon>
                                                </button>

                                            </div>

                                        </div>




                                    )}
                                </div>
                                <div className="col  justify-content-center" >
                                    <div className="card text-center cardSummary mx-3 my-3" >
                                        <div className="">
                                            <p className="LetraMediumBold"> Resumen de Compra</p>
                                            <div className='row d-flex justify-content-center'>
                                                <div className='col '><p className=" LetraSmall "> Total Producto </p></div>
                                                <div className='col '><p className=" LetraSmall "> $ <FormatNumber number={test.calcularSubtotal()}></FormatNumber></p></div>
                                            </div>
                                            <div className='row d-flex justify-content-center'>
                                                <div className='col '><p className=" LetraSmall "> IVA</p></div>
                                                <div className='col '><p className=" LetraSmall "> $ <FormatNumber number={test.calcularIVA()}></FormatNumber></p></div>
                                            </div>
                                            <div className='row d-flex justify-content-center'>
                                                <div className='col '><p className=" LetraSmallBold "> Total Compra</p></div>
                                                <div className='col '><p className=" LetraSmallBold "> $ <FormatNumber number={test.calcularPrecioFinalCompra()}/></p></div>
                                            </div>

                                            <button type="button" className="btn btn-primary">Finalizar Compra</button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </>

            }
        </div>




    )


}
export default Cart;