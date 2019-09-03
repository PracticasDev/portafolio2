import React, {Component} from 'react';

// estilos
import './css/navegacion.css'
class Navegacion extends Component{

  rutas= [
    'Presentacion',
    'Acerca de mi',
    'algo mas'
  ]

  render(){
    return(
      <div class='navegacion' >
        {this.rutas.map((ruta) => {
          return(
            <li className='main-link' >
              <p className='rutas'> {ruta} </p>
            </li>
          )
        })}
      </div>
    )
  }
}
export default Navegacion