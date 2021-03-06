import React, { Component } from 'react';
import { DataPersonal } from '../data/data'
// estilos
import './css/perfil.css'
class Perfil extends Component {
  logo = require('../../assets/perfil/LogoPerfil.png')
  logoMail = require('../../assets/icons/correo.png')
  render() {
    return (
      <div className='card hovercard'>
        <div className='cardheader' >
          <div className='cardheader' >
          </div>
          <div className='avatar' >
            <img src={this.logo} alt='logo' />
          </div>
        </div>
        <div className='info' >
          <div className='title'>
            <h3>{DataPersonal.nombre}, {DataPersonal.apellido}</h3>
            <p className='email-content' >
              <img src={this.logoMail} className="logo-email" alt='email' height='20px' />
              {DataPersonal.correo}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default Perfil