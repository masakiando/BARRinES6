import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';


const GameForm = ({
  onChange,
  onSave,

  game,
  errors,
  saving
}) => {
  let cardStyle = {
    height: 200,
    width: "30%",
    padding: 0,
    margin: 20,
    borderRadius: "0 0 5px 5px",
    display: "inline-block",
    backgroundColor: "#FFF",
    WebkitFilter: "drop-shadow(0px 0px 5px #666)",
    filter: "drop-shadow(0px 0px 5px #666)"
  };
  let imgStyle = {
    height: "80%",
    width: "100%",
    WebkitFilter: "border-radius(5px 5px 0 0)",
    filter: "border-radius(5px 5px 0 0)",
    borderRadius: "5px 5px 0 0",
    backgroundColor: "#FFF"
  };
  let labelStyle = {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    padding: 7,
    margin: 0,
    backgroundColor: "#FFF"
  };
  debugger;
  return (
    <form>
      <h1>Manage Game</h1>

      {errors.global && <div className="alert alert-danger">{errors.global}</div>}
      <TextInput
        name="title"
        label="Title"
        placeholder="コースのタイトルを入力してください"
        value={game.title}
        onChange={onChange}
        error={errors.title}/>

      <TextInput
        name="cover"
        label="Cover"
        placeholder="画像のURLを入力してください"
        value={game.cover}
        onChange={onChange}
        error={errors.cover}/>

      <div>
        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Save中' : 'Save'}
          className="btn btn-primary"
          onClick={onSave}/>
      </div>

      {game.cover !== '' &&
      <div className="field" style={cardStyle}>
        <img
          src={game.cover}
          alt="cover"
          className="ui small bordered image"
          style={imgStyle}
          />
        <p style={labelStyle}>{game.title}</p>
      </div>
        }
    </form>
  );
};

GameForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,

  game: PropTypes.object.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool
};

export default GameForm;
