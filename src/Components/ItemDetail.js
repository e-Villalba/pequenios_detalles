import ItemCount from './ItemCount'
import AddCart from './AddCart';
import StayBuying from './StayBuying';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import FormatNumber from '../utils/FormatNumber';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const [cart,setCart]=useState({})
    const compraContext = useContext(CartContext);

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " items para tu compra.");
        setItemCount(qty);        
   
        //Agregar este Producto al carrito
        compraContext.addToCart({...item,cantidad:qty});
    
    }
    
    return (
        <>
            {
                item.stock > 0 ?
                    <div className="container Detalle">
                        <div className="row vh-100 align-items-center">

                            <div className="col " >
                                <img src={item.image} className="rounded w-75" alt="..."></img>

                            </div>
                            <div className="col text-center " >
                                <h5 className="LetraBigBold">{item.nameProduct}</h5>
                                <h5 className="LetraMedium">{item.description}</h5>
                                <p className="LetraMediumBold mt-5">Precio $ <FormatNumber number={item.cost}></FormatNumber></p>
                                <p className="LetraSmall">Stock {item.stock} unidades</p>                                
                                <div>
                                {
                                    itemCount===0?
                                    
                                        <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} ></ItemCount>
                                    :
                                        <div className='d-flex justify-content-center'>
                                            <StayBuying></StayBuying> <AddCart></AddCart>
                                        </div>

                                    
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div className="spinner"></div>
            }
        </>
    )


}
export default ItemDetail;