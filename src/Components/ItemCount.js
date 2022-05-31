import { useState } from 'react';
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
            <div className='container'>
                <div className='row '>
                    <div className=" col  d-flex justify-content-center" >
                        <button className="btnItemCount LetraBigBold " onClick={decrement} type="button">-</button>
                        <input class="txtItemCount" type="text" name="campoApellido" id="idApellido"          value={count} />
                      
                        <button className="btnItemCount LetraSmallBold" onClick={increment} type="button">+</button>
                        {stock ? <button type="button" className="btn btn-primary"  onClick={() => onAdd(count)}>Agregar a Carrito</button> : <button type="button" class="btn btn-primary  disabled">Agregar a Carrito</button>}
                    </div>
                </div>
            </div>
        </>

    );
}
export default ItemCount;