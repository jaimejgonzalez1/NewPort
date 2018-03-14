import React, { Component } from 'react';
import { Window, TitleBar, Text } from 'react-desktop/macOs';
import { Transition } from 'react-transition-group'

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  padding: 20,
  display: 'inline-block',
  backgroundColor: '#fff'
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
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
    )}
  </Transition>
);
 
class macOs extends Component {
    state = { show: false }

    handleToggle() {
      this.setState(({ show }) => ({
        show: !show
      }))
    }
    
    render() {
      const { show } = this.state
      return (
        <div>
          <button onClick={() => this.handleToggle()}>
            Click to toggle
          </button>
          <div>
            <Fade in={!!show} />
          </div>
        </div>
      )
    }
}
export default macOs;


