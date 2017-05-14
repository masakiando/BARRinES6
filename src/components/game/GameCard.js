import React, { PropTypes } from 'react';
import {Link} from 'react-router';

const GameCard = ({
  game, onDelete
  }) => {
    let cardStyle = {
      height: 225,
      width: "100%",
      padding: "0 0 2.5em",
      margin: 20,
      border: 10,
      borderRadius: 5,
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)"
    };
    let imgStyle = {
      height: "100%",
      width: "100%",
      WebkitFilter: "border-radius(5px 5px 0 0)",
      filter: "border-radius(5px 5px 0 0)",
      borderRadius: "5px 5px 0 0",
      backgroundColor: "#FFF"
    };
    let labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: "0 0 0.5em 0.5em",
      borderRadius: "0 0 5px 5px",
      backgroundColor: "#FFF"
    };
    let buttonStyle = {
      margin: "0 0 0.2em 0.2em"
    };
    const handleClick = (event) => {
      event.preventDefault();
      onDelete(game._id);
    };
    return (
      <div style={cardStyle}>
        <img src={game.cover} alt="Game Cover" style={imgStyle} />
        <div className="content" style={labelStyle}>
          <p>{game.title}</p>
          <Link
            to={`/game/${game._id}`}
            className="btn btn-primary"
            style={buttonStyle}>Edit
          </Link>
          <div
            onClick={handleClick}
            className="btn btn-primary"
            style={buttonStyle}>Delete
          </div>
        </div>
      </div>
    );
};

GameCard.propTypes = {
  game: PropTypes.object.isRequired,
  onDelete: React.PropTypes.func.isRequired
};

export default GameCard;
// .image+.content>.header
