import React, { Component } from 'react';
import p5 from 'p5';

import sketch from './p5-sketch';

export default class Sketch extends Component {

    componentDidMount() {
        new p5(sketch);
        console.log('asdf');
    }

    render() {
        return(
            <div id="sketch"></div>
        );
    }
}
