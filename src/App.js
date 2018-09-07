import React, { Component } from 'react';
import 'aframe-react';
import { Scene } from 'aframe-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
          <Scene embedded arjs>
            {/*<a-text value="Michael Marlow bruhhhhh"
                    position="-0.5 0.9 0"
                    rotation="-90 0 0"
                    color="black"
            >
            </a-text>*/}
            <a-text value="Michael Marlow"
                    position="-1 -2.0 0"
                    rotation="-90 0 0"
                    color="white"
            >
            </a-text>
            {/*<!-- create your content here. just a box for now -->*/}
            <a-entity geometry="primitive: box; depth=0.0 height=0.5 width=0.5"
                      position='0 0.5 0'
                      material='color: blue; opacity: 0.5;'

            >
              <a-animation attribute="material.color"
                         begin="2000"
                         from="red"
                         to="blue"
              >
              </a-animation>
              <a-animation attribute="scale"
                           begin="2000"
                           to="0 0.5 0.5"
              >
              </a-animation>
              <a-text value="Michael Marlow bruhhhhh"
                      position="-1 1.0 0"
                      rotation="-90 0 0"
                      color="black"
              ></a-text>
          </a-entity>
            {/*<!-- define a camera which will move according to the marker position -->*/}
            <a-marker-camera preset='hiro'></a-marker-camera>
          </Scene>
    );
  }
}

export default App;
