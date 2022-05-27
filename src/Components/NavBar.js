import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/main.css'
import imgLogo2 from "../imagenes/PD_LOGO.png"
import CartWidget from '../Components/CartWidget';
const NavBar = () => {

  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 container-fluid bg-dark d-flex align-items-center">
          <img className="imgLogo ml-3" src={imgLogo2} alt="LogoHotel" />
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
                  <a className="nav-link active opcionesMenu" href="#"> Remeras</a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link opcionesMenu" href="#"> Buzos</a>
                </li>
                <li className="nav-item px-3" >
                  <a className="nav-link opcionesMenu" href="#" > Camisetas</a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link opcionesMenu" href="#"> Musculosas</a>
                </li>

              </ul>

            </div>
          </nav>
        </div>
        <div className='col-md-3 container d-flex bg-dark justify-content-center align-items-center'>
          <div >
          <CartWidget></CartWidget>          
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