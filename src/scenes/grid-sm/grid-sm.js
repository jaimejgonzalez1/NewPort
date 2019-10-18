import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import './grid-sm.css'

class grid extends Component {
  render() {
    return (
      <div className='grid'>
        <Grid>
          <Grid.Row>
            <Image className='icon' src={this.props.github} avatar />
            <a href='https://github.com/jaimejgonzalez1' rel='noopener noreferrer' target='_blank' className='shift'>
              www.github.com/jaimejgonzalez1
            </a>
          </Grid.Row>
          <Grid.Row>
            <Image className='icon' src={this.props.link} avatar />
            <a href='https://www.linkedin.com/in/jaimejgonzalez-1/' rel='noopener noreferrer' target='_blank' className='shift'>
              www.linkedin.com/in/jaimejgonzalez-1
            </a>
          </Grid.Row>
          <Grid.Row>
            <Image className='icon' src={this.props.mail} avatar />
            <a href='mailto:jaimejgonzalez1@gmail.com?Subject=Hello!' className='shift'>
              jaimejgonzalez1@gmail.com
            </a>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default grid
