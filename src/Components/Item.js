import { Link } from "react-router-dom";
import FormatNumber from "../utils/FormatNumber";

const Item = ({ id, nameProduct, stock, cost, description, image }) => {
    return (
        <>
    
            <div className="card text-center cardProductos mx-3 my-3" >            
                <div className="card-body d-flex align-content-center ">
                    <img src={image} className="rounded mx-auto d-block w-100 imgProducto" alt="..."></img>

                </div>
                <div className="">                
                    <h5 className="card-title">{nameProduct}</h5>
                    <p className="card-text">$ <FormatNumber number={cost}></FormatNumber></p>                                        
                </div>
                <div className="d-flex justify-content-end">                
                <Link to={`/item/${id}`}> <button type="button" title="Detalle Producto" className="btnDetalleProd btn-secondary mb-3 d-flex justify-content-end"> <ion-icon size="small" name="ellipsis-horizontal-circle-outline"></ion-icon></button></Link>
                     
                </div>
            </div>
        </>
    );
}

export default Item;

