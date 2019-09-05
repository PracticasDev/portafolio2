import React, {Component} from 'react';
// componentes
import Presentacion from './Presentacion';
import AcercaDeMi from './AcercaDeMi';
import Formulario from './Formulario';
// estilos
import './css/content.css'
class Content extends Component{
  render(){
    return(
      <div className='main-content' >
        <Presentacion/>
        <AcercaDeMi/>
        <Formulario/>
      </div>
    )
  }
}
export default Content