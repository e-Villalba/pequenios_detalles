import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { faMagnifyingGlassArrowRight } from "@fortawesome/free-solid-svg-icons"

const SearchForm = () => {


    return (
        <>
            <div className='row d-flex align-items-center justify-content-center'>
                <div className="d-flex">
                    <input className="datosForm datosContacto" type="text" name="campoNombre" id="idNombre"
                        placeholder=""></input>
                        <FontAwesomeIcon className="mt-2 ms-3" size="xl" icon={faMagnifyingGlassArrowRight} ></FontAwesomeIcon>
                </div>

                <div className='d-flex'>
                    
                </div>
            </div>

        </>

    );
}

export default SearchForm;