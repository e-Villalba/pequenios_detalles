import './App.css';
import './Components/NavBar';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Cart from './Components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './Components/CartContext';

const App = () => {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
        {/*<ItemListContainer greeting="Hola a mi primer Carrito CoderHouse - React"></ItemListContainer>
      <NavBar></NavBar>
      <ItemDetailContainer></ItemDetailContainer>*/}
      </CartContextProvider>
    </div>
  );
}

export default App;
