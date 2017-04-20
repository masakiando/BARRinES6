import React, {PropTypes} from 'react';
import classnames from 'classnames';

const SignupTextInput = ({
  name,
  value,
  label,
  error,
  type,
  onChange,
  checkUserExists
}) => {

  return (
    <div className={classnames("form-group", { 'has-error': error })}>
      <label className="control-label">{label}</label>
      <input
        value={value}
        onChange={onChange}
        onBlur={checkUserExists}
        type={type}
        name={name}
        className="form-control"
        />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

SignupTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func
};

SignupTextInput.defaultProps = {
  type: 'text'
};

export default SignupTextInput;
