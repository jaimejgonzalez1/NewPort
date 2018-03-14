import React, { Component } from 'react';
import './App.css';
import { Button, Icon } from 'semantic-ui-react';
import Navbar  from './navbar/navbar';
import Hero from './hero/hero';
import Page from './page/page';
import Mac from './MacOS/masos';
import Some from './render/render';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Mac/>
      </div>
    );
  }
}

export default App;
