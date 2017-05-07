import React, { PropTypes } from 'react';
import {Link} from 'react-router';

const GameCard = ({
  game, onDelete
  }) => {
    let cardStyle = {
      height: 250,
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
      padding: 7,
      margin: 0,
      borderRadius: "0 0 5px 5px",
      backgroundColor: "#FFF"
    };
    const handleClick = (event) => {
      debugger;
      event.preventDefault();
      onDelete(game.id);
    };
    return (
      <div className="ui card" style={cardStyle}>
        <img src={game.cover} alt="Game Cover" style={imgStyle} />
        <div className="content" style={labelStyle}>
          <div className="header" style={labelStyle}>{game.title}</div>
          <Link to={`/game/${game._id}`} className="btn btn-primary">Edit</Link>
          <div className="btn btn-primary" onClick={handleClick}>Delete</div>
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
