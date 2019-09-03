import React, { Component } from 'react';
// component
import Skill from './Skill'
// css
import './css/acercademi.css'

class Skills extends Component {
  render() {
    return (
      <div className='animated fadeInLeft content-main'>
        <span className='heading'> ?que hago?</span>
        <span className='q-heading'>aqui estan algunas de mis habilidades</span>
        <Skill />
      </div>
    )
  }
}
export default Skills