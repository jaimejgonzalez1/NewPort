import React, { Component } from 'react';
import './works.css';
import { Header,Button, Icon,Card } from 'semantic-ui-react';
import refract from '../media/images/Refract.jpg'
import mvem from '../media/images/Mvem.jpg'
import projt from '../media/images/Projt.jpg'
import Core from '../media/images/Core.jpg'
import kenu from '../media/images/kenu.jpg'
import Rev from '../media/images/Rev.jpg'
import Wal from '../media/images/Wal.jpg'
import BMars from '../media/images/BeforeMars.jpg'

class works extends Component {
  render() {
    return (
      <div>
        <div className='worksGrid'>
            {/* <Header className="worksHero" size='huge' as='h2'>
                {this.props.big}
                <Header.Subheader>
                  {this.props.small}
                </Header.Subheader>
            </Header> */}
            <Card.Group stackable itemsPerRow={4}>
                <Card as='a' href="https://beforemars.org" target="_blank" color='red' 
                image={BMars}     
                header='BeforeMars'
                meta='Environment Awareness Project'
                description='React Application to give people cost analysis charts for eco-friendly options'  />
                 <Card as='a' href="http://mvemjsun.jaimejgonzalez.com" target="_blank" color='red' 
                image={mvem}     
                header='MVEMJSUN'
                meta='Interactive Kinect Project'
                description='3D interaction installation built using C#, Unity3D and Microsoft Kinect' />
                <Card as='a' href="https://github.com/jaimejgonzalez1/r6e-web" target="_blank"  color='red' 
                image={Rev}     
                header='Client: Revature '
                meta='Single Sign On Service'
                description='A single sign on service for business authenication and authorization'/>
                <Card as='a' href="https://github.com/jaimejgonzalez1/ServiceRequestChromeExt." target="_blank"  color='red' 
                image={Wal}     
                header='Client: Walmart '
                meta='Application Development'
                description='International Customs Transfer Portal'  />
                 <Card as='a' href="https://github.com/jaimejgonzalez1/TheCore" target="_blank" color='red' 
                image={Core}     
                header='The Cores'
                meta='iOS application'
                description='Swift iOS Spritekit Game'/>
                 <Card as='a' href="http://www.kenutourism.com" target="_blank" color='red' 
                image={kenu}     
                header='Ken U Tourism'
                meta='Freelance Tourism Site'
                description='Tourism Platform for an Osaka-based Company' />
                 <Card as='a' href="http://refract.jaimejgonzalez.com" target="_blank" color='red' 
                image={refract}     
                header='Refract'
                meta='Service Exchange Platform'
                description='Platform for students to exchange and collaborate their crafts'/>
                <Card as='a' href="https://github.com/jaimejgonzalez1/ArduinoC" target="_blank" color='red' 
                image={projt}     
                header='Project Thomas'
                meta='Low Cost Production Robot'
                description='Experiment to produce small scale humanoid robot'   />
     

             
            </Card.Group>
          </div>
      </div>
    );
  }
}

export default works;
