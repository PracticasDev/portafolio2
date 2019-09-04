import React,{ Component} from 'react';
import './welcome.css'
class Welcome extends Component{
  render(){
    return(
      <div className='welcome animated '>
        {console.log(this.props)}
        <div className='welcome-contenido ' >
            <img src={require('../../assets/icons/developer.png')} alt='me'  className='logo-bienvenido animated fadeInDown'/>
            <p className='welcome-text animated fadeInUp' > Permiteme presentarme </p> 
        </div>
      </div>
    )
  }
}
export default Welcome;