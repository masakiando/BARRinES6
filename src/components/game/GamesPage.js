import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import GamesList from './GamesList';
import { browserHistory } from 'react-router';
import * as gameActions from '../../actions/gameActions';
import toastr from 'toastr';

class GamesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      identifier: ''
    }

    this.updateIdentifierState = this.updateIdentifierState.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.redirectToAddGamePage = this.redirectToAddGamePage.bind(this);
    this.deleteGame = this.deleteGame.bind(this);
  }

  updateIdentifierState(event) {
    event.preventDefault();
    return this.setState({
      identifier: event.target.value
    });
  }

  onSearch(event) {
    event.preventDefault();
    alert(`Search ${this.state.identifier}`);
    this.props.actions.searchGames(this.state.identifier);
    this.setState({identifier: ''});
  }

  redirect() {
    debugger;
    toastr.success('Search saved');
    this.setState({identifier: ''});
  }

  deleteGame(gameId) {
    // this.setState({saving: true});
    this.props.actions.deleteGame(gameId)
    // .then(() => this.redirect());
  } //. ※ bindを忘れない!

  redirectToAddGamePage() {
    browserHistory.push('/game');
  } //.

  render() {
    const {games} = this.props;//1つの時

    return (
      <div>
        <h1>Games List</h1>
        <input
          type="submit"
          value="Add Game"
          className="btn btn-primary"
          onClick={this.redirectToAddGamePage}/>

        <form className="hidden-sm-down">
          <div className="input-group ">
              <input
                type="text"
                className="form-control"
                placeholder="Search for..."
                onChange={this.updateIdentifierState}
                value={this.state.identifier}
                />
              <span className="input-group-btn">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={this.onSearch}
                    >Search</button>
              </span>
          </div>
        </form>

        <GamesList
          games={games}
          onDelete={this.deleteGame}
        />
      </div>
    );
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    games: state.games
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesPage);
