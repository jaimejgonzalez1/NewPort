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
import SmallGrid from '../grid-sm/grid-sm';
import Github from '../media/images/github-2.png'
import LinkedIn from '../media/images/linkedin.png'
import Mail from '../media/images/mail.png'
import UP from '../media/images/up-arrow.png'
import RightCard from '../rightCard/rightCard'
import Work from '../works/works';

class navbar extends Component {

  state = { activeItem: 'JAIME GONZALEZ' }
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
          <Segment  textAlign='center' style={{ minHeight: 700, padding: '4em 0em' }} vertical>
          {activeItem === 'JAIME GONZALEZ' ? (
            <div>
            <Hero small="Jaime Gonzalez | Full Stack Developer"/>
            <Hero big="Hello."para="Come check out my work!"/>
            </div>
          ) : activeItem === 'ABOUT' ? (
            <div>
            <Hero big='ABOUT.'/>
          
            <RightCard para="I am a full-stack Software Developer with a focus on front-end technologies.
            My most recent projects have been built in React, Node, and MongoDB however I started with 
            Angular,.NET, and Sql Server but I'm very flexible to implement any technology that suits the project. 
            "/>
            </div>
          ): activeItem === 'CONTACT' ? (
            <div>
            <Hero big='CONTACT.' small="You can reach me anywhere"/>
            <SmallGrid github= {Github} link ={LinkedIn} res={UP} mail={Mail}  />
            </div>
          ): activeItem === 'WORKS' ? (
            <Work big="WORKS."/>
          ): null}
     

{/* NavBar at Footer */}
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
        {activeItem === 'JAIME GONZALEZ' ? (
            <div>
            <Hero small="Jaime Gonzalez | Full Stack Developer"/>
            <Hero big="Hello."para="Come check out my work!"/>
            </div>
          ) : activeItem === 'ABOUT' ? (
            <div>
            <Hero big='ABOUT.'/>
          
            <RightCard para="I am a full-stack Software Developer with a focus on front-end technologies.
            My most recent projects have been built in React, Node, and MongoDB however I started with 
            Angular,.NET, and Sql Server but I'm very flexible to implement any technology that suits the project. 
            "/>
            </div>
          ): activeItem === 'CONTACT' ? (
            <div>
            <Hero big='CONTACT.' small="You can reach me anywhere"/>
            <SmallGrid github= {Github} link ={LinkedIn} res={UP} mail={Mail}  />
            </div>
          ): activeItem === 'WORKS' ? (
            <Work big="WORKS."/>
          ): null}
              <Container>
                <Menu   vertical pointing secondary size='massive'>
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

