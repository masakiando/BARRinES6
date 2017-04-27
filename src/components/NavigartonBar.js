import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

class NavigationBar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    this.props.logout();
    // .then(
    //   () => this.context.router.push('/')
    // );
  }

  render() {
    const { isAuthenticated } = this.props.authentication;

    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="#" onClick={this.logout}>
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/signup">Sign up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    );

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Pluralsight</Link>
          </div>

          <div className="collapse navbar-collapse">
            { isAuthenticated ? userLinks : guestLinks }
          </div>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  authentication: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// NavigationBar.contextTypes = {
//   router: React.PropTypes.object.isRequired
// }

function mapStateToProps(state) {
  return {
    authentication: state.authentication
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
