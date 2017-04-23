import React, {PropTypes} from 'react';
import LoginForm from './LoginForm';

export class LoginPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default LoginPage;
