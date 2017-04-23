// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import FlashMessagesList from './flash/FlashMessagesList';

class App extends React.Component {
  render() {
    debugger;
    return (
      <div className="container-fluid">
        <FlashMessagesList />
        <Link to="/signup" className="box-link navbar-right" activeClassName="active">SignUp</Link>
        <Link to="/login" className="box-link navbar-right" activeClassName="active">Login</Link>
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
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
