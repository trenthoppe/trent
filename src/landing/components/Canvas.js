import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

const Sketch = props => {
    let rotation = 0;
  
    props.setup = function () {
        props.createCanvas(600, 400, props.WEBGL);
    };
  
    props.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        if (props.rotation){
            rotation = props.rotation * Math.PI / 180;
        }
    };
  
    props.draw = function () {
        props.background(100);
        props.normalMaterial();
        props.noStroke();
        props.push();
        props.rotateY(rotation);
        props.box(100);
        props.pop();
    };
};

const Canvas = props => {
    

    return <P5Wrapper sketch={Sketch} rotation={200}></P5Wrapper>
}

export default Canvas;