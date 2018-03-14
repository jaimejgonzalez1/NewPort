import React , {Component}from 'react'
import { CSSTransition } from 'react-transition-group'
import { Header,Image} from 'semantic-ui-react';
import './rightCard.css';
import HeadShot from '../media/images/some.jpg'

class rightCard extends Component {

  render() {
    return (
        <div className="cardContainer">
          <div className='rCard'>
            <Header className="hero1" size='large' as='h2'>
                {this.props.big}
                <Header.Subheader>
                  {this.props.small}
                </Header.Subheader>
            </Header>
            <p className='rsideText'>{this.props.para}</p>
          </div>
        </div>
    );
  }
}

export default rightCard;


