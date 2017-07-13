import React, {PropTypes} from 'react';

export class CorrelationCoefficient extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      x: [1,2,3,4,5,6],
      y: [1,2,3,4,5,6]
    };

  }
  //
  // let sum  = function(this.stata.x) {
  //   var sum = 0;
  //   for (var i=0,len=arr.length; i<len; ++i) {
  //       sum += arr[i];
  //   };
  //   return sum;
  // };

  render() {
    return (
      <div>CorrelationCoefficient</div>
    );
  }
}

// CorrelationCoefficient.propTypes = {
//
// };

export default CorrelationCoefficient;
