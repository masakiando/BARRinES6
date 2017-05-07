// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import NavigartonBar from './NavigartonBar';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import FlashMessagesList from './flash/FlashMessagesList';

class App extends React.Component {
  render() {
    debugger;
    return (
      <div className="container-fluid">
        <NavigartonBar />
        <FlashMessagesList />
        <Header
          loading={this.props.loading}
        />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  debugger;
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
