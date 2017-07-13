import React, {PropTypes} from 'react';

const DataInput = ({
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
          type="date"/>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

DataInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default DataInput;
