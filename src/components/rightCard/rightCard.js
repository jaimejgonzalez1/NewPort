import React , {Component}from 'react'
import { Header} from 'semantic-ui-react';
import './rightCard.css';


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


