import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/main.css'
import imgLogo2 from "../imagenes/PD_LOGO.png"

const NavBar = () => {

  return (
    <>
             <div class="col-md-12 p-0">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid ">
                  <img class="imgLogo mb-3" src={imgLogo2}   alt="LogoHotel"/>                    
                                 
                  <a class="navbar-brand me-0" href="#"></a>
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
                        <a class="nav-link opcionesMenu" href="#"> Musculosa</a>
                      </li>                      
                    </ul>
                  </div>
                </div>
            </nav>
        </div>

    </>
  );

}
export default NavBar;