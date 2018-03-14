import React , {Component}from 'react'
import { Header} from 'semantic-ui-react';
import './hero.css';

class hero extends Component {
  render() {
    return (
    <div className='Quote'>
      <Header className="hero" size='huge' as='h2'>
          {this.props.big}
          <Header.Subheader>
            {this.props.small}
          </Header.Subheader>
      </Header>
      <p className='sideText'>Come check out my work!</p>
    </div>
    );
  }
}

export default hero;