import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Buuton extends Component {
  render() {
    return (
      <from>
        <button onClick={this.props.onChange} value={this.props.value}>
          {this.props.value}
        </button>
      </from>

    );
  }
}

Buuton.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.Num
};
export default Buuton;
