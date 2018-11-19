import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Result from './Result';


class Apppp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.updateCounterState = this.updateCounterState.bind(this);
  }

  updateCounterState(event) {
    const aaa = event.target.value;
    const bbb = parseInt(aaa, 10);
    return this.setState({counter: this.state.counter + bbb});
  }

  render() {
    return (
      <div>
        <Button
          value={1}
          onChange={this.updateCounterState}
        />
        <Button
          value={10}
          onChange={this.updateCounterState}
        />
        <Button
          value={50}
          onChange={this.updateCounterState}
        />
        <Button
          value={100}
          onChange={this.updateCounterState}
        />
        <Result conuter={this.state.counter} />
      </div>
    );
  }
}

export default Apppp;
