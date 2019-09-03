import React, {Component} from 'react';

// estilos
import './css/perfil.css'
class Perfil extends Component{
  dataPersonal = {
    nombre: 'Genderson',
    apellido: 'Canchari Lizarbe',
    correo: 'yegecali5@gmail.com'
  }

  logo = require('../../assets/perfil/LogoPerfil.png')
  logoMail = require('../../assets/icons/correo.png')

  render(){
    return(
      <div className='card hovercard'>  
        <div className='cardheader' >
          <div className='cardheader' >
          </div>
          <div className='avatar' >
            <img src={this.logo} alt='logo' />
          </div>
          <div className='info' >
            <div className='title'>
              <h3>{this.dataPersonal.nombre}, {this.dataPersonal.apellido}</h3>
              <p className='email-content' >
                <img src={ this.logoMail } className="logo-email"  alt='email' height='20px'/>
                {this.dataPersonal.correo}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Perfil