import React, { PropTypes } from 'react';
import TripListRow from './TripListRow';

const TripList = ({
  trips, onDelete
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>country</th>
          <th>stayingTime</th>
          <th>entry</th>
          <th>departure</th>
          <th>manage</th>
        </tr>
      </thead>
      <tbody>
        {trips.map(trip =>
          <TripListRow
            key={trip._id}
            trip={trip}
            onDelete={onDelete}
          />
        )}
      </tbody>
    </table>
  );
}; // TripList end

TripList.propTypes = {
  trips: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TripList;
