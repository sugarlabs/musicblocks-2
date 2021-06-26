import p5 from 'p5';
import { useEffect } from 'react';

function sketch0(sketch: p5) {
  sketch.setup = () => {
    sketch.createCanvas(400, 300);
  };

  const r = 100;
  let angle = 0;

  sketch.draw = () => {
    sketch.background(95, 39, 205);
    sketch.translate(200, 150);

    sketch.angleMode(sketch.DEGREES);
    const x = r * sketch.cos(angle);
    const y = r * sketch.sin(angle);
    sketch.line(0, 0, x, y);
    angle = (angle + 3) % 360;

    sketch.stroke(255);
    sketch.strokeWeight(10);
  };
}

function sketch1(sketch: p5) {
  sketch.setup = () => {
    sketch.createCanvas(400, 300);
    sketch.background(29, 209, 161);
  };

  let x = 0;
  let y = 125;
  let angle = 90;

  sketch.draw = () => {
    sketch.background(29, 209, 161);
    sketch.rect(x, y, 100, 50);

    sketch.angleMode(sketch.DEGREES);
    x = 150 * (1 + sketch.sin(angle));
    angle += 3;
  };
}

export default function (props: { index: number }): JSX.Element {
  const id = `p5-board-${props.index}`;

  useEffect(() => {
    new p5(props.index === 0 ? sketch0 : sketch1, document.getElementById(id) as HTMLElement);
  });

  return <div id={id}></div>;
}
