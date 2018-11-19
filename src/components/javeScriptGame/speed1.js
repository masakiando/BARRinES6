import React, {PropTypes} from 'react';

let ctx;
let posX = 0;
let posY = 0;
let velocityX = 5;
let velocityY = 2;

class Speed1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Speed1"
    };
  }

  componentDidMount() {
    this.init();
  }

  init() {
    ctx = document.getElementById('Speed1').getContext("2d");
    console.log(ctx);
    setInterval( () => { this.loop(); }, 100);
  }

  loop() {
    this.clear();
    this.updatedrawdata();
    this.paint();
  }

  clear() {
    ctx.clearRect(0, 0, 600, 600);
  }

  updatedrawdata() {
    posX += velocityX;
    if (posX > 600) {
      posX = 0;
    }
    posY += velocityY;
    if (posY > 600) {
      posY = 0;
    }
  }

  paint() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,600,600);
    ctx.fillStyle = "white";
    ctx.fillRect(posX, posY, 20, 10);
    ctx.fill();
  }

  render() {
    return (
      <div className="Speed1">
        <h1>{this.state.title}</h1>
        <canvas
          id="Speed1"
          width="600"
          height="600"
          style={{width: "600px", height: "600px"}}
        >
        </canvas>
      </div>
    );
  }
}

export default Speed1;
