import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import NumberInput from '../common/NumberInput';
import DataInput from '../common/DataInput';
import classnames from 'classnames';
import countryDate from '../../data/countryDate';
import map from 'lodash/map';

const TripForm = ({
  trip, onChange, errors, onSave
}) => {
  const options = map(
    countryDate,
    (val, key) => <option key={val} val={val}>{key}</option>
  );
  return (
    <form>
      <h1>Manage Trip</h1>

      <div className={classnames("form-group", { 'has-error': errors.country })}>
        <label className="control-label">Country</label>
        <select
         name="country"
         value={trip.country}
         onChange={onChange}
         className="form-control"

        >
        <option value="" disabled>Select Country</option>
         {options}
        </select>
        {errors.country && <div className="alert alert-danger">{errors.country}</div>}
      </div>

      <NumberInput
        name="stayingTime"
        label="stayingTime"
        value={trip.stayingTime}
        onChange={onChange}
      />

     <DataInput
       name="entry"
       label="entry"
       value={trip.entry}
       onChange={onChange}
     />

     <DataInput
       name="departure"
       label="departure"
       value={trip.departure}
       onChange={onChange}
     />
   <input
     type="submit"
     value="Save"
     className="btn btn-primary"
     onClick={onSave}
   />
    </form>
  );
}; //TripForm end

TripForm.propTypes = {
  trip: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired
};

export default TripForm;
