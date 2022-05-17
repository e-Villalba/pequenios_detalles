import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/main.css'
import imgLogo2 from "../imagenes/PD_LOGO.png"
import CartWidget from '../Components/CartWidget';
const NavBar = () => {

  return (
    <>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 container-fluid bg-dark d-flex align-items-center">
          <img class="imgLogo ml-3" src={imgLogo2} alt="LogoHotel" />
        </div>
        <div class="col-md-6 p-0 d-flex justify-content-center bg-dark">
          <nav class="navbar navbar-expand-lg navbar-dark ">

            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon menuBurguer"></span>
            </button>
            <div class="collapse navbar-collapse  menu" id="navbarNav">
              <ul class="navbar-nav text-center fa-ul ulMargin">
                <li class="nav-item px-3">
                  <a class="nav-link active opcionesMenu" href="#"> Remeras</a>
                </li>
                <li class="nav-item px-3">
                  <a class="nav-link opcionesMenu" href="#"> Buzos</a>
                </li>
                <li class="nav-item px-3" >
                  <a class="nav-link opcionesMenu" href="#" > Camisetas</a>
                </li>
                <li class="nav-item px-3">
                  <a class="nav-link opcionesMenu" href="#"> Musculosas</a>
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