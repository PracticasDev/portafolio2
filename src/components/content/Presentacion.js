import React, { Component } from 'react';
import './css/presentacion.css'
import {Slides} from '../data/data'
class Presentacion extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="carousel">
            <ul className="slides">
              {
                Slides.map((slide, key) => {
                  return (
                    <div key={key} >
                      <input type="radio" name="radio-buttons" id={slide.propiedades.id} checked />
                      <li className="slide-container">
                        <div className="slide-image">
                          <img src={slide.img} alt={slide.titulo} className='imagen-slide'/>
                        </div>
                        <div className="carousel-controls">
                          <label htmlFor={slide.propiedades.pre} className="prev-slide">
                            <span>&lsaquo;</span>
                          </label>
                          <label htmlFor={slide.propiedades.next} className="next-slide">
                            <span>&rsaquo;</span>
                          </label>
                        </div>
                      </li>
                    </div>
                  )
                })
              }
            </ul>
          </div>
        </div>

      </div>
    )
  }
}
export default Presentacion