import React, {Component} from 'react';
import {Rutas} from '../data/data'
// estilos
import './css/navegacion.css'
class Navegacion extends Component{

  render(){
    return(
      <div className='navegacion' >
        {Rutas.map((ruta, key) => {
          return(
            <li className='main-link' key={key} >
              <p className='rutas'> {ruta} </p>
            </li>
          )
        })}
      </div>
    )
  }
}
export default Navegacion