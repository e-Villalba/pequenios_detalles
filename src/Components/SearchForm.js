import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from "@fortawesome/free-solid-svg-icons"

import { faMagnifyingGlassArrowRight } from "@fortawesome/free-solid-svg-icons"

const SearchForm = () => {


    return (
        <>
            <div className='row d-flex align-items-center justify-content-center'>
                <div className="d-flex">
                    <input class="datosForm datosContacto" type="text" name="campoNombre" id="idNombre"
                        placeholder="Ingrese su Nombre"></input>
                        <FontAwesomeIcon className="mt-2 ms-3" size="xl" icon={faMagnifyingGlassArrowRight} inverse ></FontAwesomeIcon>
                </div>

                <div className='d-flex'>
                    
                </div>
            </div>

        </>

    );
}

export default SearchForm;