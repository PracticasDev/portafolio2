import React, { Component } from 'react';

// estilos
import './css/footermenu.css'
class FooterMenu extends Component {

  pasion = require('../../assets/icons/pasion.png')
  creatividad = require('../../assets/icons/creatividad.png')

  render() {
    return (
      <div className='pie-menu' >
        <p className='text-footer' >
        Hecho con 
        <img src={this.creatividad} alt='creatividad' height='25px' /> 
        y 
        <img src={this.pasion} alt='pasion'  height='25px' />
        </p>
      </div>
    )
  }
}
export default FooterMenu