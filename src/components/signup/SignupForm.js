import React, {PropTypes} from 'react';
import map from 'lodash/map';
import classnames from 'classnames';
import TextFieldGroup from '../common/TextFieldGroup';
import timezones from '../../data/timezones';

const SignupForm = ({
  onChange,
  onSignup,
  username,
  email,
  password,
  passwordConfirmation,
  timezone,
  errors,
  isLoading,
  inValid,
  checkUserExists
}) => {
  // const { errors } = this.state;
  const options = map(
    timezones,
    (val, key) => <option key={val} val={val}>{key}</option>
  );
  debugger;
  return (
    <form onSubmit={onSignup}>
      <h1>Join our community!</h1>
      <TextFieldGroup
        onChange={onChange}
        name="username"
        label="Username"
        value={username}
        error={errors.username}
        type="text"
        checkUserExists={checkUserExists}
      />

      <TextFieldGroup
         onChange={onChange}
         name="email"
         label="Email"
         value={email}
         error={errors.email}
         type="text"
         checkUserExists={checkUserExists}
        />

    <TextFieldGroup
        onChange={onChange}
        name="password"
        label="Password"
        value={password}
        error={errors.password}
        type="password"
      />

    <TextFieldGroup
        onChange={onChange}
        name="passwordConfirmation"
        label="Password Confirmation"
        value={passwordConfirmation}
        error={errors.passwordConfirmation}
        type="password"
      />

      <div className={classnames("form-group", { 'has-error': errors.timezone })}>
        <label className="control-label">Timezone</label>
        <select
          onChange={onChange}
          name="timezone"
          value={timezone}
          className="form-control"
        >
          <option value="" disabled>Choose Your timezones</option>
          {options}
        </select>
        {errors.timezone && <div className="alert alert-danger">{errors.timezone}</div>}
      </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg"
                  disabled={isLoading || inValid.username || inValid.email}>
            Sign up
          </button>
        </div>
    </form>
  );
};

//this.props list
SignupForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSignup: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
  errors: PropTypes.object,
  isLoading: PropTypes.bool,
  inValid: PropTypes.object,
  checkUserExists: PropTypes.func
};

export default SignupForm;
