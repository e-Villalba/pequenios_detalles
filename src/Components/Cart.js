import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { faFaceLaughWink } from "@fortawesome/free-solid-svg-icons"
import { useContext } from 'react'
import { CartContext } from './CartContext'
import FormatNumber from "../utils/FormatNumber";
import ClearCart from './ClearCart'
import StayBuying from './StayBuying'
import { collection, serverTimestamp, setDoc, doc, updateDoc, increment } from 'firebase/firestore';
import db from '../utils/firebaseConfig';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
const Cart = () => {
    const test = useContext(CartContext)
    const [order, setOrder] = useState(0);
    
    const eliminarProducto = (idProducto) => {
        test.removeItem(idProducto);
    }
    const createOrder = () => {
        const itemsOrdenCompra = test.cartList.map(item => ({
            id: item.id,
            price: item.cost,
            title: item.nameProduct,
            qty: item.cantidad

        }))
        let order = {
            buyer: {
                email: test.userMail,
                name: test.userName + ' ' + test.userApellido,
                phone: test.userPhone
            },
            date: serverTimestamp(),
            total: test.calcularPrecioFinalCompra(),
            items: itemsOrdenCompra

        };


        const createOrderFireStore = async () => {
            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }
        createOrderFireStore()
            .then(result => {                
                swal("Se ha creado la nueva orden " + result.id)
                setOrder(result.id)
                test.clear();

            }

            )
            .catch(err => console.log(err));

        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.id)
            await updateDoc(itemRef, {
                stock: increment(-item.cantidad)

            })
        });
    }


    return (
        <div className="container">
            {
                test.cartList.length === 0 ?
                    order === 0 ?
                        <div className="row vh-100 align-items-center">
                            <div className="col d-flex justify-content-center" >
                                <div>
                                    <FontAwesomeIcon size="10x" icon={faCartPlus} ></FontAwesomeIcon>
                                </div>
                                <div>
                                    <p className='LetraBigBold ms-5'>Su carrito está vacío!</p>
                                </div>
                            </div>
                        </div>
                        :
                        <>

                            <div className="row vh-100 align-items-center">

                                <div className="col d-flex justify-content-center" >

                                    <div>
                                        <FontAwesomeIcon size="10x" icon={faFaceLaughWink} ></FontAwesomeIcon>
                                    </div>
                                    <div>
                                        <p className='LetraBigBold ms-5'>Gracias por Su Compra!!</p>
                                        <div className="col d-flex justify-content-center" >
                                            <StayBuying></StayBuying>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </>
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
                                    <div className="card cardSummary mx-2 my-2" >
                                        <div className="text-center">
                                            <p className="LetraMediumBold"> Datos Comprador</p>
                                        </div>
                                        <div className='row d-flex justify-content-start ms-2'>
                                            <div className='col '><p className=" LetraSmallBold "> Apellido y Nombres </p></div>
                                            <div className='col '><p className=" LetraSmall d-flex justify-content-end me-3"> {test.userName}  {test.userApellido}</p></div>
                                        </div>
                                        <div className='row d-flex justify-content-start ms-2'>
                                            <div className='col '><p className=" LetraSmallBold "> e-mail </p></div>
                                            <div className='col '><p className=" LetraSmall d-flex justify-content-end me-3"> {test.userMail}</p></div>
                                        </div>

                                        <div className='row d-flex justify-content-center ms-2'>
                                            <div className='col '><p className=" LetraSmallBold  "> Teléfono </p></div>
                                            <div className='col '><p className=" d-flex LetraSmall justify-content-end me-3"> {test.userPhone}</p></div>
                                        </div>
                                        <div className='row d-flex justify-content-center '>
                                            <div className='col d-flex justify-content-center '>
                                                <Link to='/UserData'><button type="button" className="btn btn-primary">Actualizar Datos</button></Link>
                                            </div>
                                        </div>

                                    </div>
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
                                                <div className='col '><p className=" LetraSmallBold "> $ <FormatNumber number={test.calcularPrecioFinalCompra()} /></p></div>
                                            </div>
                                            {test.userName?
                                            <button type="button" className="btn btn-primary" onClick={() => createOrder()} >Finalizar Compra </button>
                                            :
                                            <button type="button" className="btn btn-primary disabled"  >Finalizar Compra </button>
                                            }
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