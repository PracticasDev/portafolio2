import React, { Component } from 'react';
import './css/skill.css'
class Skill extends Component {
  web = require('../../assets/services/web.png')
  skills = [
    {
      nombre: 'WEB',
      img: require('../../assets/services/web.png'),
      titulo: 'WEB DEVELOPMENT',
      contenido: ' I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS'
    }, {
      nombre: 'ANDROIDE',
      img: require('../../assets/services/androide.png'),
      titulo: 'DATA STRUCTURES & ALGORITHMS',
      contenido: 'As coming from the CS background, I have good grasp over fundamental concepts of DSA'
    }, {
      nombre: 'BASE DE DATOS',
      img: require('../../assets/services/base-de-datos.png'),
      titulo: 'DEV OPS',
      contenido: 'I am pursuing my internship with DevOps team at Juniper and working with tools like Jenkins, Docker, K8s'
    }
  ]
  render() {
    return (
      <div>
        {this.skills.map((skill) => {
          return (
            <div className='animated fadeInUp text-center'>
              <div className='service-content' >
                <span className='icon' >
                  <img src={skill.img} alt={skill.nombre} height='80px' />
                </span>
                <div className='descripsion-text' >
                  <h3>
                    {skill.titulo}
                  </h3>
                  <p>
                    {skill.contenido}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
export default Skill