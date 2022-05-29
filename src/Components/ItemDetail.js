import ItemCount from './ItemCount'
const ItemDetail = ({ item }) => {
    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " items para tu compra.");
    }
    return (
        <>
        {
            item.stock > 0?
            <div className="container  ">
                <div className="row ">

                    <div className="col " >
                            <img src={item.image} class="rounded " alt="..."></img>
                      
                    </div>
                {/*<div className="col " >
                        <h5 className="LetraBigBold">{item.nameProduct}</h5>
                        <h5 className="LetraMedium">{item.description}</h5>
                        <p className="LetraMediumBold mt-5">Precio ${item.cost}</p>
                        <p className="LetraSmall">Stock {item.stock} unidades</p>                        
                        <div>
                            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} ></ItemCount>
                        </div>
        </div>*/}
                    


                </div>
            </div>
            : <div class="spinner"></div>
        }
        </>
    )


}
export default ItemDetail;