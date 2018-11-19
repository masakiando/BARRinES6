import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CardList = ({
  cards
}) => {
  return (
    <div>
      <h2>{cards.id}</h2>
      <h2>{cards.title}</h2>
      <h2>{cards.cover}</h2>
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.object.isRequired
};

export default CardList;
