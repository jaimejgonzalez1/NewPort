import React, { Component } from 'react';
import './works.css';
import { Header,Button, Icon,Card } from 'semantic-ui-react';
import src from '../media/images/github-2.png'

class works extends Component {
  render() {
    return (
      <div>
        <div className='worksGrid'>
            <Header className="worksHero" size='huge' as='h2'>
                {this.props.big}
                <Header.Subheader>
                  {this.props.small}
                </Header.Subheader>
            </Header>
            <Card.Group stackable itemsPerRow={3}>
                <Card color='red' 
                image={src}     
                header='BeforeMars'
                meta='Environment Awareness Project'
                description='React Application to give people cost analysis charts for eco-friendly options'  />
                 <Card color='red' 
                image={src}     
                header='MVEMJSUN'
                meta='Interactive Kinect Project'
                description='3D interaction installation built using C#, Unity3D and Microsoft Kinect' />
                <Card color='red' 
                image={src}     
                header='Client: Revature '
                meta='Single Sign On Service'
                description='A single sign on service for business authenication and authorization'/>
                <Card color='red' 
                image={src}     
                header='Client: Walmart '
                meta='Application Development'
                description=''  />
                 <Card color='red' 
                image={src}     
                header='The Cores'
                meta='iOS application'
                description='Swift iOS Spritekit Game'/>
                 <Card color='red' 
                image={src}     
                header='Ken U Tourism'
                meta='Freelance Tourism Site'
                description='Tourism Platform for an Osaka-based Company' />
                 <Card color='red' 
                image={src}     
                header='Refract'
                meta='Service Exchange Platform'
                description='Platform for students to exchange and collaborate their crafts'/>
                <Card color='red' 
                image={src}     
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
