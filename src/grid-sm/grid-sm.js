import React, { Component } from 'react';
import {Grid, Column,Image} from 'semantic-ui-react';
import "./grid-sm.css";

class grid extends Component {
    


    render () {
        return (
        <div className="grid">
            <Grid  stackable>
                <Grid.Row>
                <Image src={this.props.github} avatar />
                <span className='shift'>www.github.com/jaimejgonzalez1</span>
                </Grid.Row>
                <Grid.Row>
                <Image src={this.props.link} avatar />
                <span className='shift'>www.linkedin.com/in/jaimejgonzalez-1</span>
                </Grid.Row>
                <Grid.Row>
                <Image src={this.props.res} avatar />
                <span className='shift'>MyResume.pdf</span>
                </Grid.Row>
                <Grid.Row>
                <Image src={this.props.mail}  avatar />
                <span className='shift'>hello@jaimejgonzalez.com</span>
                </Grid.Row>
       
            </Grid>
          </div>
        );
    }
}

export default grid;