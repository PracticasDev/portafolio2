import React, { Component } from 'react';

// component
import Menu from './menu/Menu';
import Content from './content/Content';
import Welcome from './welcome/Welcome';
class App extends Component {
  state = {
    welcome: true,
    time: 0 
  } 
  // componentDidMount(){
  //   setInterval((time) => {
  //     this.setState({
  //       welcome: false,
  //       time: time
  //     })
  //   }, 2000);
  // }
  render() {
    // if(this.state.welcome){
    //   return <Welcome time={this.state.time}/>
    // }else{
    return (
      <div className='main animated fadeIn'>
        <Menu />
        <Content />
      </div>
    )
    // }
  }
}
export default App