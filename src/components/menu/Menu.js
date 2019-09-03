import React, {Component} from 'react';
//componentes 
import Perfil from './Perfil';
import Navegacion from './Navegacion';
import Contacto from './Contacto';
import FooterMenu from './FooterMenu';
// estilos
import './css/menu.css'
class Menu extends Component{
  render(){
    return(
      <div>
        <div className='aside-main'>
          <Perfil/>
          <Navegacion/>
          <Contacto/>
          <FooterMenu/>
        </div>
      </div>
    )
  }
}
export default Menu