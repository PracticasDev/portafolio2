import React, { Component } from 'react';

// component
import Menu from './menu/Menu';
import Content from './content/Content';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Content />
      </div>
    )
  }
}
export default App