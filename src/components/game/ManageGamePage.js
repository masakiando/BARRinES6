import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import GameForm from './GameForm';
// import { Redirect } from 'react-router-dom';
import * as gameActions from '../../actions/gameActions';
import toastr from 'toastr';

export class ManageGamePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      game: Object.assign({}, this.props.game),
      errors: {},
      saving: false
    };

    this.updateGameState = this.updateGameState.bind(this);
    this.saveGame = this.saveGame.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.game.id != nextProps.game._id) {
      this.setState({
        game: Object.assign({}, nextProps.game)
      });
    }
  }

  updateGameState(event) {
    let game = this.state.game;
    const field = event.target.name;
    game[field] = event.target.value;
    return this.setState({game: game});
  }

  GameFormIsValid() {
    debugger;
    let formIsValid = true;
    let errors = {};

     if(!this.state.game.title) {
       errors.title = "Can not be empty";
       formIsValid = false;
       console.log('Server isValid title Fail 😩');
     }
      if(!this.state.game.cover) {
       errors.cover = "Can not be empty";
       formIsValid = false;
       console.log('Server isValid cover Fail 😩');
     }
     this.setState({errors: errors});
     return formIsValid;
  }

  saveGame(event) {
    debugger;
    event.preventDefault();

    if(!this.GameFormIsValid()) {
      return;
    }
    debugger;
    this.setState({saving: true});
    this.props.actions.saveGame(this.state.game)
    .then(
      () => this.redirect(),
      (err) => err.res.json()
      .then(
        ({errors}) => {
          debugger;
          toastr.error(err);
          this.setState({errors, saving: false});
       })
    );
  }

  redirect() {
    debugger;
    this.setState({saving: false});
    toastr.success('Game saved');
    this.context.router.push('/games');
  }

  render() {
    debugger;
    return (
      <GameForm
        onChange={this.updateGameState}
        onSave={this.saveGame}

        game={this.state.game}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageGamePage.propTypes = {
  game: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageGamePage.contextTypes = {
  router: PropTypes.object
};

function getGameById(games, id) {
  const game = games.filter(game => game._id == id);
  if (game) return game[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const gameId = ownProps.params.id;

  let game = {
    id: '',
    title: '',
    cover: ''
  };
  debugger;
  if (gameId && state.games.length > 0) {
    game = getGameById(state.games, gameId);
  }
  return {
    game: game
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageGamePage);
