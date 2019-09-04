import React, { Component } from 'react';
//componentes 
import Perfil from './Perfil';
import Navegacion from './Navegacion';
import Contacto from './Contacto';
import FooterMenu from './FooterMenu';
// estilos
import './css/menu.css'
class Menu extends Component {
  pintarMenuAmburguesa = () => {
    return (
      <div>
        <img src={require('../../assets/icons/menu.png')} alt='menu' height='500px' className='menu-icon' />
      </div>
    )
  }
  render() {
    return (
      <div>
        {/* {this.pintarMenuAmburguesa()} */}
        <div className='aside-main'>
          <Perfil />
          <Navegacion />
          <Contacto />
          <FooterMenu />
        </div>
      </div>
    )
  }
}
export default Menu