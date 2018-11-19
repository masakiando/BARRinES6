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
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    );
    debugger;
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Pluralsight</Link>
              <a href="#">
                <img src=" http://cdn.dscount.com/images_2016/top/ntop_all02.jpg" alt="dscount"/>
                <img src=" http://cdn.dscount.com/images_2016/top/btn_dscoupon02.jpg" alt="dscount"/>
              </a>
          </div>

          <div className="navbar-collapse">
            {isAuthenticated ? userLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  authentication: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

// NavigationBar.contextTypes = {
//   router: React.PropTypes.object.isRequired
// }

//login componentにてlogin後storeがstate.authenticationが持つ
//そのstate.authentication.isAuthenticatedによって表示を切り替える
// { isAuthenticated ? userLinks : guestLinks }
function mapStateToProps(state) {
  debugger;
  return {
    authentication: state.authentication
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
