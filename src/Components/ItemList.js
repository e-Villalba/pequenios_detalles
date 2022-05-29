import Item from "./Item";


const ItemList = ({ items }) => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row d-flex justify-content-center'>
                   
                    {
                        items.length > 0
                            ? items.map(item => <Item id={item.id} nameProduct={item.nameProduct} stock={item.stock} cost={item.cost} description={item.description} image={item.image} />)
                            : <div class="spinner"></div>
                    }
                   
                </div>
            </div>
     
       </>
    );
}

export default ItemList;



