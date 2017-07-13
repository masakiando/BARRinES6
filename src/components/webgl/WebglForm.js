import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import classnames from 'classnames';
import categoryDate from '../../data/categoryData';
import map from 'lodash/map';

const WebglForm =({
  webgl,
  errors,
  onChange,
  onSave
}) => {
  const options = map(
    categoryDate,
    (val, key) => <option key={val} val={val}>{key}</option>
  );
  return (
    <form>
    <h1>Manage webgl</h1>
    <TextInput
      name="title"
      label="Title"
      value={webgl.title}
      onChange={onChange}
    />

    <TextInput
      name="description"
      label="description"
      value={webgl.description}
      onChange={onChange}
    />

    <div className={classnames(
      "form-group",
      {'has-error': errors.category}
    )}>
      <label className="control-label">Country</label>
      <select
       name="category"
       value={webgl.category}
       className="form-control"
       onChange={onChange}
      >
      <option value="" disabled>Select Category</option>
       {options}
      </select>
      {errors.category && <div className="alert alert-danger">{errors.category}</div>}
    </div>

   <input
    type="submit"
    value="Save"
    className="btn btn-primary"
    onClick={onSave}
   />
  </form>
  );
}; // WebglForm end

WebglForm.propTypes = {
  webgl: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default WebglForm;
