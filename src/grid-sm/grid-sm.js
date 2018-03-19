import React, { Component } from 'react';
import {Grid, Column,Image,Responsive} from 'semantic-ui-react';
import "./grid-sm.css";

class grid extends Component {
    


    render () {
        return (
        <div className="grid">
            <Grid >
                <Grid.Row>
                <Image className='icon' src={this.props.github} avatar />
                <a href="https://github.com/jaimejgonzalez1" target="_blank" className='shift'>www.github.com/jaimejgonzalez1</a>
                </Grid.Row>
                <Grid.Row>
                <Image className='icon' src={this.props.link} avatar />
                <a href="https://www.linkedin.com/in/jaimejgonzalez-1/" target="_blank" className='shift'>www.linkedin.com/in/jaimejgonzalez-1</a>
                </Grid.Row>
                {/* <Grid.Row>
                <Image as='a' src={this.props.res} avatar />
                <a href="#" target="_blank" className='shift'>MyResume.pdf</a>
                </Grid.Row> */}
                <Grid.Row>
                <Image className='icon'  src={this.props.mail}  avatar />
                <a href="mailto:hello@jaimejgonzalez.com?Subject=Hello!"  className='shift'>hello@jaimejgonzalez.com</a>
                </Grid.Row>
            </Grid>
          </div>
        );
    }
}

export default grid;