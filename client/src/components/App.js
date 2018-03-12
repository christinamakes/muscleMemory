import React, { Component } from 'react';
import './styles/App.css';
// import Tilt from 'react-tilt';
import NavBar from './navBar';

class App extends Component {
  onMouseLeave(e) {
    console.log('clientY:', e.nativeEvent.clientY);
  }
  render() {
    return (
      // <div className="App">
      //     <Tilt className="Tilt" style={{ height: 1750, width: 1750 }} options={{ max : 5, scale: 1 }} onMouseLeave={this.onMouseLeave}>
      //       <div className="Tilt-inner">
      //       <p>hi</p>
      //       </div>
      //     </Tilt>
      // </div>
      <div>
        <NavBar />
      </div>
    );
  }
}
export default App;