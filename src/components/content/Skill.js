import React, { Component } from 'react';
import './css/skill.css';
import {Habilidades} from '../data/data';
 
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()
class Skill extends Component {
  render() {
    return (
      <div className='skill-content'  >
        {Habilidades.map((skill, key) => {
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
                    {skill.skill.map((hab, key)=>{
                      return(
                        <li key={key} >
                          {hab}
                        </li>
                      )
                    })}
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