import React, { Component } from 'react';
import './css/presentacion.css'
class Presentacion extends Component {

  slides = [
    {
      titulo: 'ACERCA DE MI',
      contenido: 'Me gusta desarrollar aulquier cosa, no importa si sea algo simple o complejo, siempre voy a cumplirlo',
      img: require('../../assets/slide/slide1.jpg'),
      propiedades: {
        id: 'img-1',
        pre: 'img-3',
        next: 'img-2',
      }
    }, {
      titulo: 'MOBILE DEVELOPMENT',
      contenido: 'Me gusta desarrollar aulquier cosa, no importa si sea algo simple o complejo, siempre voy a cumplirlo',
      img: require('../../assets/slide/slide2.png'),
      propiedades: {
        id: 'img-2',
        pre: 'img-1',
        next: 'img-3',
      }
    }, {
      titulo: 'WEB DEVELOPMENT',
      contenido: 'Me gusta desarrollar aulquier cosa, no importa si sea algo simple o complejo, siempre voy a cumplirlo',
      img: require('../../assets/slide/slide3.jpg'),
      propiedades: {
        id: 'img-3',
        pre: 'img-2',
        next: 'img-1',
      }
    }
  ]

  render() {
    return (
      <div>
        <div>
          <div className="carousel">
            <ul className="slides">
              {
                this.slides.map((slide) => {
                  return (
                    <div>
                      <input type="radio" name="radio-buttons" id={slide.propiedades.id} checked />
                      <li className="slide-container">
                        <div className="slide-image">
                          <img src={slide.img} alt={slide.titulo} />
                        </div>
                        <div className="carousel-controls">
                          <label for={slide.propiedades.pre} className="prev-slide">
                            <span>&lsaquo;</span>
                          </label>
                          <label for={slide.propiedades.next} className="next-slide">
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