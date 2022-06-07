import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/main.css'
import imgLogo2 from "../imagenes/PD_LOGO.png"
import CartWidget from '../Components/CartWidget';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

const NavBar = () => {

  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 container-fluid bg-dark d-flex align-items-center">
            <Link to="/"><img className="imgLogo ml-3" src={imgLogo2} alt="Logo PD" /></Link>
          </div>
          <div className="col-md-6 p-0 d-flex justify-content-center bg-dark">
            <nav className="navbar navbar-expand-lg navbar-dark ">

              <a className="navbar-brand" href="#"></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon menuBurguer"></span>
              </button>
              <div className="collapse navbar-collapse  menu" id="navbarNav">
                <ul className="navbar-nav text-center fa-ul ulMargin">
                  <li className="nav-item px-3">
                    <Link className="opcionesMenu" to={'/category/1'}>  Remeras</Link>
                  </li>
                  <li className="nav-item px-3">
                    <Link className="opcionesMenu" to={'/category/2'}> Buzos</Link>
                  </li>
                  {/*<SearchForm></SearchForm>*/}


                </ul>

              </div>
            </nav>
          </div>
          <div className='col-md-3 container d-flex bg-dark justify-content-center align-items-center'>
            <div >
              <Link to='/cart'> <CartWidget></CartWidget></Link>
            </div>
            <div>


            </div>
          </div>
        </div>
      </div>
    </>
  );

}
export default NavBar;