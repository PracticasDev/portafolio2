import React, { Component } from 'react';
//componentes 
import Perfil from './Perfil';
import Navegacion from './Navegacion';
import Contacto from './Contacto';
import FooterMenu from './FooterMenu';
// estilos
import './css/menu.css'
class Menu extends Component {
  state = {
    showMenu: false
  }
  changeMenu = () => {
    console.log(this.state.showMenu)
    if (!this.showMenu) {
      this.setState({
        showMenu: true
      })
    }
  }
  render() {
    return (
      <div>
        <div className="menu-nav" >
          <img src={require('../../assets/icons/menu.png')} alt='menu' height='50px' className='menu-icon' />
        </div>
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