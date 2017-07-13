import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import TripList from './TripList';
import * as tripActions  from '../../actions/tripActions';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

class TripsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddTripPage = this.redirectToAddTripPage.bind(this);
    this.deleteTrip = this.deleteTrip.bind(this);
  }

  redirectToAddTripPage(){
    browserHistory.push('/trip');
  }

  deleteTrip(event) {
    event.preventDefault();
    const tripId = event.target.id;
    this.props.actions.deleteTrip(tripId);
  }



  render() {
    const {trips} = this.props;

    return (
      <div>
        <h1>Trips List</h1>
        <input
          type="submit"
          value="Add Trip"
          className="btn btn-primary"
          onClick={this.redirectToAddTripPage}
          />
        <TripList
          trips={trips}
          onDelete={this.deleteTrip}
        />
      </div>
    );
  }
} //class end

TripsPage.propTypes  = {
  trips: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    trips: state.trips
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tripActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsPage);
