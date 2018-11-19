import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const SchoolForm = ({
  onChange,
  onSave,
  school,
  errors,
  saving
}) => {
  return (
    <form>
      <h1>Manage School</h1>
      <TextInput
        name="schoolName"
        label="schoolName"
        placeholder="学校名を入力してください"
        value={school.schoolName}
        onChange={onChange}
        error={errors.schoolName}/>
        <h1>Manage School</h1>

        <TextInput
          name="address"
          label="address"
          placeholder="住所を入力してください"
          value={school.address}
          onChange={onChange}
          error={errors.address}/>

          <TextInput
            name="Establishment"
            label="Establishment"
            placeholder="設立年を入力してください"
            value={school.Establishment}
            onChange={onChange}
            error={errors.Establishment}/>

            <TextInput
              name="phoneNumber"
              label="phoneNumber"
              placeholder="設立年を入力してください"
              value={school.phoneNumber}
              onChange={onChange}
              error={errors.phoneNumber}/>
            <input type="submit"
                   value={saving ? 'Save...' : 'Save'}
                   className="btn btn-primary"/>
    </form>
  );
};

SchoolForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  school: PropTypes.object.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool
};

export default SchoolForm;
