import './App.css';
import './Components/NavBar';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
const App=() =>{
  return (
    <div className="App">
      <BrowserRouter> 
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>          
          <Route path='/category/:id' element={<ItemListContainer/>}/>        
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>        
        </Routes>
      </BrowserRouter>
      {/*<ItemListContainer greeting="Hola a mi primer Carrito CoderHouse - React"></ItemListContainer>
      <NavBar></NavBar>
      <ItemDetailContainer></ItemDetailContainer>*/}
    </div>
  );
}

export default App;
