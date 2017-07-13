import React, { PropTypes } from 'react';
import GameCard from './GameCard';

const GameList = ({
  games, onDelete
}) => {
  const emptyMassage = (
    <p>There are no games yet in your collection.</p>
  );

  let containerStyle = {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fill, minmax(250px, 1fr))",
    gridGap: "1rem",
    justifyContent: "center"
  };

  const gamesList = (
       <div style={containerStyle}>
         {games.map(game =>
           <GameCard
             game={game}
             key={game._id}
             onDelete={onDelete}
           />
         )}
       </div>
  )
  return (
    <div>
      {games.length === 0 ? emptyMassage : gamesList}
    </div>
  );
};

GameList.propTypes = {
  games: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default GameList;
