import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import NumberInput from '../common/NumberInput';
import classnames from 'classnames';
import categoryData from '../../data/starbucksCategoryData';
import map from 'lodash/map';

const StarbucksForm = ({
  onChange,
  onSave,
  menu,
  errors,
  saving
}) => {
  const options = map(
    categoryData,
    (val, key) => <option key={val} val={val}>{key}</option>
  );
  return (
   <form>
     <h1>Manage Menu</h1>

       <TextInput
         name="productName"
         label="productName"
         value={menu.productName}
         onChange={onChange}
         error={errors.productName}
      />

      <div className={classnames("form-group", { 'has-error': errors.category })}>
        <label className="control-label">category</label>
        <select
         name="category"
         value={menu.category}
         onChange={onChange}
         className="form-control"
        >
        <option value="" disabled>category</option>
         {options}
        </select>
        {errors.category && <div className="alert alert-danger">{errors.category}</div>}
      </div>

      <NumberInput
        name="shortSizePrice"
        label="shortSizePrice"
        value={menu.shortSizePrice}
        onChange={onChange}
        error={errors.shortSizePrice}
        />

      <NumberInput
        name="tallSizePrice"
        label="tallSizePrice"
        value={menu.tallSizePrice}
        onChange={onChange}
        error={errors.tallSizePrice}
        />

      <NumberInput
        name="grandeSizePrice"
        label="grandeSizePrice"
        value={menu.grandeSizePrice}
        onChange={onChange}
        error={errors.grandeSizePrice}
        />

      <NumberInput
        name="ventiSizePrice"
        label="ventiSizePrice"
        value={menu.ventiSizePrice}
        onChange={onChange}
        error={errors.ventiSizePrice}
        />

        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Saving�' : 'Save'}
          className="btn btn-primary"
          onClick={onSave}
        />
   </form>
 );
};

StarbucksForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,

  menu: PropTypes.object.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool
};

export default StarbucksForm;
