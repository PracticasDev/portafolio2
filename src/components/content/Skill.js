import React, { Component } from 'react';
import './css/skill.css'
 
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()
class Skill extends Component {
  skills = [
    {
      nombre: 'WEB',
      img: require('../../assets/services/web.png'),
      titulo: 'WEB DEVELOPMENT',
      contenido: ' I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS',
      skill:['Html', 'JavaScript', 'Css', 'React']
    }, {
      nombre: 'ANDROIDE',
      img: require('../../assets/services/androide.png'),
      titulo: 'DATA STRUCTURES & ALGORITHMS',
      contenido: 'As coming from the CS background, I have good grasp over fundamental concepts of DSA',
      skill:['react-native', 'android studio', ]
    }, {
      nombre: 'BASE DE DATOS',
      img: require('../../assets/services/base-de-datos.png'),
      titulo: 'DEV OPS',
      contenido: 'I am pursuing my internship with DevOps team at Juniper and working with tools like Jenkins, Docker, K8s'
    }
  ]
  
  render() {
    return (
      <div className='skill-content' >
        {this.skills.map((skill, key) => {
          return (
            <div className='text-center skill' data-aos="fade-in" key={key}>
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