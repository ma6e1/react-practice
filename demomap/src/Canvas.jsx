import React, { Component } from 'react';
import paper from 'paper';

class Canvas extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    paper.setup("myCanvas");
    var aisle = new paper.Path.Rectangle({
      point: [265, 0],
      size: [30, 800],
      fillColor: '#ff6666'
    });
    var cart = new paper.Path.Rectangle({
      point: [0, 0],
      size: [40, 30],
      fillColor: 'grey'
    })
    paper.view.onFrame = function(event) {
      cart.position.x += 1;
    }
    paper.view.draw();
  }

  render() {
    return (
      <canvas id="myCanvas" data-paper-resize />
    )
  }
}

export default Canvas;
