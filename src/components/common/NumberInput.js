import React, {PropTypes} from 'react';

const NumberInput = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  error
}) => {

  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="form-control"
          type="number"
          />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.number,
  error: PropTypes.string
};

export default NumberInput;
