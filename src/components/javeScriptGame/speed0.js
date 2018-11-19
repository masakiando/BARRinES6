import React, {PropTypes} from 'react';

let ctx;
let posX = 0;
let velocityX = 5;

class Speed0 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Speed0"
    };
  }

  componentDidMount() {
    ctx = document.getElementById('Speed0').getContext("2d");
    console.log(ctx);
    setInterval( () => { this.tick(); }, 100);
  }

  tick() {
    posX += velocityX;
    if (posX > 600) {
      posX = 0;
    }
    this.paint();
  }

  paint() {
    ctx.clearRect(0, 0, 600, 600);
    console.log('paint');
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,600,600);
    ctx.fillStyle = "white";
    ctx.fillRect(posX, 200, 20, 10);
    ctx.fill();
  }

  render() {
    return (
      <div className="Speed0">
        <h1>{this.state.title}</h1>
        <canvas
          id="Speed0"
          width="600"
          height="600"
          style={{width: "600px", height: "600px"}}
        >
        </canvas>
      </div>
    );
  }
}

export default Speed0;
