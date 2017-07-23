import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Flight = ({ carrier, direction, departure, arrival }) => {
  const departureDate = moment(departure).format('MMMM Do YYYY, hh:mm');
  const arrivalDate = moment(arrival).format('MMMM Do YYYY, hh:mm');

  return (
    <div className="flight well">
      <div>Flight by &quot;{carrier}&quot; from {direction.from} to {direction.to}</div>
      <div>Departure time: {departureDate}</div>
      <div>Arrival time: {arrivalDate}</div>
    </div>
  );
};

Flight.propTypes = {
  carrier: PropTypes.string.isRequired,
  direction: PropTypes.shape({
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }).isRequired,
  departure: PropTypes.string.isRequired,
  arrival: PropTypes.string.isRequired,
};

export default Flight;
