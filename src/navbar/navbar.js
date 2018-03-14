import React, { Component } from 'react';
import './navbar.css';
import { Button, Icon } from 'semantic-ui-react';
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import Hero from '../hero/hero';
import Render from '../render/render';

class navbar extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <div>
      <div id="backDrop">
      <Render/>
      </div>
      <div id="landPage">
      <Responsive {...Responsive.onlyComputer}>
        <Visibility>
          <Segment  textAlign='center' style={{ minHeight: 700, padding: '7em 0em' }} vertical>
            <Hero big='Hello.'/>

            <Container>
              <Menu pointing secondary fixed='bottom' size='massive'>
              <Menu.Item name='WORKS' active={activeItem === 'WORKS'} onClick={this.handleItemClick} />
              <Menu.Item name='ABOUT' active={activeItem === 'ABOUT'} onClick={this.handleItemClick} />
              <Menu.Item name='CONTACT' active={activeItem === 'CONTACT'} onClick={this.handleItemClick} />
              <Menu.Menu position='right'>
                <Menu.Item name='JAIME GONZALEZ' active={activeItem === 'JAIME GONZALEZ'} onClick={this.handleItemClick} />
              </Menu.Menu>
            </Menu>
          </Container>
          </Segment>
        </Visibility>
      </Responsive>
      <Responsive {...Responsive.onlyMobile}>
        <Visibility>
        <Segment textAlign='center' style={{ minHeight: 700, padding: '7em 0em' }} vertical>
              <Hero big='Hello.'/>
              <Container>
                <Menu  inverted vertical pointing secondary size='massive'>
                <Menu.Item name='WORKS' active={activeItem === 'WORKS'} onClick={this.handleItemClick} />
                <Menu.Item name='ABOUT' active={activeItem === 'ABOUT'} onClick={this.handleItemClick} />
                <Menu.Item name='CONTACT' active={activeItem === 'CONTACT'} onClick={this.handleItemClick} />
                <Menu.Menu position='right'>
                  <Menu.Item name='JAIME GONZALEZ' active={activeItem === 'JAIME GONZALEZ'} onClick={this.handleItemClick} />
                </Menu.Menu>
              </Menu>
            </Container>
            </Segment>
          </Visibility>
      </Responsive>
      </div>
      </div>
    );
  }
}

export default navbar;
