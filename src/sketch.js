import p5 from 'p5';


const sketch = () => {
    let canvas;
    p5.setup = () => {
        canvas = p5.createCanvas(600, 600);
        canvas.parent('sketch');
    }
    p5.draw = () => {
        p5.background('#111');
    }
}

export default new p5(sketch);
