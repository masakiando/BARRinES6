import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import GamesList from './GamesList';
import { browserHistory } from 'react-router';
import * as gameActions from '../../actions/gameActions';

class GamesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.deleteCourse = this.deleteCourse.bind(this);
  }

  componentDidMount() {
    this.props.actions.loadGames();
  }
  deleteCourse(courseId) {
    // this.setState({saving: true});
    // this.props.actions.deleteCourse(courseId)
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
        <GamesList
          games={games}
          onDelete={this.deleteCourse}
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
