import { Link } from "react-router-dom";

const GoCart =({ itemsCarrito = 0 })=>{
return(
    <>  
     {itemsCarrito>0 ?
        <Link to='/cart'> <button type="button" className="btn btn-primary" >Ir al Carrito</button></Link>
        :
        <button type="button" className="btn btn-primary" disabled>Ir al Carrito</button>
     }
        
    </>

)
}
export default GoCart;