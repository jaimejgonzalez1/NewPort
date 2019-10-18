import React, { Component } from 'react'
import './navbar.css'
import { Container, Menu, Responsive, Segment, Visibility, Image } from 'semantic-ui-react'
import Hero from '../../components/hero/hero'
import Render from '../render/render'
import SmallGrid from '../grid-sm/grid-sm'
import Github from '../../assets/media/images/github-2.png'
import LinkedIn from '../../assets/media/images/linkedin.png'
import Mail from '../../assets/media/images/mail.png'
import UP from '../../assets/media/images/up-arrow.png'
import RightCard from '../../components/rightCard/rightCard'
import Work from '../works/works'
import Profile from '../../assets/media/images/cubism.png'
class navbar extends Component {
  state = { activeItem: 'JAIME GONZALEZ' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <div>
        <div id='backDrop'>
          <Render />
        </div>
        <div id='landPage'>
          <Responsive {...Responsive.onlyComputer}>
            <Visibility>
              <Segment textAlign='center' style={{ minHeight: 700, padding: '4em 0em' }} vertical>
                {activeItem === 'JAIME GONZALEZ' ? (
                  <div>
                    <Hero small='Jaime Gonzalez | Full Stack Developer' />
                    <Hero big='Hello.' />
                    <RightCard para='Come check out my work!' />
                  </div>
                ) : activeItem === 'ABOUT' ? (
                  <div>
                    <Hero big='ABOUT.' />
                    <RightCard
                      para='I am a full-stack Software Developer with a focus on User Interfaces and User Experience.
            My most recent work has been built in VueJS, Angular, NodeJS, and MongoDB, however I started my career in 
            .NET and Sql. Javascript is definitely my favorite though. 
            '
                    />
                  </div>
                ) : activeItem === 'CONTACT' ? (
                  <div>
                    <Hero big='CONTACT.' small='You can reach me anywhere' />
                    <SmallGrid github={Github} link={LinkedIn} res={UP} mail={Mail} />
                  </div>
                ) : activeItem === 'WORKS' ? (
                  <Work big='WORKS.' />
                ) : null}

                <Container>
                  <Menu id='navbar' pointing secondary fixed='bottom' size='massive'>
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
                    <Hero small='Jaime Gonzalez | Full Stack Developer' />
                    <Hero big='Hello.' para='Come check out my work!' />
                  </div>
                ) : activeItem === 'ABOUT' ? (
                  <div>
                    <Hero big='ABOUT.' />

                    <RightCard
                      para='I am a full-stack Software Developer with a focus on User Interfaces and User Experience.
            My most recent work has been built in VueJS, Angular, NodeJS, and MongoDB, however I started my career in 
            .NET and Sql. Javascript is definitely my favorite though.  
            '
                    />
                  </div>
                ) : activeItem === 'CONTACT' ? (
                  <div>
                    <Hero big='CONTACT.' small='You can reach me anywhere' />
                    <SmallGrid github={Github} link={LinkedIn} res={UP} mail={Mail} />
                  </div>
                ) : activeItem === 'WORKS' ? (
                  <Work big='WORKS.' />
                ) : null}
                <Container>
                  <Menu id='navbar' fixed='top' pointing secondary size='large'>
                    <Menu.Item name='WORKS' active={activeItem === 'Experience'} onClick={this.handleItemClick} />
                    <Menu.Item name='ABOUT' active={activeItem === 'ABOUT'} onClick={this.handleItemClick} />
                    <Menu.Item name='CONTACT' active={activeItem === 'CONTACT'} onClick={this.handleItemClick} />
                    <Menu.Menu position='right'>
                      <Menu.Item name='JG' active={activeItem === 'JAIME GONZALEZ'} onClick={this.handleItemClick} />
                    </Menu.Menu>
                  </Menu>
                </Container>
              </Segment>
            </Visibility>
          </Responsive>
          <Responsive {...Responsive.onlyTablet}>
            <Visibility>
              <Segment textAlign='center' style={{ minHeight: 700, padding: '7em 0em' }} vertical>
                {activeItem === 'JAIME GONZALEZ' ? (
                  <div>
                    <Hero small='Jaime Gonzalez | Full Stack Developer' />
                    <Hero big='Hello.' para='Come check out my work!' />
                  </div>
                ) : activeItem === 'ABOUT' ? (
                  <div>
                    <Hero big='ABOUT.' />

                    <RightCard
                      para='I am a full-stack Software Developer with a focus on User Interfaces and User Experience.
            My most recent work has been built in VueJS, Angular, NodeJS, and MongoDB, however I started my career in 
            .NET and Sql. Javascript is definitely my favorite though. 
            '
                    />
                  </div>
                ) : activeItem === 'CONTACT' ? (
                  <div>
                    <Hero big='CONTACT.' small='You can reach me anywhere' />
                    <SmallGrid github={Github} link={LinkedIn} res={UP} mail={Mail} />
                  </div>
                ) : activeItem === 'WORKS' ? (
                  <Work big='WORKS.' />
                ) : null}
                <Container>
                  <Menu id='navbar' fixed='top' pointing secondary size='large'>
                    <Menu.Item name='WORKS' active={activeItem === 'Experience'} onClick={this.handleItemClick} />
                    <Menu.Item name='ABOUT' active={activeItem === 'ABOUT'} onClick={this.handleItemClick} />
                    <Menu.Item name='CONTACT' active={activeItem === 'CONTACT'} onClick={this.handleItemClick} />
                    <Menu.Menu position='right'>
                      <Menu.Item name='JG' active={activeItem === 'JAIME GONZALEZ'} onClick={this.handleItemClick} />
                    </Menu.Menu>
                  </Menu>
                </Container>
              </Segment>
            </Visibility>
          </Responsive>
        </div>
      </div>
    )
  }
}

export default navbar
