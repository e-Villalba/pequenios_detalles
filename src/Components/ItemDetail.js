const ItemDetail = ({ item }) => {
    return (
        <>
            <div className="container content-fluid">
                <div className="row  justify-content-center align-items-center">

                    <div className="col " >

                      
                            <img src={item.image} class="rounded mx-auto  w-75 imgProducto" alt="..."></img>
                      
                    </div>
                    <div className="col" >
                        <h5 className="LetraBigBold">{item.nameProduct}</h5>
                        <h5 className="LetraMedium">{item.description}</h5>
                        <p className="LetraMediumBold mt-5">Precio ${item.cost}</p>
                        <p className="LetraSmall">Stock {item.stock} unidades</p>
                    </div>


                </div>
            </div>
        </>
    )


}
export default ItemDetail;