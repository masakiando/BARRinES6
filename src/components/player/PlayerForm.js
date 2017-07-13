import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import NumberInput from '../common/NumberInput';

const PlayerForm = ({ player, onChange, onSave, errors }) => {
  const NewCreate = (<h1>Player NewCreate</h1>)
  const Edit = (<h1>Player Edit</h1>)

  return (
  <form>
    {!player._id ? NewCreate : Edit}

    <TextInput
      name="playerName"
      label="playerName"
      value={player.playerName}
      onChange={onChange}
      error={errors.playerName}
    />

    <TextInput
      name="Positon"
      label="Positon"
      value={player.Positon}
      onChange={onChange}
      error={errors.Positon}
    />

    <TextInput
      name="nationality"
      label="nationality"
      value={player.nationality}
      onChange={onChange}
      error={errors.nationality}
    />


    <NumberInput
      name="age"
      label="age"
      value={player.age}
      onChange={onChange}
      error={errors.age}
    />

    <NumberInput
      name="ShirtNumber"
      label="ShirtNumber"
      value={player.ShirtNumber}
      onChange={onChange}
      error={errors.ShirtNumber}
    />

    <TextInput
      name="imgUrl"
      label="imgUrl"
      value={player.imgUrl}
      onChange={onChange}
      error={errors.imgUrl}
    />

    <input
      type="submit"
      value="saving"
      className="btn btn-primary"
      onClick={onSave}
    />
  </form>
  );
}; //end

PlayerForm.propTypes = {
  player: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default PlayerForm;
