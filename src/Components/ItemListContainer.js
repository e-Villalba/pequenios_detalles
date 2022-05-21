
import ItemCount from './ItemCount';
const ItemListContainer=({greeting})=>
{
    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " items para tu compra.");
    }
    return(<>
        <p >{greeting}</p>
        <ItemCount stock={10} initial={1} onAdd={onAdd} ></ItemCount>
    </>);

}
export default ItemListContainer;