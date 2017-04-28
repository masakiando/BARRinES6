import React, {PropTypes} from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

const LoginForm = ({
  onChange,
  onLogin,
  identifier,
  password,
  errors,
  loading
}) => {
  return (
    <form onSubmit={onLogin}>
      <h1>Login</h1>
      {errors.dbAuth &&
        <div className="alert alert-danger">
          {errors.dbAuth}
        </div>
      }

      <TextFieldGroup
        onChange={onChange}
        name="identifier"
        label="Username / Email"
        value={identifier}
        error={errors.identifier}
        type="text"
      />

      <TextFieldGroup
        onChange={onChange}
        name="password"
        label="Password"
        value={password}
        error={errors.password}
        type="password"
      />

      <div className="form-group">
      <button disabled={loading}
              className="btn btn-primary btn-lg">
        {loading ? 'Login中' : 'Login'}
      </button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  identifier: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errors: PropTypes.object,
  loading: PropTypes.bool
};

export default LoginForm;
