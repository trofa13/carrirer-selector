import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Flight from '../components/Flight';
import CarrierSelector from '../components/CarrierSelector';
import * as flightsActions from '../actions/flights';

export class Flights extends Component {
    
    componentDidMount() {
        const { loadAllFlights } = this.props.flightsActions;
        loadAllFlights();
    }


    render() {
        const { flights, filteredFlights, error, fetching } = this.props;
        const { setSelectedCarrier } = this.props.flightsActions;
        const carriers = flights.map(flight => flight.carrier)
                                .filter((item, i, ar) => { return ar.indexOf(item) === i });

        return (
            <div>
                <h1 className="h1">Available flights</h1>
                <CarrierSelector onSelect={setSelectedCarrier} carriers={carriers} />
                {fetching ? <div>Loading ...</div> :
                    error ? <div><h2>An error occured, please try again later :)</h2>
                            <small>{error.message}</small></div> : 
                            <ul className="unmarked-list">
                                    {filteredFlights.map(flight => 
                                        <li key={flight.id}>
                                            <Flight {...flight} />
                                        </li>
                                    )}
                            </ul>
                }
            </div>
        );
    }
}

function mapStateToProps (state) {
    const { flights, selectedCarrier } = state.flights;
    return {
        flights: flights,
        filteredFlights: flights.filter(flight => {
            if (selectedCarrier) {
                return flight.carrier === selectedCarrier;
            }
            return true;
        })
    }
}

function mapDispatchToProps(dispatch) {
  return {
    flightsActions: bindActionCreators(flightsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flights);