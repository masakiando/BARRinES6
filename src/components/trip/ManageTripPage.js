import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import TripForm from './TripForm';
import * as tripActions  from '../../actions/tripActions';
import  {bindActionCreators} from 'redux';
import toastr from 'toastr';

class ManageTripPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      trip: Object.assign({}, this.props.trip),
      errors: {}
    };
    this.updateTripState = this.updateTripState.bind(this);
    this.saveTrip = this.saveTrip.bind(this);
  }

  updateTripState(event) {
    const field = event.target.name;
    let trip = this.state.trip;
    trip[field] = event.target.value;
    return this.setState({ trip: trip });
  }

 saveTrip(event) {
   event.preventDefault();
  //  if(!this.TripFormIsValid()) {
  //    return;
  //  }
   debugger;
   this.props.actions.saveTrip(this.state.trip)
   .then(() => this.redirect());
 }

 redirect() {
   toastr.success('Trip saved\n\tgoode✌️');
   this.context.router.push('/trips');
 }

  render() {
    return (
      <TripForm
        trip={this.state.trip}
        onChange={this.updateTripState}
        errors={this.state.errors}
        onSave={this.saveTrip}
      />
    );
  }

} // class end

ManageTripPage.propTypes = {
  trip: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageTripPage.contextTypes = {
  router: PropTypes.object
};

function getTripById(trips, id) {
  const trip = trips.filter(trip => trip._id == id);
  if(trip) return trip[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const tripId = ownProps.params.id;
  let trip = {
    id: '',
    country: '',
    stayingTime: '',
    entry: '',
    departure: ''
  };
  if(tripId && state.trips.length > 0 ) {
    trip = getTripById(state.trips, tripId);
  }
  return {
    trip: trip
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      tripActions,
      dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageTripPage);
