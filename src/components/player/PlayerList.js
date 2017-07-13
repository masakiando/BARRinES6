import React, { PropTypes } from 'react';
import PlayerListRow from './PlayerListRow';

const PlayerList = ({
  players,
  onDelete
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>playerName</th>
          <th>Positon</th>
          <th>nationality</th>
          <th>age</th>
          <th>ShirtNumber</th>
          <th>imgUrl</th>
          <th>manage</th>
        </tr>
      </thead>
      <tbody>
      {players.map(player =>
        <PlayerListRow
          key={player._id}
          player={player}
          onDelete={onDelete}
        />
      )}
      </tbody>
    </table>
  );
}; //List end

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default PlayerList;
