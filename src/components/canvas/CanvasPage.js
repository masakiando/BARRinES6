import React, {PropTypes} from 'react';
import { Link } from 'react-router';


class CanvasPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.state = {
    //
    // };
  }

  render() {
    let canvasStyle = {
      width: "100%",
      height: 300,
      borderRadius: 10,
      backgroundColor: "#0055DD",
      border: "border:2px solid blue"
    };
    return (
      <div className="jumbotron" onload="init()">
        <h1>Canvas Page</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <canvas
          id="MyCanvasArea"
          style={canvasStyle}
          >
        </canvas>
      </div>
    );
  }
}

export default CanvasPage;
