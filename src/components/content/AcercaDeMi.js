import React, { Component } from 'react';
import AOS from'aos'
// estilos
import './css/acercademi.css'
// component
import Skills from './Skills'
import {AboutMe} from '../data/data'
AOS.init()
class AcercaDeMi extends Component {
  render() {
    return (
      <div>
        <div className='content-main' >
          <div>
            <span className='heading' data-aos="fade-right">Acerca de mi</span>
            <span className='q-heading' data-aos="fade-right">?quien soy?</span>
            <p className='text-desc' data-aos="fade-left">{AboutMe[0]}</p>
            <p className='text-desc' data-aos="fade-left" >{AboutMe[1]}</p>
            <p className='text-desc' data-aos="fade-left" >{AboutMe[2]}</p>
          </div>
        </div>
        <Skills />
      </div>
    )
  }
}
export default AcercaDeMi