import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardList from './CardList';

class CardsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'CardsPage',
      card: {
        id: '1',
        title: 'card1',
        cover: 'cover1'
      }
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <CardList cards={this.state.card}/ >
      </div>
    );
  }
}

export default CardsPage;
