import React, { Component } from 'react';

// estilos
import './css/navegacion.css'
class Contacto extends Component {
  logos = [
    {
      img: require('../../assets/social/facebook.png'),
      enlace: '#',
      social:'facebook'
    },
    {
      img: require('../../assets/social/instagram.png'),
      enlace: '#',
      social:'instagram'
    },
    {
      img: require('../../assets/social/linkedin.png'),
      enlace: '#',
      social:'linkedin'
    },
    {
      img: require('../../assets/social/skype.png'),
      enlace: '#',
      social:'skype'
    },
    {
      img: require('../../assets/social/twitter.png'),
      enlace: '#',
      social:'twitter'
    }
  ]
  render() {
    return (
      <div className='navegacion' >
        {this.logos.map((logo, key) => {
          return (
            <li className='main-link' key={key} >
              <p className='rutas'>
                <img src={logo.img} alt={logo.social} height='25px' />
              </p>
            </li>
          )
        })
        }
      </div>
    )
  }
}
export default Contacto