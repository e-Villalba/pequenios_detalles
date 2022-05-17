import './App.css';
import './Components/NavBar';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
const App=() =>{
  return (
    <div className="App">
      
      <NavBar></NavBar>
      <ItemListContainer greeting="Hola a mi primer Carrito CoderHouse - React"></ItemListContainer>
    </div>
  );
}

export default App;
