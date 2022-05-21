import { useState } from 'react';
const ItemCount = ({ stock = 0, inicial = 1,  onAdd }) => {
    
       
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
                <div class="input-group mb-3 h-25">
                    <button class="btn btn-outline-secondary " onClick={decrement} type="button">-</button>                    
                    <input type="text" class="form-control text-center " placeholder="" aria-label="Example text with two button addons" value={count}  />                    
                    <button class="btn btn-outline-secondary "  onClick={increment} type="button">+</button>  
                    {stock?<button type="button" class="btn btn-primary ">Agregar a Carrito</button>:<button type="button" class="btn btn-primary  disabled">Agregar a Carrito</button>}
                     
                    
                </div>
                <div className="d-flex d-block">
                        
                </div>
            </div>
        </>

    );
}
export default ItemCount;