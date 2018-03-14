import React, { Component } from 'react';
import './page.css';
import { Button, Icon } from 'semantic-ui-react';
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import Hero from '../hero/hero';

class page extends Component {
  render() {
    return (
      <div >

                <Hero big ="HEY." small =" Thanks for stopping by"/>
    
      </div>
    );
  }
}

export default page;
