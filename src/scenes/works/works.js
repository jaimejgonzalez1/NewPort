import React, { Component } from 'react';
import './works.css';
import { Card, Modal,Header,Image,List,Responsive,Button } from 'semantic-ui-react';
import mvem from '../../assets/media/images/Mvem.jpg'
import projt from '../../assets/media/images/Projt.jpg'
import Core from '../../assets/media/images/Core.jpg'
import Rev from '../../assets/media/images/Rev.jpg'
import Wal from '../../assets/media/images/Wal.jpg'
import Assure from '../../assets/media/images/assureLogo.png'
import Aure from '../../assets/media/images/assure.png';
import video from '../../assets/media/images/MVEMJSUN.mp4';

class works extends Component {
  state = { 
    openAssure: false,
    openWalmart: false,
    openRevature: false,
    openMvemjsun: false,
    openCores: false,
    openThomas: false,
  }

  showAssure = () => this.setState({ openAssure: true })
  showWalmart = () => this.setState({ openWalmart: true })
  showRevature= () => this.setState({ openRevature: true })
  showMvemjsun = () => this.setState({ openMvemjsun: true })
  showCores = () => this.setState({ openCores: true })
  showThomas = () => this.setState({ openThomas: true })
  closeAssure = () => this.setState({ openAssure: false })
  closeWalmart = () => this.setState({ openWalmart: false })
  closeRevature= () => this.setState({ openRevature: false })
  closeMvemjsun = () => this.setState({ openMvemjsun: false })
  closeCores = () => this.setState({ openCores: false })
  closeThomas = () => this.setState({ openThomas: false })


  render() {
    const { openAssure,openCores,openMvemjsun,openRevature,openThomas,openWalmart } = this.state
    return (
      <div>
        <div className='worksGrid'>
        <h1>Professional Works</h1>
            <Card.Group stackable itemsPerRow={3}>
                <Card as='a' onClick={this.showAssure} target="_blank" color='blue' 
                image={Assure}     
                header='Assure Services'
                meta='Glassboard Platform'
                description='The First Private Equity Investment Platform' />
                <Card as='a' onClick={this.showWalmart} target="_blank"  color='blue' 
                image={Wal}     
                header='Walmart '
                meta='Application Development'
                description='International Customs Transfer Portal'  />
                <Card as='a' onClick={this.showRevature} target="_blank"  color='blue' 
                image={Rev}     
                header='Revature'
                meta='Single Sign On Service'
                description='A single sign on service for business authenication and authorization'/>
            </Card.Group>
            <h1>Personal Works</h1>
            <Card.Group stackable itemsPerRow={3}>
            <Card as='a' onClick={this.showMvemjsun} target="_blank" color='blue' 
                image={mvem}     
                header='MVEMJSUN'
                meta='Interactive Kinect Project'
                description='3D interaction installation built using C#, Unity3D and Microsoft Kinect' />
                 <Card as='a' onClick={this.showCores} target="_blank" color='blue' 
                image={Core}     
                header='The Cores'
                meta='iOS application'
                description='Swift iOS Spritekit Game'/>
                <Card as='a' onClick={this.showThomas} target="_blank" color='blue' 
                image={projt}     
                header='Project Thomas'
                meta='Low Cost Production Robot'
                description='Experiment to produce small scale humanoid robot'   /> 
              </Card.Group>
          </div>
      {/* ******************************Modals****************************** */}
          <Modal className='container' basic closeIcon  size='fullscreen' open={openAssure} onClose={this.closeAssure}>
            <div className='modal-container'>
              <Modal.Content>
              <div className='row'>
                <div className='column'>
                <div className='image-container'>
                  <Image className='assureBackground' src={Aure}></Image>
                  </div>
                  <Header as='h1' color='teal'>Assure Services</Header>
                  <List  divided inverted relaxed className='list' verticalAlign='middle' size='medium'>
                  <List.Item>
                      <List.Content>
                        <List.Header>Position</List.Header>
                          Software Engineer
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Technology</List.Header>
                        Angular, NgRx, MongoDB, Mongoose, Adobe Suite, Node.js
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Description</List.Header>
                        I am the primary designer and software engineer on a software suite called Glassboard by Assure Services.
                        Glassboard is designed to create the first private transaction platform.
                      </List.Content>
                    </List.Item> 
                  </List>
                </div>
              </div>
              </Modal.Content>
            </div>
        </Modal>

          <Modal className='container' basic closeIcon size='fullscreen' open={openWalmart} onClose={this.closeWalmart}>
          <div className='modal-container'>
          <Modal.Content>
              <div className='row'>
                <div className='column'>
                  <div className='image-container'>
                  <Image className='assureBackground' src={Wal}></Image>
                  </div>
                  <Header as='h1' color='teal'>Walmart</Header>
                  <List  divided inverted relaxed className='list' verticalAlign='middle' size='medium'>
                  <List.Item>
                      <List.Content>
                        <List.Header>Position</List.Header>
                          Software Engineer
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Technology</List.Header>
                        Angular, SQL, NHybrid, MQ
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Description</List.Header>
                        I primarily worked on a platform to automate International Customs documentation on transactions.
                        I also worked on creating Middleware to transfer Inventory data across multiple servers worldwide 
                        and an error tracking chrome extension for vendors to request assistance.
                        
                      </List.Content>
                    </List.Item> 
                  </List>
                </div>
              </div>
              </Modal.Content>
            </div>
        </Modal>

          <Modal className='container' basic closeIcon size='fullscreen' open={openRevature} onClose={this.closeRevature}>
          <div className='modal-container'>
          <Modal.Content>
              <div className='row'>
                <div className='column'>
                <div className='image-container'>
                  <Image className='assureBackground' src={Rev}></Image>
                  </div>
                  <Header as='h1' color='teal'>Revature</Header>
                  <List  divided inverted relaxed className='list' verticalAlign='middle' size='medium'>
                  <List.Item>
                      <List.Content>
                        <List.Header>Position</List.Header>
                          Software Engineer
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Technology</List.Header>
                       Angular, C#, SQL, Entity Framework
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Description</List.Header>
                        I helped designed and create a Single Sign On Service for Revatue and their employees within their internal platform.
                      </List.Content>
                    </List.Item> 
                  </List>
                </div>
              </div>
              </Modal.Content>
            </div>
        </Modal>

          <Modal className='container' basic closeIcon size='fullscreen' open={openMvemjsun} onClose={this.closeMvemjsun}>
          <div className='modal-container'>
          <Modal.Content>
              <div className='row'>
                <div className='column'>
                <div className='image-container'>
                <video width="600" height="300" autoPlay controls>
                  <source src={video} type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>
                </div>
                  <Header as='h1' color='teal'>MVEMJSUN</Header>
                  <List  divided inverted relaxed className='list' verticalAlign='middle' size='medium'>
                  <List.Item>
                      <List.Content>
                        <List.Header>Position</List.Header>
                          Software Developer and 3D Designer
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Technology</List.Header>
                          C#, Unity3D, Sketch
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Description</List.Header>
                        A personal project I was apart of that aimed to create a 3D Renditon of the solar system utilizing Motion Tracking.
                        The project was aimed to build a Interactive installation for the Museum of Sciene and Industry in Chicago.
                      </List.Content>
                    </List.Item> 
                  </List>
                </div>
              </div>
              </Modal.Content>
            </div>
        </Modal>

          <Modal className='container' basic closeIcon size='fullscreen' open={openCores} onClose={this.closeCores}>
           <div className='modal-container'>
           <Modal.Content>
              <div className='row'>
                <div className='column'>
                <div className='image-container'>
                  <Image className='assureBackground' src={Core}></Image>
                  </div>
                  <Header as='h1' color='teal'>The Cores</Header>
                  <List  divided inverted relaxed className='list' verticalAlign='middle' size='medium'>
                  <List.Item>
                      <List.Content>
                        <List.Header>Position</List.Header>
                          Software Developer and Creator
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Technology</List.Header>
                        Swift, XCode
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Description</List.Header>
                        The game was created in Swift just to understand the technology and the Apple Development Ecosystem.
                      </List.Content>
                    </List.Item> 
                  </List>
                </div>
              </div>
              </Modal.Content>
            </div>
        </Modal>
        <Modal className='container' basic closeIcon size='fullscreen' open={openThomas} onClose={this.closeThomas}>
         <div className='modal-container'>
         <Modal.Content>
              <div className='row'>
                <div className='column'>
                <div className='image-container'>
                  <Image className='assureBackground' src={projt}></Image>
                  </div>
                  <Header as='h1' color='teal'>Project Thomas</Header>
                  <List  divided inverted relaxed className='list' verticalAlign='middle' size='medium'>
                  <List.Item>
                      <List.Content>
                        <List.Header>Position</List.Header>
                          Designer and Developer
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Technology</List.Header>
                        C, Arduino
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Description</List.Header>
                        This was the first renditon of an ongoing project and study to create a functional robot with the lowest cost possible.
                      </List.Content>
                    </List.Item> 
                  </List>
                </div>
              </div>
              </Modal.Content>
            </div>
        </Modal>

        <Responsive {...Responsive.onlyMobile}>
        <Modal className='container' basic closeIcon  size='small' open={openAssure} onClose={this.closeAssure}>
            <div className='modal-container'>
              <Modal.Content>
              <div className='rowMobile'>
                <div className='columnMobile'>
                <div className='image-container'>
                  <Image className='assureBackground' src={Aure}></Image>
                  </div>
                  <Header as='h1' color='teal'>Assure Services</Header>
                  <List  divided inverted relaxed className='list' verticalAlign='middle' size='medium'>
                  <List.Item>
                      <List.Content>
                        <List.Header>Position</List.Header>
                          Software Engineer
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Technology</List.Header>
                        Angular, NgRx, MongoDB, Mongoose, Adobe Suite, Node.js
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Description</List.Header>
                        I am the primary designer and software engineer on a software suite called Glassboard by Assure Services.
                        Glassboard is designed to create the first private transaction platform.
                      </List.Content>
                    </List.Item> 
                  </List>
                  <Button onClick={this.closeAssure}>Return</Button>
                </div>
              </div>
              </Modal.Content>
            </div>
        </Modal>

          <Modal className='container' basic closeIcon size='small' open={openWalmart} onClose={this.closeWalmart}>
          <div className='modal-container'>
          <Modal.Content>
              <div className='rowMobile'>
                <div className='columnMobile'>
                  <div className='image-container'>
                  <Image className='assureBackground' src={Wal}></Image>
                  </div>
                  <Header as='h1' color='teal'>Walmart</Header>
                  <List  divided inverted relaxed className='list' verticalAlign='middle' size='medium'>
                  <List.Item>
                      <List.Content>
                        <List.Header>Position</List.Header>
                          Software Engineer
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Technology</List.Header>
                        Angular, SQL, NHybrid, MQ
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Description</List.Header>
                        I primarily worked on a platform to automate International Customs documentation on transactions.
                        I also worked on creating Middleware to transfer Inventory data across multiple servers worldwide 
                        and an error tracking chrome extension for vendors to request assistance.
                        
                      </List.Content>
                    </List.Item> 
                  </List>
                  <Button onClick={this.closeWalmart}>Return</Button>
                </div>
              </div>
              </Modal.Content>
            </div>
        </Modal>

          <Modal className='container' basic closeIcon size='small' open={openRevature} onClose={this.closeRevature}>
          <div className='modal-container'>
          <Modal.Content>
              <div className='rowMobile'>
                <div className='columnMobile'>
                <div className='image-container'>
                  <Image className='assureBackground' src={Rev}></Image>
                  </div>
                  <Header as='h1' color='teal'>Revature</Header>
                  <List  divided inverted relaxed className='list' verticalAlign='middle' size='medium'>
                  <List.Item>
                      <List.Content>
                        <List.Header>Position</List.Header>
                          Software Engineer
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Technology</List.Header>
                       Angular, C#, SQL, Entity Framework
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Description</List.Header>
                        I helped designed and create a Single Sign On Service for Revatue and their employees within their internal platform.
                      </List.Content>
                    </List.Item> 
                  </List>
                  <Button onClick={this.closeRevature}>Return</Button>
                </div>
              </div>
              </Modal.Content>
            </div>
        </Modal>

          <Modal className='container' basic closeIcon size='small' open={openMvemjsun} onClose={this.closeMvemjsun}>
          <div className='modal-container'>
          <Modal.Content>
              <div className='rowMobile'>
                <div className='columnMobile'>
                <div className='image-container'>
                <video width='100%' autoPlay controls>
                  <source src={video} type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>
                </div>
                  <Header as='h1' color='teal'>MVEMJSUN</Header>
                  <List  divided inverted relaxed className='list' verticalAlign='middle' size='medium'>
                  <List.Item>
                      <List.Content>
                        <List.Header>Position</List.Header>
                          Software Developer and 3D Designer
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Technology</List.Header>
                          C#, Unity3D, Sketch
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Description</List.Header>
                        A personal project I was apart of that aimed to create a 3D Renditon of the solar system utilizing Motion Tracking.
                        The project was aimed to build a Interactive installation for the Museum of Sciene and Industry in Chicago.
                      </List.Content>
                    </List.Item> 
                  </List>
                  <Button onClick={this.closeMvemjsun}>Return</Button>
                </div>
              </div>
              </Modal.Content>
            </div>
        </Modal>

          <Modal className='container' basic closeIcon size='small' open={openCores} onClose={this.closeCores}>
           <div className='modal-container'>
           <Modal.Content>
              <div className='rowMobile'>
                <div className='columnMobile'>
                <div className='image-container'>
                  <Image className='assureBackground' src={Core}></Image>
                  </div>
                  <Header as='h1' color='teal'>The Cores</Header>
                  <List  divided inverted relaxed className='list' verticalAlign='middle' size='medium'>
                  <List.Item>
                      <List.Content>
                        <List.Header>Position</List.Header>
                          Software Developer and Creator
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Technology</List.Header>
                        Swift, XCode
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Description</List.Header>
                        The game was created in Swift just to understand the technology and the Apple Development Ecosystem.
                      </List.Content>
                    </List.Item> 
                  </List>
                  <Button onClick={this.closeCores}>Return</Button>
                </div>
              </div>
              </Modal.Content>
            </div>
        </Modal>
        <Modal className='container' basic closeIcon size='small' open={openThomas} onClose={this.closeThomas}>
         <div className='modal-container'>
         <Modal.Content>
              <div className='rowMobile'>
                <div className='columnMobile'>
                <div className='image-container'>
                  <Image className='assureBackground' src={projt}></Image>
                  </div>
                  <Header as='h1' color='teal'>Project Thomas</Header>
                  <List  divided inverted relaxed className='list' verticalAlign='middle' size='medium'>
                  <List.Item>
                      <List.Content>
                        <List.Header>Position</List.Header>
                          Designer and Developer
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Technology</List.Header>
                        C, Arduino
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Description</List.Header>
                        This was the first renditon of an ongoing project and study to create a functional robot with the lowest cost possible.
                      </List.Content>
                    </List.Item> 
                  </List>
                  <Button onClick={this.closeThomas}>Return</Button>
                </div>
              </div>
              </Modal.Content>
            </div>
        </Modal>
        </Responsive>
      </div>
    );
  }
}

export default works;
