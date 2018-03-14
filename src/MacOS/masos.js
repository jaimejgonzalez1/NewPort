import React, { Component } from 'react';
import { Window, TitleBar, Text } from 'react-desktop/macOs';
import { Transition } from 'react-transition-group'
 
class macOs extends Component {
  
    render() {
      return (
        <div>
              <Window
                  chrome
                  width="500px"
                  height="300px"
                  padding="5px"
                  background='black'
              >
                  <TitleBar title="jaimegonzalez -bash -- 500x300" controls/>
                  <Text color='green'>
                  Jaimes-Portfolio:~ jaimegonzalez$ cd ./AwesomeProjects/CubismDream <br/>
                  Jaimes-Portfolio:CubismDream jaimegonzalez$ npm start 
                  </Text>
              </Window>
          </div>
      )
    }
}
export default macOs;


