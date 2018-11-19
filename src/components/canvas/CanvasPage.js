// import React, {PropTypes} from 'react';
// import { Link } from 'react-router';
//
//
// class CanvasPage extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//
//     // this.state = {
//     //
//     // };
//   }
//   init(e){
//     console.log(e);
//     alert('JavaScriptのアラート');
//     can=document.getElementById('MyCanvasArea');
//     ctx=can.getContext('2d');
//     ctx.clearReat(0,0,can.width,can.height);
//     let sel=document.forms['myform'].elements['startvalue'];
//     xMin=sel.value;
//     yMin=xMin;
//     xMax=-Min;
//     yMax=-xMin;
//     drawXAxis();
//     drawYAxis();
//   }
//   function drawXAxis() {
//     xaxisx=10;
//     xaxisy=can.height/2;
//     ctx.beginPath();
//     ctx.lineWidth=2;
//     ctx.strokeDtyle="black";
//     ctx.moveTo(xaxisx,xaxisy);
//     xaxisx=can.width-10;
//     ctx.lineTo(xaxisx,xaxisy);
//   }
//   render() {
//     let canvasStyle = {
//       border: '2px solid blue'
//     };
//     return (
//       <div className="jumbotron">
//           <canvas
//             width="600" height="600"
//             id="MyCanvasArea" style={canvasStyle}
//             tabIndex="0"
//             >
//           </canvas>
//           <br/>
//           <form id="myform">
//             Select your staring value
//             <select name="startvalue" onClick={this.init}>
//               <option value="-10">-10</option>
//               <option value="-9">-9</option>
//               <option value="-8">-8</option>
//               <option value="-7">-7</option>
//               <option value="-6">-6</option>
//               <option value="-5">-5</option>
//               <option value="-4">-4</option>
//               <option value="-3">-3</option>
//               <option value="-2">-2</option>
//               <option value="-1">-1</option>
//             </select>
//           </form>
//       </div>
//     );
//   }
// }
//
// export default CanvasPage;
