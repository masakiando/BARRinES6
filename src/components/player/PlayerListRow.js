import React, { PropTypes } from 'react';
import {Link} from 'react-router';

const PlayerListRow = ({
  player,
  onDelete
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    onDelete(player._id);
  };
  return (
  <tr>
    <td>
      <Link to={`/player/${player._id}`}>
        {player.playerName}
      </Link>
    </td>
    <td>{player.Positon}</td>
    <td>{player.nationality}</td>
    <td>{player.age}</td>
    <td>{player.ShirtNumber}</td>
    <td>{player.imgUrl}</td>
    <td>
      <input
        type="submit"
        className="btn btn-primary"
        onClick={handleClick}
        value="Delete"
      />
    </td>
  </tr>
);
}; //PlayerListRow end

PlayerListRow.propTypes = {
  player: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default PlayerListRow;
