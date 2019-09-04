import React, { Component } from 'react';
import {Logos} from '../data/data'
// estilos
import './css/navegacion.css'
class Contacto extends Component {
  render() {
    return (
      <div className='navegacion' >
        {Logos.map((logo, key) => {
          return (
            <li className='main-link' key={key} >
              <p className='rutas'>
                <img src={logo.img} alt={logo.social} height='25px' />
              </p>
            </li>
          )
        })
        }
      </div>
    )
  }
}
export default Contacto