import React, { Component, Fragment } from 'react';
import 'aframe-react';
import { Scene } from 'aframe-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
          <Scene embedded arjs>
            {/*<!-- create your content here. just a box for now -->*/}
            <a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
            {/*<!-- define a camera which will move according to the marker position -->*/}
            <a-marker-camera preset='hiro'></a-marker-camera>
          </Scene>
    );
  }
}

export default App;
