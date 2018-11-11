import React, { Component } from 'react';

import threeEntryPoint from "./three/threeEntryPoint"
import "./render.css"

export default class Some extends Component {
    
    componentDidMount() {
        threeEntryPoint(this.threeRootElement);
    }

    render () {
        return (
            <div className="header-header" ref={element => this.threeRootElement = element} />
        );
    }
}