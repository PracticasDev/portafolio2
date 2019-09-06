import React, { Component } from 'react';
// component
import Skill from './Skill'
// css
import './css/acercademi.css'

class Skills extends Component {
  render() {
    return (
      <div className='content-main' >
        <span className='heading' data-aos="fade-right" id="acercademi">¿que hago?</span>
        <span className='q-heading' data-aos="fade-right">aqui estan algunas de mis habilidades</span>
        <Skill />
      </div>
    )
  }
}
export default Skills