import { useState } from 'react';
import '../estilos/main.css'
const ItemCount = ({ stock = 0, inicial = 1, onAdd }) => {


    const [count, setCount] = useState(0); //Hook

    const increment = () => {

        if (count < stock) {
            setCount(count + 1);
        }

    }
    const decrement = () => {
        if (count > inicial) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <div className="w-25 justify-content-center">
                <div>
                    <div className="input-group mb-3 " >
                        <button className="btn btn-outline-secondary " onClick={decrement} type="button">-</button>
                        <input type="text" className="form-control text-center textoCounter" placeholder="" aria-label="Example text with two button addons" value={count} />
                        <button className="btn btn-outline-secondary " onClick={increment} type="button">+</button>
                        {stock ? <button type="button" className="btn btn-primary ">Agregar a Carrito</button> : <button type="button" class="btn btn-primary  disabled">Agregar a Carrito</button>}
                    </div>
                    <div className="d-flex d-block">

                    </div>
                </div>
            </div>
        </>

    );
}
export default ItemCount;