import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import PlayerList from './PlayerList';
import * as playerAcions from '../../actions/playerAcions';
import {bindActionCreators} from 'redux';

class PlayersPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddPlayerPage = this.redirectToAddPlayerPage.bind(this);
    this.deletePlayer  = this.deletePlayer.bind(this);
  }

  deletePlayer(playerId) {
    debugger;
    this.props.actions.deletePlayer(playerId);
  }

  redirectToAddPlayerPage() {
    browserHistory.push('/player');
  }

  render() {
    const {players} = this.props;

    return (
      <div>
        <h1>Players List</h1>
        <input
         type="submit"
         value="Add Player"
         className="btn btn-primary"
         onClick={this.redirectToAddPlayerPage}
        />

      <PlayerList
        players={players}
        onDelete={this.deletePlayer}
      />
      </div>
    );
  }
} // class end

PlayersPage.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    players: state.players
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(playerAcions, dispatch)
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersPage);
