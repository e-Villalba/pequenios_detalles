import {useContext} from 'react'
import { CartContext } from './CartContext';
import { useState } from 'react';

import StayBuying from './StayBuying';
import GoCart from './GoCart';

const UserData = () => {
    const test = useContext(CartContext);
    const [Accion, setAccion] = useState(''); //Hook
    const [userNombre, setuserNombre] = useState(test.userName); //Hook
    const [userApellido, setuserApellido] = useState(test.userApellido); //Hook
    const [userMail, setuserMail] = useState(test.userMail); //Hook
    const [userPhone, setuserPhone] = useState(test.userPhone); //Hook
    const handleInputChangeNombre=({target})=>{
        setuserNombre(target.value)    
    }
    const handleInputChangeApellido=({target})=>{
        setuserApellido(target.value)    
    }   
    const handleInputChangeMail=({target})=>{
        setuserMail(target.value)    
    }   

    const handleInputChangePhone=({target})=>{
        setuserPhone(target.value)    
    }   
    const handleSubmit =(e)=>{
        setAccion('DatosConfirmados')
        e.preventDefault()        
        test.addUserName(userNombre) 
        test.addUserApellido(userApellido)
        test.addUserPhone(userPhone)
        test.addUserMail(userMail)
    }
    if(!test.userName)
    {
        console.log(test.userName,"userName FUERA RETURN")
    }
    return (
                     
        
       <div className="row">
             <div className="col-md-12 text-center mt-3">
                <fieldset className="d-flex justify-content-center " >
                    <div className="card cardatosContacto">
                        <div className="card-body">
                            <div>
                        
                            {!Accion?   
                                <h3 className="mb-0">Ingrese Sus Datos</h3>
                            :
                                <h3 className="mb-0">Datos Actualizados</h3>
                            }
                            </div>
                            <form onSubmit={handleSubmit}>
                            <div>
                                <label className="pContacto datosContacto" for="idNombre">Nombre</label>
                            </div>
                            <div>
                                <input className="datosForm datosContacto w-75" type="text" name="campoNombre" id="idNombre"
                                placeholder="Ingrese su Nombre" value={userNombre} onChange={handleInputChangeNombre} required/>
                            </div>
                            <div><label className="pContacto p-1 datosContacto "  for="idApellido">Apellido</label>  </div>
                            
                            <div><input className="datosForm datosContacto w-75" type="text" name="campoApellido" id="idApellido"
                                placeholder="Ingrese su Apellido" value={userApellido} onChange={handleInputChangeApellido} required/></div>                                
                            
                            <div><label className="pContacto p-1 datosContacto" for="userEmail" >Ingrese su e-mail</label></div>
                            <div>
                                <input className="datosForm datosContacto w-75" type="email" name="campoMail" 
                                    id="userEmail" placeholder="Ingrese su e-mail" value={userMail} onChange={handleInputChangeMail} required/>
                            </div>
                            <div><label className="pContacto p-1 datosContacto" for="userPhone"  >Ingrese
                                su Nº de Teléfono</label></div>
                            <div>
                                <input className="datosForm datosContacto w-75" type="text" name="campoPhone" 
                                    id="userPhone" placeholder="Ingrese su Nº de Teléfono"  value={userPhone} onChange={handleInputChangePhone} required/>
                            </div>

                            <div>
                            {!Accion?  
                                <button type="submit" className="btn btn-primary"  id="btnDatosPasajero" value="Enviar">Registrar Datos</button>
                             :
                             <div className='col text-center'>
                             <GoCart itemsCarrito={test.cartList.length}/>
                             <StayBuying />
                            </div>
                            }

                            </div>
                            </form>
                        </div>
                    </div>
                </fieldset>
            </div>
            
        </div>
        
    );

}


export default UserData;