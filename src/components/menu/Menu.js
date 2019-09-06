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
    showMenu :false
  }
  changeMenu = (e) => {
    e.preventDefault()
    console.log(this.state.showMenu)
    console.log(window.innerWidth)
    this.setState( (state) => ({
      showMenu: !state.showMenu
    }) )
  }
  render() {
    return (
      <div>
        <div className={ this.state.showMenu && window.innerWidth <= 768? 'menu-nav-move': 'menu-nav'} onClick={this.changeMenu}>
          <img src={require('../../assets/icons/menu.png')} alt='menu' height='50px' className='menu-icon' />
        </div>
        <div className = { this.state.showMenu ? 'showMenu': 'aside-main'}>
          <Perfil />
          <Navegacion mostrar={this.changeMenu}/>
          <Contacto />
          <FooterMenu />
        </div>
      </div>
    )
  }
}
export default Menu