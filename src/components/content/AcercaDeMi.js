import React, { Component } from 'react';
import AOS from'aos'
// estilos
import './css/acercademi.css'
// component
import Skills from './Skills'

AOS.init()
class AcercaDeMi extends Component {
  render() {
    return (
      <div>
        <div className='content-main' >
          <div>
            <span className='heading' data-aos="fade-right">Acerca de mi</span>
            <span className='q-heading' data-aos="fade-right">?quien soy?</span>
            <p className='text-desc' data-aos="fade-left">Soy un estudiante de informática de DAIICT-Gandhinagar con las TIC como mi especialidad. Me encanta explorar nuevas tecnologías y, a menudo, me sorprende el progreso que nosotros, como especie humana, hemos enloquecido hasta ahora en los últimos años (¡aparte de la parte de la toma de auriculares! )</p>
            <p className='text-desc' data-aos="fade-left" >Recientemente comencé a reflejar mis ideas y pensamientos a través del medio de las palabras, por lo que los errores ortográficos y gramaticales son muy frecuentes. Puedes escribirme si ves alguna y no quieres seguir viviendo: P</p>
          </div>
        </div>
        <Skills />
      </div>
    )
  }
}
export default AcercaDeMi