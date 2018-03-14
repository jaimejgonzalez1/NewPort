import React, { Component } from 'react';
import './works.css';
import { Header,Button, Icon } from 'semantic-ui-react';


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
            <p className='sideWorksText'>{this.props.para}</p>
          </div>
      </div>
    );
  }
}

export default works;
