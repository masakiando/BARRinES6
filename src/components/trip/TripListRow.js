import React, { PropTypes } from 'react';
import {Link} from 'react-router';

const TripListRow = ({
  trip, onDelete
}) => {
  return (
    <tr>
      <td>
        <Link to={`/trip/${trip._id}`}>
          {trip.country}
        </Link>
      </td>
      <td>{trip.stayingTime}</td>
      <td>{trip.entry}</td>
      <td>{trip.departure}</td>
      <td>
        <input
          type="submit"
          className="btn btn-primary"
          value="Delete"
          onClick={onDelete}
          id={trip._id}
        />
      </td>
    </tr>
  );
}; // TripListRow end

TripListRow.propTypes = {
  trip: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TripListRow;
