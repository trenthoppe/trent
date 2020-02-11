import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

const Sketch = p5 => {
    let rotation = 0;
  
    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    };

    p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }
  
    p5.myCustomRedrawAccordingToNewPropsHandler = props => {
        if (props.rotation){
            rotation = props.rotation * Math.PI / 180;
        }
    };
  
    p5.draw = function () {
        p5.background(200);
        p5.normalMaterial();
        p5.noStroke();
        p5.push();
        p5.rotateY(rotation);
        p5.rotateX(rotation);
        p5.box(100);
        p5.pop();
        p5.frameRate(50);
        rotation += .01;
    };
};

const Canvas = props => {

    
    return <P5Wrapper sketch={Sketch} rotation={200}></P5Wrapper>
}

export default Canvas;