import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Flight from '../components/Flight';
import CarrierSelector from '../components/CarrierSelector';
import * as flightsActions from '../actions/flights';

class Flights extends Component {

  componentDidMount() {
    const { loadAllFlights } = this.props.flightsActions;
    loadAllFlights();
  }

  renderMain() {
    const { fetching, error, filteredFlights } = this.props;
    if (fetching) {
      return <div>Loading ...</div>;
    }

    if (error) {
      return (
        <div>
          <h2>An error occured, please try again later :)</h2>
          <small>{error.message}</small>
        </div>
      );
    }
    return (
      <ul className="unmarked-list">
        {filteredFlights
          .map(flight =>
            (<li key={flight.id}>
              <Flight {...flight} />
            </li>),
        )}
      </ul>
    );
  }


  render() {
    const { flights } = this.props;
    const { setSelectedCarrier } = this.props.flightsActions;
    const carriers = flights
                      .map(flight => flight.carrier)
                      .filter((item, i, ar) => ar.indexOf(item) === i);

    return (
      <div>
        <h1 className="h1">Available flights</h1>
        <CarrierSelector onSelect={setSelectedCarrier} carriers={carriers} />

        {this.renderMain()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { flights, selectedCarrier } = state.flights;
  return {
    flights,
    filteredFlights: flights.filter((flight) => {
      if (selectedCarrier) {
        return flight.carrier === selectedCarrier;
      }
      return true;
    }),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    flightsActions: bindActionCreators(flightsActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Flights);

Flights.defaultProps = {
  error: null,
  fetching: false,
};

Flights.propTypes = {
  flights: PropTypes.arrayOf(
      PropTypes.shape({}),
  ).isRequired,
  filteredFlights: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  fetching: PropTypes.bool,
  flightsActions: PropTypes.shape({
    loadAllFlights: PropTypes.func.isRequired,
    setSelectedCarrier: PropTypes.func.isRequired,
  }).isRequired,
};
