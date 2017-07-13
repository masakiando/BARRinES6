import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import PlayerForm from './PlayerForm';
import * as playerActions from '../../actions/playerAcions';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

class ManagePlayerPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      player: Object.assign({}, this.props.player),
      errors: {}
    };
    this.updatePlayerState = this.updatePlayerState.bind(this);
    this.savePlayer = this.savePlayer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    debugger; //init store.state.menu != ownProps next
    if(this.props.player.id  != nextProps.player._id) {
      this.setState({
        player: Object.assign({}, nextProps.player)
      });
    }
  }

  updatePlayerState(event) {
    const field = event.target.name;
    let player = this.state.player;
    player[field] = event.target.value;
    return this.setState({ player: player });
  }

  PlayerFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if(!this.state.player.playerName) {
      errors.playerName = "Can not be empty";
      formIsValid = false;
    }
    if(!this.state.player.Positon) {
      errors.Positon = "Can not be empty";
      formIsValid = false;
    }
    if(!this.state.player.nationality) {
      errors.nationality = "Can not be empty";
      formIsValid = false;
    }
    if(!this.state.player.age) {
      errors.age = "Can not be empty";
      formIsValid = false;
    }
    if(!this.state.player.ShirtNumber) {
      errors.ShirtNumber = "Can not be empty";
      formIsValid = false;
    }
    this.setState({errors: errors});
    return formIsValid;
  }

  savePlayer(event) {
    event.preventDefault();
    if(!this.PlayerFormIsValid()) {
      return;
    }
    this.props.actions.savePlayer(this.state.player)
    .then( () => this.redirect());
  }

  redirect() {
    toastr.success('Player saved');
    this.context.router.push('/players');
  }

  render() {
    return(
      <PlayerForm
        player={this.state.player}
        onChange={this.updatePlayerState}
        onSave={this.savePlayer}
        errors={this.state.errors}
      />
    );
  }
} // class end

ManagePlayerPage.propTypes = {
  player: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManagePlayerPage.contextTypes = {
  router: PropTypes.object
};

function getPlayerById(players, id) {
  const player = players.filter(player => player._id == id);
  if(player) return player[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const playerId = ownProps.params.id; //req url map
  let player = {
    id: '',
    playerName: '',
    Positon: '',
    nationality: '',
    age: '',
    ShirtNumber: '',
    imgUrl: ''
  };
  if(playerId && state.players.length > 0) {
    player = getPlayerById(state.players, playerId);
  }
  return {
    player: player
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      playerActions,
      dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagePlayerPage);
