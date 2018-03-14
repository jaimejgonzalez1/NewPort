import React , {Component}from 'react'
import { CSSTransition } from 'react-transition-group'
import { Header} from 'semantic-ui-react';
import './hero.css';


const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);


class hero extends Component {
  constructor(...args) {
    super(...args);
    this.state = { show: false }

    setInterval(() => {
      this.setState({ show: !this.state.show })
    }, 5000)
  }

  render() {
    return (
      // <Fade in={this.state.show}>
          <div className='Quote'>
            <Header className="hero" size='huge' as='h2'>
                {this.props.big}
                <Header.Subheader>
                  {this.props.small}
                </Header.Subheader>
            </Header>
            <p className='sideText'>{this.props.para}</p>
          </div>
      // </Fade>   
    );
  }
}

export default hero;


