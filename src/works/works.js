import React, { Component } from 'react';
import './works.css';
import { Header,Button, Icon,Card } from 'semantic-ui-react';
import refract from '../media/images/refract.png'
import mvem from '../media/images/mvem.jpg'
import projt from '../media/images/projectThomas.jpg'
import Core from '../media/images/icoDIVE.png'

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
                <Card color='red' 
                image={mvem}     
                header='BeforeMars'
                meta='Environment Awareness Project'
                description='React Application to give people cost analysis charts for eco-friendly options'  />
                 <Card color='red' 
                image={mvem}     
                header='MVEMJSUN'
                meta='Interactive Kinect Project'
                description='3D interaction installation built using C#, Unity3D and Microsoft Kinect' />
                <Card color='red' 
                image={mvem}     
                header='Client: Revature '
                meta='Single Sign On Service'
                description='A single sign on service for business authenication and authorization'/>
                <Card color='red' 
                image={mvem}     
                header='Client: Walmart '
                meta='Application Development'
                description='International Customs Transfer Portal'  />
                 <Card color='red' 
                image={Core}     
                header='The Cores'
                meta='iOS application'
                description='Swift iOS Spritekit Game'/>
                 <Card color='red' 
                image={mvem}     
                header='Ken U Tourism'
                meta='Freelance Tourism Site'
                description='Tourism Platform for an Osaka-based Company' />
                 <Card color='red' 
                image={refract}     
                header='Refract'
                meta='Service Exchange Platform'
                description='Platform for students to exchange and collaborate their crafts'/>
                <Card color='red' 
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
