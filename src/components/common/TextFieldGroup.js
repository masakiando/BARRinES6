import React, {PropTypes} from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({
  onChange,
  name,
  label,
  value,
  error,
  type,
  checkUserExists //signupで利用
}) => {

  return (
    <div className={
         classnames(
           "form-group",
           {'has-error': error}
         )}>
      <label className="control-label">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        onBlur={checkUserExists}
        type={type}
        name={name}
        className="form-control"
        />
      {error &&
        <div className="alert alert-danger">
          {error}
        </div>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  checkUserExists: PropTypes.func
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
