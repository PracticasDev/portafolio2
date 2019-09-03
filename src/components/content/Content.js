import React, {Component} from 'react';
// componentes
import Presentacion from './Presentacion';
import AcercaDeMi from './AcercaDeMi';
// estilos
import './css/content.css'
class Content extends Component{
  render(){
    return(
      <div className='main-content' >
        <Presentacion/>
        <AcercaDeMi/>
      </div>
    )
  }
}
export default Content